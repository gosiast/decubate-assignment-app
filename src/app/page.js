import Image from "next/image";
import Navbar from "./components/Navbar";
import ConnectButton from "./components/ConnectButton";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<Navbar />
			<ConnectButton />
		</main>
	);
}
