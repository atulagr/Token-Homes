# Token-Homes

Token-Homes is a blockchain-based real estate app that utilizes smart contracts, NFTs, and IPFS to streamline the property buying and selling process. With Token-Homes, users can securely store metadata and image data for NFTs, create a smart contract for real estate NFTs with OpenZeppelin library, deploy a Real Estate NFT and Escrow Contract, list a property by transferring ownership to escrow contract, and facilitate the sale of the property.

## Technologies Used
- Blockchain
- Smart Contracts
- NFTs
- IPFS
- OpenZeppelin library
- Hardhat
- Ethers.js
- React.js
- Metamask

## Features
- Secure storage of metadata and image data for NFTs using IPFS
- Creation of a smart contract for real estate NFTs with OpenZeppelin library
- Deployment of Real Estate NFT and Escrow Contract
- Listing of a property by transferring ownership to escrow contract
- Facilitation of the sale of the property with requirements such as inspection status, authorization, correct funds transfer, transfer of NFT to buyer, and transfer of funds to seller
- Contract requiring approval from buyer, seller, and lender before fully funding and transferring ownership
- Display of homes on the website with search functionality and pop-up windows with property details and buy button
- Fetching and updating of property buyer, seller, lender, and inspector details
- Automated real estate transaction with cryptocurrency

## Usage
To use Token-Homes, follow these steps:

1. Clone the repository using `git clone https://github.com/[username]/token-homes.git`
2. Install the necessary dependencies with `npm install`
3. Compile the contracts with `npx hardhat compile`
4. Deploy the contracts to a local network with `npx hardhat node` and `npx hardhat run scripts/deploy.js --network localhost`
5. Start the React app with `npm start`

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
