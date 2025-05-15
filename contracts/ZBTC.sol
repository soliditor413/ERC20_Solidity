// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZBTC is ERC20 {
    constructor(string memory tokenName, string memory symbol, uint256 initialSupply) ERC20(tokenName, symbol) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function decimals() public view virtual override returns (uint8) {
        return 8;
    }
}
