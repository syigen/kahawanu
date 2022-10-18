pragma solidity ^0.8.0;

import "./UserManager.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Kahawanu is AccessControl {
    using UserManager for UserManager.User;
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

    // Private Data
    mapping(address => UserManager.User) private _users;
    Counters.Counter private _userIds;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

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
}
