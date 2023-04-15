// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract Escrow {
    address public nftAddress;
    address public lender;
    address public inspector;
    address payable public seller;

    constructor(
        address _nftAddress,
        address _lender,
        address _inspector,
        address payable _seller
    ) {
        nftAddress = _nftAddress;
        lender = _lender;
        inspector = _inspector;
        seller = _seller;
    }
}
