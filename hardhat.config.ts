import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        hardhat: {

        },
        sapphire: {
            // This is Testnet! If you want Mainnet, add a new network config item.
            chainId: 0x5aff,
            url: "https://testnet.sapphire.oasis.dev",
            accounts: [
                process.env.PRIVATE_KEY_ACCOUNT ?? Buffer.alloc(0, 32).toString("hex"),
                process.env.PRIVATE_KEY_ACCOUNT_OWNER ?? Buffer.alloc(0, 32).toString("hex"),
                process.env.PRIVATE_KEY_ACCOUNT_DEV ?? Buffer.alloc(0, 32).toString("hex"),
                process.env.PRIVATE_KEY_ACCOUNT_BOB ?? Buffer.alloc(0, 32).toString("hex"),
                process.env.PRIVATE_KEY_ACCOUNT_ALICE ?? Buffer.alloc(0, 32).toString("hex"),
                process.env.PRIVATE_KEY_ACCOUNT_SAMAN ?? Buffer.alloc(0, 32).toString("hex"),
                process.env.PRIVATE_KEY_ACCOUNT_NUWAN ?? Buffer.alloc(0, 32).toString("hex"),
            ],
        },
    },
};

export default config;
