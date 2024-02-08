import React, { useState } from "react";
import { ethers } from "ethers";

const MintNFT = ({ signer, contract }) => {
	//define state variable to store minting status
	const [mintingStatus, setMintingStatus] = useState("");

	//function to handle minting of NTF
	//check if the user is connected to the BSC Testnet
	const mintNFT = async () => {
		try {
			const isConnected = await signer.provider.isConnected();
			if (!isConnected) {
				setMintingStatus("Not connected to BSC Testnet");
				return;
			}

			// mint NTF by calling contract's mintNFT function
			const transaction = await contract.mintNFT({
				value: ethers.utils.parseUnits("1", "ether"), // Adjust the fee as needed
			});

			//updating minting status
			setMintingStatus("Waiting for confirmation...");

			//waiting for transaction confirmation
			await transaction.wait();

			//updating minting status on successful minting
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
