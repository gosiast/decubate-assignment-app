"use client";
import React, { useEffect } from "react";

// creating a component that will allow users to connect their MetaMask wallets
const ConnectButton = () => {
	useEffect(() => {
		//button ID
		const connectButton = document.getElementById("connect-button");

		const handleConnect = () => {
			connectAccount();
		};
		if (connectButton) {
			//event listeners
			connectButton.addEventListener("click", handleConnect);
		}

		return () => {
			if (connectButton) {
				connectButton.removeEventListener("click", handleConnect);
			}
		};
	}, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

	//Connect Account Function
	async function connectAccount() {
		const accounts = await ethereum.request({
			method: "eth_requestAccounts",
		});
		const account = accounts[0];
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

	return (
		<div className="flex items-center justify-center h-screen">
			<button className="text-white border-8 p-4" id="connect-button">
				Connect Wallet Button
			</button>
		</div>
	);
};

export default ConnectButton;
