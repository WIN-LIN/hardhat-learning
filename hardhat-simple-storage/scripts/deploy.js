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

    const value = await simpleStorage.retrieve();
    console.log(`The cuurent value is ${value}`);

    const tx = await simpleStorage.store(5);
    await tx.wait();
    console.log(
        `The value is now changed to ${await simpleStorage.retrieve()}`
    );
}

// main
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
