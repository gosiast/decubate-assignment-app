import React, { useState } from "react";
import { ethers } from "ethers";

const MintNFT = ({ signer, contract }) => {
	const [mintingStatus, setMintingStatus] = useState("");

	const mintNFT = async () => {
		try {
			const isConnected = await signer.provider.isConnected();
			if (!isConnected) {
				setMintingStatus("Not connected to BSC Testnet");
				return;
			}

			const transaction = await contract.mintNFT({
				value: ethers.utils.parseUnits("1", "ether"), // Adjust the fee as needed
			});

			setMintingStatus("Waiting for confirmation...");

			await transaction.wait();

			setMintingStatus("NFT Minted successfully!");
		} catch (error) {
			setMintingStatus(`Error minting NFT: ${error.message}`);
		}
	};

	return (
		<div>
			<button onClick={mintNFT}>Mint NFT</button>
			<p>{mintingStatus}</p>
		</div>
	);
};

export default MintNFT;
