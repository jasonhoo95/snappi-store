export default function Footer() {
	return (
		<div className="bg-[#F9F9F9] p-[20px] text-black">
			<div className="flex flex-col items-center">
				<h3 className="font-bold my-3">Subscribe to our newsletter</h3>
				<div className="text-[12px] my-3">Get the latest updates on new products and upcoming sales</div>
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
						<div className="font-bold">ABOUT</div>
						<a
							href="#"
							className="text-[12px] my-2">
							About Snappi
						</a>
						<a
							href="#"
							className="text-[12px] my-2">
							Terms of Use
						</a>
						<a
							href="#"
							className="text-[12px] my-2">
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-[12px] my-2">
							Return Policy
						</a>
						<a
							href="#"
							className="text-[12px] my-2">
							Cookie Policy
						</a>
					</div>
					<div className="flex flex-col">
						<a
							href="#"
							className="font-bold">
							HELP
						</a>
						<a
							href="#"
							className="text-[12px] my-2">
							Snappi Returns
						</a>
						<a
							href="#"
							className="text-[12px] my-2">
							Contact Support
						</a>
						<a
							href="#"
							className="text-[12px] my-2">
							FAQ
						</a>

						<a className="text-[12px] my-2">Request a Return</a>
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
		</div>
	);
}
