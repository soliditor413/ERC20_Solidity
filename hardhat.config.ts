import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });

const { private_key} = process.env;
const config: HardhatUserConfig = {
  networks: {
    WhiteChain: {
      url: "http://127.0.0.1:61428/ext/bc/2Bk2rBbc1J8WUJW223oMJFZ2sboqGfDy2aKRmAZvBN3mL6F4Lk/rpc",
      accounts: [...(private_key ? [private_key] : [])]
    },
    hardhat: {
      
    }
  },
  solidity: "0.8.20",
};

export default config;
