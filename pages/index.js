import Head from "next/head";
import Image from "next/image";
import Category from "../components/categories";
import SearchBar from "../components/searchBar";
import CartItem from "../components/cartItem";
import MainCartItem from "../components/mainCartItem";
import TermsAndCondition from "../components/termsAndCondition";
export default function Home() {
	const totalList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
	const names = ["cartitem-1", "cartitem-2", "cartitem-3", "cartitem-4"];

	const generateRandomName = () => {
		// Get a random index from the array
		const randomIndex = Math.floor(Math.random() * names.length);

		// Get the name at the random index
		const randomName = names[randomIndex];

		// Return the random name
		return randomName;
	};
	const RenderTotalList = () => {
		return totalList.map((o, key) => {
			let imageName = generateRandomName();
			return (
				<CartItem
					key={key}
					image={imageName}
				/>
			);
		});
	};
	return (
		<div className="bg-white">
			<div className="px-[90px]">
				<SearchBar />

				<div className="flex items-center h-[529px] image-container1 text-black">
					<div className="w-[60%] h-[100%] p-3 relative">
						<div className="absolute w-[50%] left-[50px] top-[120px]">
							<div className="text-[25px] mb-2">NEW ARRIVAL:</div>
							<div className="text-[50px] leading-[3.5rem] font-bold">ELEVATE YOUR STYLE WITH PRODUCT ABC:</div>
						</div>
						<img
							className="h-[100%] w-[100%]"
							src="/ImageA.png"
						/>
					</div>
					<div className="w-[40%] h-[100%] flex flex-col p-3">
						<div className="w-full h-[50%] pb-2">
							<div className="bg-[#67E0E9] relative h-full rounded-[10px]">
								<div className="absolute w-[50%] left-[30px] bottom-[20px]">
									<div className="text-[21px] mb-2">NEW ARRIVAL:</div>
									<div className="text-[25px] font-bold leading-[1.5rem]">ELEVATE YOUR STYLE WITH PRODUCT B:</div>
								</div>
								<img
									className="h-full w-full object-cover"
									src="/ImageB.png"
								/>
							</div>
						</div>
						<div className="w-full h-[50%] pb-2 img-banner rounded-[10px]"></div>
					</div>
				</div>
				<div className="text-white bg-[#EF2B5F] py-2 px-5 rounded-[10px] my-3">All Categories</div>
				<Category />
				<div className="h-[529px]">
					<img
						className="h-full w-full"
						src="/poster.png"
					/>
				</div>
				<div className="text-white bg-[#EF2B5F]  py-2 px-5 rounded-[10px] my-3">Snappi Deals</div>
				<div className="grid deal-category my-5">
					<MainCartItem image={"cartitem-1"} />
					<MainCartItem image={"cartitem-2"} />
					<MainCartItem image={"cartitem-3"} />
					<MainCartItem image={"cartitem-4"} />
				</div>

				<div className="text-white bg-[#EF2B5F]  py-2 px-5 rounded-[10px] my-3">Daily Discover</div>
				<div className="grid grid-cols-6 gap-[0.5rem] my-5">{RenderTotalList()}</div>
				<div className="flex justify-center">
					<div className="border-[#EF2B5F] border-[1px] w-[359px] text-center my-3  text-[#EF2B5F] p-3 rounded-[10px]">See More</div>
				</div>
			</div>
			<div className="bg-[#EF2B5F] relative h-[5px] my-3"></div>
			<TermsAndCondition />
		</div>
	);
}
