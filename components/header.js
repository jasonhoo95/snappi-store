export default function Header() {
	return (
		<div className="bg-[#EF2B5F] flex justify-between text-white text-[12px] py-2 px-[90px]">
			<div>Download</div>
			<div class="flex flex-row-reverse space-x-4 space-x-reverse">
				<div className="flex space-x-1">
					<span>Sign up</span>
					<span>|</span>
					<span>Login</span>
				</div>
				<div className="flex space-x-1">
					<img src="/language-circle.png" />
					<span>English</span>
				</div>
				<div className="flex space-x-1">
					<img src="/help-circle.png" />
					<span>Help</span>
				</div>
				<div className="flex space-x-1">
					<img src="/bell.png" />
					<span>Notifications</span>
				</div>
			</div>
		</div>
	);
}
