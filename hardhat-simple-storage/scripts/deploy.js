// imports
const { hre, run, network } = require("hardhat");
require("dotenv").config();
// async main
async function main() {
    // deploy the contract
    const SimpleStorageFactory = await hre.ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("Deploying SimpleStorage...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.deployed();

    console.log(`SimpleStorage deployed to ${simpleStorage.address}`);

    // verify the contract on Etherscan
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await verifyContract(simpleStorage.address, []);
    }

    // interact with the contract
    const value = await simpleStorage.retrieve();
    console.log(`The cuurent value is ${value}`);

    const tx = await simpleStorage.store(5);
    await tx.wait();
    console.log(
        `The value is now changed to ${await simpleStorage.retrieve()}`
    );
}

async function verifyContract(contractAddr, args) {
    console.log("Verifying the contract on Etherscan...");
    try {
        await run("verify: verify", {
            address: contractAddr,
            constructorArguements: args,
        });
    } catch (err) {
        if (err.message.toLowerCase.includes("already verified")) {
            console.log("Contract already verified");
        } else {
            console.log(error);
        }
    }
}

// main
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
