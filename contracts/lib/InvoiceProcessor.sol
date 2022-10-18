pragma solidity ^0.8.0;

library InvoiceProcessor {
    struct Contact {
        string name;
        string email;
        string postalAddress;
        string phoneNumber;
    }

    struct InvoiceElement {
        string description;
        string unit;
        uint quantity;
        uint price;
        uint discount;
        bool isDiscountPercentage;
        uint tax;
        bool isTaxPercentage;
    }

    struct Payment {
        address payer;
        address receiver;
        uint amount;
        uint date;
        string description;
    }

    enum InvoiceStatus {DRAFT, SENT, CANCELLED, OVERDUE, PAID, PARTIALLY_PAID}

    struct Invoice {
        uint id;
        address creator;
        string invoiceNumber;
        uint invoiceDate;
        uint invoiceDueDate;
        Contact billTo;
        Contact shipTo;
        InvoiceStatus status;
    }


}
