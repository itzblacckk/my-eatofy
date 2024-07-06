import SideNav from "@/components/SideNavbar"

export default function Home() {
	return (
		<>
			<SideNav />
			<section className="ml-[80px]">
				<h1 className="text-xl text-transparent font-mono p-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text font-bold">Eatofy</h1>
				<div>
					<h1 className="text-2xl">RESTURANT</h1>
				</div>
			</section>
		</>
	)
}
