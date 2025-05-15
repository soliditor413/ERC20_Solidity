import { ethers, network } from "hardhat";
import { writeConfig } from "./helper";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const ZUSDT = await ethers.getContractFactory("ZUSDT");
  const zusdt = await ZUSDT.deploy("ZUSDT", "ZUSDT", ethers.parseEther("100000000"), {
    from: deployer.address,
    gasLimit: 8000000
  });
  await zusdt.waitForDeployment();
  const address = await zusdt.getAddress();

  console.log("ZUSDT deployed to:", address);
  await writeConfig(network.name, network.name, "zusdt", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
