const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Escrow", function () {
  let owner, inspector, lender, sender;

  beforeEach(async function () {
    [owner, inspector, lender, seller] = await ethers.getSigners();

    RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = await RealEstate.deploy();

    Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(
      realEstate.address,
      lender.address,
      inspector.address,
      seller.address
    );
  });

  it("Should returns NFT address", async () => {
    const result = await escrow.nftAddress();
    expect(result).to.be.equal(realEstate.address);
  });

  it("Should returns seller", async () => {
    const result = await escrow.seller();
    expect(result).to.be.equal(seller.address);
  });

  it("Should returns inspector", async () => {
    const result = await escrow.inspector();
    expect(result).to.be.equal(inspector.address);
  });

  it("Should returns lender", async () => {
    const result = await escrow.lender();
    expect(result).to.be.equal(lender.address);
  });
});
