import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import MintNFT from '../components/MintNFT';

const MintPage = () => {
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const connectToBSC = async () => {
      // Set up provider and signer as before
      const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');
      const newSigner = provider.getSigner();
      setSigner(newSigner);

      // Import contract ABI and set contract address
      const NFTContractABI = /* Import ABI here */;
      const contractAddress = '0xYourContractAddress';
      const newContract = new ethers.Contract(contractAddress, NFTContractABI, newSigner);
      setContract(newContract);
    };

    connectToBSC();
  }, []); // Run once on component mount

  return (
    <div>
      <h1>Mint NFT</h1>
      {signer && contract && <MintNFT signer={signer} contract={contract} />}
    </div>
  );
};

export default MintPage;