export default function SearchBar() {
	return (
		<div className="flex items-center py-2 text-black">
			<div className="px-3">
				<img src="/snappi-logo.png" />
			</div>
			<div className="flex items-center pl-[30px]">
				<img src="/location.png" />
				<div>
					<div>Deliver to</div>
					<div>South Africa</div>
				</div>
			</div>

			<div className="w-[50%] px-3 justify-center ml-auto mr-auto relative">
				<input
					className="search-bar"
					placeholder="Search Snappi"
					type="text"
				/>
				<div className="absolute right-[15px] w-[70px] flex justify-center p-[5px] rounded-[10px] top-[5px] bg-[#EF2B5F]">
					<img src="Search.png" />
				</div>
			</div>

			<div>
				<img src="/cart.png" />
			</div>
		</div>
	);
}
