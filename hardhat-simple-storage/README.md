### 1. Initialize using `yarn`

-   `yarn init` : set up package.json
-   `yarn add --dev hardhat`: add hardhat into devDependencies
    -   `--dev` 只有本地開發及測試環境才需要 package（[diff between dep and devdep](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)）
    -   [yarn 和 npm 指令差異](https://ithelp.ithome.com.tw/articles/10191745)
-   `yarn hardhat`: install hardhat
-   `yarn add --dev prettier prettier-plugin-solidity`: coding style
    -   set config file `.prettierrc`
    -   not to set style `.prettierignore`

### 2. Deploy contracts

-   `yarn hardhat compile`: 編譯後會產生`artifacts`、`cache`資料夾

### 3. Write scripts

-   deploy the contract using hre.ethers
-   interact with the contract

### 4. Run scripts

-   `yarn hardhat run scripts/deploy.js`
-   預設會部署在 hardhat network，也可以設定要部署在其他網路上
    -   `.env` 設定 RPC_URL
    -   `hardhat.config.js` 設定 network, private key

### Plugin

#### Etherscan: verify contracts

-   `yarn add --dev @nomiclabs/hardhat-etherscan`: add etherscan plugin
-   到 [etherscan](https://etherscan.io/) 申請 API key
-   `.env` 設定 API key
-   `hardhat.config.js` 設定 etherscan plugin
    -   `require("@nomiclabs/hardhat-etherscan");`
    -   之後 `yarn hardhat` task 就會多出一個 `verify` 指令
-   `yarn hardhat verify --network goerli <contract address>`
-   or write script to verify: `run("verify:verify", { address: <contract address>, constructorArguments: [] });`)`

#### Custom Task

-   建立 `tasks` 資料夾
-   import: `const { task } = require("hardhat/config");`
-   define tasks
-   在 `hardhat.config.js` 設定 task
    -   `require("./tasks/{taskFile}");`
-   run task: `yarn hardhat {taskName}`

### 5. Write Test 9:27:33
