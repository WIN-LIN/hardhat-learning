// imports
const hre = require("hardhat");

// async main
async function main() {
    const SimpleStorageFactory = await hre.ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("Deploying SimpleStorage...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.deployed();

    console.log(`SimpleStorage deployed to ${simpleStorage.address}`);
}

// main
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
