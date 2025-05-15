import { ethers, network } from "hardhat";
import { writeConfig } from "./helper";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const ZBTC = await ethers.getContractFactory("ZBTC");
    const zbtc = await ZBTC.deploy("ZBTC", "ZBTC", 21000 * 10e8, {
        from: deployer.address,
        gasLimit: 8000000
    });
    await zbtc.waitForDeployment();
    const address = await zbtc.getAddress();

    console.log("ZBTC deployed to:", address);
    await writeConfig(network.name, network.name, "ZBTC", address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
