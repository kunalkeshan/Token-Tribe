const hre = require("hardhat");

async function main() {
  const Demo = await hre.ethers.getContractFactory("Demo");
  const demo = await Demo.deploy(100);

  await demo.deployed();

  console.log(
    `Deployed to ${demo.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
