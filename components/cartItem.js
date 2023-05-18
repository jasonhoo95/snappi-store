export default function CartItem({ image }) {
	return (
		<div className="card-item relative">
			<div className="absolute left-0 top-[10px] bg-[#EF2B5F] text-[12px] p-1 text-white">Snappi Deals</div>
			<div className="absolute right-[10px] top-[10px]">
				<img
					className="w-[30px] h-[30px]"
					src="/heart.png"
				/>
			</div>
			<div className="flex items-center justify-center flex-col my-[30px]">
				<img
					className="h-[130px]"
					src={`/${image}.png`}
				/>
			</div>

			<div className="text-left my-3">Handy Andy Lemon 750</div>
			<div className="flex justify-between my-3">
				<div>
					<div className="font-bold">R3.70</div>
					<div className="text-[12px]">Save R1,00</div>
				</div>

				<div>
					<div className="flex justify-end">
						<img
							className="w-[20px] h-[20px]"
							src="/star.png"
						/>
						<span className="text-[14px] pl-1">0</span>
					</div>
					<div className="text-[12px]">4.8k sold</div>
				</div>
			</div>
		</div>
	);
}
