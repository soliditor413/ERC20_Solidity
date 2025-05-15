// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZUSDT is ERC20 {
    constructor(string memory tokenName, string memory symbol, uint256 initialSupply) ERC20(tokenName, symbol) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}
