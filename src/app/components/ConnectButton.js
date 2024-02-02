"use client";
import React, { useEffect } from "react";

// creating a component that will allow users to connect their MetaMask wallets
const ConnectButton = () => {
	let connectButton;
	useEffect(() => {
		//getting the button element by ID
		const connectButton = document.getElementById("connect");

		if (typeof window.ethereum !== "undefined") {
			console.log("Injected Web3 Wallet is installed!");
		}
		// function to handle the connect button click
		const handleConnect = () => {
			connectAccount();
		};
		if (connectButton) {
			// addind event listeners to the connect button
			connectButton.addEventListener("click", handleConnect);
		}

		//cleanup function to remove the event listener when the component is no longer needed
		return () => {
			if (connectButton) {
				connectButton.removeEventListener("click", handleConnect);
			}
		};
	}, []); //empty dependency array ensures that this effect runs only once, similar to when the component first appears

	//function to connect the MetMask wallet
	async function connectAccount() {
		//request accounts from the MetaMask wallet
		const accounts = await ethereum.request({
			method: "eth_requestAccounts",
		});
		//get the first account from the returned accounts

		const account = accounts[0];

		// Updating the content of the connect button with a partial representation of the account
		connectButton.innerHTML =
			account[0] +
			account[1] +
			account[2] +
			account[3] +
			account[4] +
			account[5] +
			"..." +
			account[38] +
			account[39] +
			account[40] +
			account[41];
	}

	//rendering the component
	return (
		<div className="flex items-center justify-center h-screen">
			<button className="text-white border-8 p-4" id="connect">
				Connect Wallet Button
			</button>
		</div>
	);
};

export default ConnectButton;
