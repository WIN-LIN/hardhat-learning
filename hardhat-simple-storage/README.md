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

-
