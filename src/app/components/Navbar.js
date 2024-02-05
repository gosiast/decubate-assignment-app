"use client";
import React from "react";

const Navbar = () => {
	return (
		<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80">
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<div className="md:text-xl text-white font-semibold">My Wallet </div>
				<div className="menu">
					<button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
						settings{" "}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
