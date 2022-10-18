pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./lib/UserManager.sol";
import "./lib/InvoiceProcessor.sol";

contract Kahawanu is AccessControl {
    using UserManager for UserManager.User;
    using InvoiceProcessor for InvoiceProcessor.Invoice;
    using InvoiceProcessor for InvoiceProcessor.InvoiceElement;
    using InvoiceProcessor for InvoiceProcessor.Payment;
    using Counters for Counters.Counter;


    // Access Controller
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    modifier onlyAdmin() {
        require(hasRole(ADMIN_ROLE, msg.sender), "Caller is not an admin");
        _;
    }
    modifier onlyManager() {
        require(hasRole(MANAGER_ROLE, msg.sender) || hasRole(ADMIN_ROLE, msg.sender), "Caller is not a manager");
        _;
    }


    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    // User Management
    mapping(address => UserManager.User) private _users;
    Counters.Counter private _userIds;

    function register(string memory name, string memory email, string memory postalAddress, string memory phoneNumber) public {
        _userIds.increment();
        _users[msg.sender] = UserManager.User({
        id : _userIds.current(),
        name : name,
        email : email,
        postalAddress : postalAddress,
        phoneNumber : phoneNumber,
        status : UserManager.UserStatus.ACTIVE
        });
    }

    function getUser(address userAddress) public view returns (UserManager.User memory) {
        return _users[userAddress];
    }

    function updateUserStatus(address userAddress, UserManager.UserStatus status) onlyManager public {
        require(hasRole(ADMIN_ROLE, msg.sender), "Caller is not an admin");
        _users[userAddress].status = status;
    }

    // Manager Functions
    function addManager(address managerAddress) onlyAdmin public {
        _setupRole(MANAGER_ROLE, managerAddress);
    }

    function removeManager(address managerAddress) onlyAdmin public {
        revokeRole(MANAGER_ROLE, managerAddress);
    }

    // Invoice Functions
    Counters.Counter private _invoiceIds;
    Counters.Counter private _paymentIds;
    Counters.Counter private invoiceElementIds;
    mapping(uint => InvoiceProcessor.Invoice) private _invoices;
    mapping(address => uint[]) private _userInvoices;
    mapping(uint => InvoiceProcessor.InvoiceElement) private _invoiceElements;
    mapping(uint => uint[]) private _invoiceInvoiceElements;
    mapping(uint => InvoiceProcessor.Payment) private _payments;
    mapping(uint => uint[]) private _invoicePayments;


    function createInvoice(
        string memory invoiceNumber,
        uint invoiceDate,
        uint invoiceDueDate,
        InvoiceProcessor.Contact memory billTo,
        InvoiceProcessor.Contact memory shipTo
    ) public {
        require(msg.sender != address(0), "Invalid sender address");
        require(_users[msg.sender].id != 0, "User not registered");
        require(_users[msg.sender].status == UserManager.UserStatus.ACTIVE, "User is not active");
        require(invoiceDate < invoiceDueDate, "Invoice due date must be after invoice date");
        // Create Invoice
        InvoiceProcessor.Invoice memory invoice;

        _invoiceIds.increment();
        invoice.id = _invoiceIds.current();
        invoice.creator = msg.sender;
        invoice.invoiceNumber = invoiceNumber;
        invoice.invoiceDate = invoiceDate;
        invoice.invoiceDueDate = invoiceDueDate;
        invoice.billTo = billTo;
        invoice.shipTo = shipTo;
        invoice.status = InvoiceProcessor.InvoiceStatus.DRAFT;

        // Add invoice to database
        _invoices[invoice.id] = invoice;
        _userInvoices[msg.sender].push(invoice.id);
        _userInvoices[msg.sender].push(_invoiceIds.current());
    }

    function getInvoice(uint invoiceId) public view returns (InvoiceProcessor.Invoice memory) {
        return _invoices[invoiceId];
    }

}
