export default function Footer() {
	return (
		<div className="bg-[#F9F9F9] p-[20px]">
			<div className="flex flex-col items-center">
				<h3 className="font-bold my-3">Subscribe to our newsletter</h3>
				<div className="text-[12px] my-3">Get the latest updates on new products and upcoming sales</div>
				<div className="w-[537px] my-3 p-[10px] rounded-[10px] bg-white px-3 justify-center ml-auto mr-auto relative">
					<input
						placeholder="enter your email address"
						className="w-full text-[12px] outline-none"
						type="text"
					/>
					<div className="absolute right-[5px] w-[120px] flex justify-center py-[8px] rounded-[10px] top-[5px] bg-[#EF2B5F] text-[12px] text-white">Subscribe</div>
				</div>
				<div className="flex justify-between space-x-20 my-[30px]">
					<div className="px-3">
						<img src="/snappi-logo.png" />
					</div>
					<div>
						<div className="font-bold">ABOUT</div>
						<div className="text-[12px] my-3">About Snappi</div>
						<div className="text-[12px] my-3">Terms of Use</div>
						<div className="text-[12px] my-3">Privacy Policy</div>
						<div className="text-[12px] my-3">Return Policy</div>
						<div className="text-[12px] my-3">Cookie Policy</div>
					</div>
					<div>
						<div className="font-bold">HELP</div>
						<div className="text-[12px] my-3">Snappi Returns</div>
						<div className="text-[12px] my-3">Contact Support</div>
						<div className="text-[12px] my-3">FAQ</div>

						<div className="text-[12px] my-3">Request a Return</div>
					</div>
					<div>
						<div className="font-bold">VISIT</div>
						<div>About Snappi</div>
						<div>Terms of Use</div>
					</div>
					<div>
						<div className="font-bold">PAYMENT</div>
						<div className="flex">
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
