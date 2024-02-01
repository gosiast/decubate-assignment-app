import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80">
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link href={"/"} className="md:text-xl text-white font-semibold">
					My Wallet
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
