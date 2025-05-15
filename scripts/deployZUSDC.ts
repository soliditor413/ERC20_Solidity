import { ethers, network } from "hardhat";
import { writeConfig } from "./helper";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const ZUSDC = await ethers.getContractFactory("ZUSDC");
    const zusdc = await ZUSDC.deploy("ZUSDC", "ZUSDC", 21000 * 10e8, {
        from: deployer.address,
        gasLimit: 8000000
    });
    await zusdc.waitForDeployment();
    const address = await zusdc.getAddress();

    console.log("ZUSDC deployed to:", address);
    await writeConfig(network.name, network.name, "ZUSDC", address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
