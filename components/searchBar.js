export default function SearchBar() {
	return (
		<div className="flex items-center py-2 text-black">
			<div className="px-3">
				<img src="/snappi-logo.png" />
			</div>
			<div className="flex items-center pl-[30px]">
				<img src="/location.png" />
				<div>
					<div className="text-[12px]">Deliver to</div>
					<div className="text-[#EF2B5F]">South Africa</div>
				</div>
			</div>

			<div className="w-[50%] px-3 justify-center ml-auto mr-auto relative">
				<input
					className="search-bar outline-none"
					placeholder="Search Snappi"
					type="text"
				/>
				<div className="absolute right-[15px] w-[70px] flex justify-center p-[5px] rounded-[10px] top-[5px] bg-[#EF2B5F]">
					<img src="Search.png" />
				</div>
			</div>

			<div className="mr-[40px] relative">
				<div className="absolute top-[-5px] right-0 rounded-[50%] text-center w-[20px] text-white h-[20px] bg-[#EF2B5F]">5</div>

				<img src="/cart.png" />
			</div>
		</div>
	);
}
