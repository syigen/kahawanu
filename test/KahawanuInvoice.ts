import {expect} from "chai";
import {ethers} from "hardhat";
import {Kahawanu} from "../typechain-types";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import moment, {Duration} from "moment";

describe("KahawanuTheInvoiceManager", function () {
    let owner: SignerWithAddress;
    let developer: SignerWithAddress;
    let bobWallet: SignerWithAddress;
    let aliceWallet: SignerWithAddress;
    let samanWallet: SignerWithAddress;
    let nuwanWallet: SignerWithAddress;

    let manager: Kahawanu;

    beforeEach(async function () {
        const [_owner, _developer, _bob, _alice, _saman, _nuwan] = await ethers.getSigners();
        owner = _owner;
        developer = _developer;
        bobWallet = _bob;
        aliceWallet = _alice;
        samanWallet = _saman;
        nuwanWallet = _nuwan;

        const KahawanuDeployer = await ethers.getContractFactory("Kahawanu");
        manager = await KahawanuDeployer.deploy();


        await (await manager.connect(bobWallet).register(
            "John Doe",
            "dewmalnilanka@gmail.com",
            "337, Anguruwathota Road, Wewala, Horana",
            "123456789V",
        )).wait();
    });


    describe("User Registration", function () {
        it("Register User", async function () {
            const resUser = await manager.getUser(bobWallet.address);
            expect(resUser).to.not.be.undefined;
            expect(resUser.name).to.equal("John Doe");
        });
    });

    describe("Invoice Create", async function () {
        it("Create Invoice", async function () {
            await expect(manager.createInvoice(
                "123456789V",
                moment().unix(),
                moment().add(3, 'days').unix(),
                {
                    name: "John Doe",
                    postalAddress: "337, Anguruwathota Road, Wewala, Horana",
                    email: "",
                    phoneNumber: "",
                },
                {
                    name: "John Doe",
                    postalAddress: "337, Anguruwathota Road, Wewala, Horana",
                    email: "",
                    phoneNumber: "",
                }
            )).to.be.revertedWith("User not registered");
            await (await manager.connect(bobWallet).createInvoice(
                "123456789V",
                moment().unix(),
                moment().add(3, 'days').unix(),
                {
                    name: "John Doe",
                    postalAddress: "337, Anguruwathota Road, Wewala, Horana",
                    email: "",
                    phoneNumber: "",
                },
                {
                    name: "John Doe",
                    postalAddress: "337, Anguruwathota Road, Wewala, Horana",
                    email: "",
                    phoneNumber: "",
                }
            )).wait();
        });
    });
});
