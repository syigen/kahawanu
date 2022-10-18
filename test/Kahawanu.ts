import {expect} from "chai";
import {ethers} from "hardhat";
import {Kahawanu} from "../typechain-types";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";

describe("KahawanuTheInvoiceManager", function () {
    let owner: SignerWithAddress;
    let developer: SignerWithAddress;
    let bobWallet: SignerWithAddress;
    let aliceWallet: SignerWithAddress;
    let samanWallet: SignerWithAddress;
    let nuwanWallet: SignerWithAddress;
    beforeEach(async function () {
        const [_owner, _developer, _bob, _alice, _saman, _nuwan] = await ethers.getSigners();
        owner = _owner;
        developer = _developer;
        bobWallet = _bob;
        aliceWallet = _alice;
        samanWallet = _saman;
        nuwanWallet = _nuwan;
    });

    async function deployKahawanu(): Promise<Kahawanu> {
        const KahawanuDeployer = await ethers.getContractFactory("Kahawanu");
        return await KahawanuDeployer.deploy();
    }

    describe("Access Management", function () {
        let kahawanu: Kahawanu;
        beforeEach(async function () {
            kahawanu = await deployKahawanu();
        });

        it('Add Managers', async function () {
            await (await kahawanu.addManager(bobWallet.address)).wait();
            await expect(
                kahawanu.connect(aliceWallet).addManager(nuwanWallet.address)
            ).to.be.revertedWith(`Caller is not an admin`);
        });

        it('Remove Managers', async function () {
            await (await kahawanu.addManager(bobWallet.address)).wait();
            let hasManagerRole = await kahawanu.hasRole(await kahawanu.MANAGER_ROLE(), bobWallet.address);
            expect(hasManagerRole).to.be.true;
            await expect(
                kahawanu.connect(aliceWallet).addManager(nuwanWallet.address)
            ).to.be.revertedWith(`Caller is not an admin`);
            await expect(
                kahawanu.connect(aliceWallet).removeManager(bobWallet.address)
            ).to.be.revertedWith(`Caller is not an admin`);

            await (await kahawanu.removeManager(bobWallet.address)).wait();

            hasManagerRole = await kahawanu.hasRole(await kahawanu.MANAGER_ROLE(), bobWallet.address);
            expect(hasManagerRole).to.be.false;
        });

        it("Update user status", async function () {
            await (await kahawanu.connect(bobWallet).register(
                "John Doe",
                "dewmalnilanka@gmail.com",
                "337, Anguruwathota Road, Wewala, Horana",
                "123456789V",
            )).wait();
            let userProfile = await kahawanu.getUser(bobWallet.address);
            expect(userProfile.name).to.equal("John Doe");
            expect(userProfile.status).to.equal(0);
            await expect(
                kahawanu.connect(aliceWallet).updateUserStatus(
                    bobWallet.address,
                    1
                )).to.be.revertedWith(`Caller is not a manager`);

            await (await kahawanu.updateUserStatus(bobWallet.address, 1)).wait();
            userProfile = await kahawanu.getUser(bobWallet.address);
            expect(userProfile.name).to.equal("John Doe");
            expect(userProfile.status).to.equal(1);
        });
    });

    describe("User Registration", function () {
        let kahawanu: Kahawanu;
        beforeEach(async function () {
            kahawanu = await deployKahawanu();
        });

        it("Register User", async function () {
            await (await kahawanu.connect(bobWallet).register(
                "John Doe",
                "dewmalnilanka@gmail.com",
                "337, Anguruwathota Road, Wewala, Horana",
                "123456789V",
            )).wait();
            const resUser = await kahawanu.getUser(bobWallet.address);
            expect(resUser).to.not.be.undefined;
            expect(resUser.name).to.equal("John Doe");
        });
    });
});
