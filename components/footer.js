export default function Footer() {
	return (
		<div className="bg-[#F9F9F9] py-[20px] px-[90px] text-black">
			<div className="flex flex-col items-center mt-[50px]">
				<h3 className="font-bold my-1">Subscribe to our newsletter</h3>
				<div className="text-[12px] my-1">Get the latest updates on new products and upcoming sales</div>
				<div className="w-[537px] my-3 p-[10px] rounded-[10px] bg-white px-3 justify-center ml-auto mr-auto relative">
					<input
						placeholder="enter your email address"
						className="w-full text-[12px] outline-none bg-white"
						type="text"
					/>
					<div className="absolute right-[5px] w-[120px] flex justify-center py-[8px] rounded-[10px] top-[5px] bg-[#EF2B5F] text-[12px] text-white">Subscribe</div>
				</div>
				<div className="flex justify-between space-x-20 my-[30px]">
					<div className="px-3">
						<img src="/snappi-logo.png" />
					</div>
					<div className="flex flex-col">
						<div className="font-bold mb-2">ABOUT</div>
						<a
							href="#"
							className="text-[12px] my-1">
							About Snappi
						</a>
						<a
							href="#"
							className="text-[12px] my-1">
							Terms of Use
						</a>
						<a
							href="#"
							className="text-[12px] my-1">
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-[12px] my-1">
							Return Policy
						</a>
						<a
							href="#"
							className="text-[12px] my-1">
							Cookie Policy
						</a>
					</div>
					<div className="flex flex-col">
						<div className="font-bold mb-2">HELP</div>
						<a
							href="#"
							className="text-[12px] my-1">
							Snappi Returns
						</a>
						<a
							href="#"
							className="text-[12px] my-1">
							Contact Support
						</a>
						<a
							href="#"
							className="text-[12px] my-1">
							FAQ
						</a>

						<a className="text-[12px] my-1">Request a Return</a>
					</div>
					<div>
						<div className="font-bold">VISIT</div>
						<div className="flex my-2">
							<img
								className="w-[30px] h-[30px] mr-3"
								src="/fb-icon.png"
							/>
							<img
								className="w-[30px] h-[30px]"
								src="/instagram.png"
							/>
						</div>
					</div>
					<div>
						<div className="font-bold">PAYMENT</div>
						<div className="flex my-2">
							<img
								className="w-[30px] h-[30px] mr-3"
								src="/visa.png"
							/>
							<img
								className="w-[30px] h-[30px]"
								src="/mastercard.png"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="h-[1px] bg-[#8f8f8f]"></div>

			<div className="text-center my-5 text-[12px]">@ 2023 CAPITEC Snappi Store. All Rights Reserved.</div>
		</div>
	);
}
