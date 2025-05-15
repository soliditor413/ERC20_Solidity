# ERC20 Token

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

1. config the private key in .env file format like this:
```
private_key="xxx"
```


2. config the L1 rpc in hardhat.config.ts.
```
networks: {
    WhiteChain: {
      url: "http://127.0.0.1:61428/ext/bc/2Bk2rBbc1J8WUJW223oMJFZ2sboqGfDy2aKRmAZvBN3mL6F4Lk/rpc",
      accounts: [...(private_key ? [private_key] : [])]
    }
}
```

3. deploy script
``` 
npm install
npx hardhat run scripts/deploy.ts --network WhiteChain
```

Demo Video in this directory
[demo.mp4](demo.mp4)

