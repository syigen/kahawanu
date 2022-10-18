pragma solidity ^0.8.0;

library UserManager {
    enum UserStatus {ACTIVE, INACTIVE}

    // Private Data
    struct User {
        uint id;
        string name;
        string email;
        string postalAddress;
        string phoneNumber;
        UserStatus status;
    }

}
