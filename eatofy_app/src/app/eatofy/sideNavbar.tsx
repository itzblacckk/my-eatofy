'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { FaChartPie, FaHotel } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import Link from "next/link";

export default function SideNav() {

	const [home, setisHigh] = useState(false)
	const [dashboard, setDashboard] = useState(false)
	const [addhotels, setAddhotels] = useState(false)
	const [addsubscription, setSubscription] = useState(false)
	const [logout, setLogout] = useState(false)
	// const [, set] = useState(false)
	// const [, set] = useState(false)
	// const [, set] = useState(false)
	const path = usePathname();

	console.log(path)

	function ChangeMeDaddy(name: any) {
		switch (name) {
			case 'home':
				if (home === true) {
					setisHigh(false);
				} else {
					setisHigh(true);
				}
				break;

			case 'dashboard':
				if (dashboard === true) {
					setDashboard(false);
				} else {
					setDashboard(true);
				}
				break;

			case 'addhotels':
				if (addhotels === true) {
					setAddhotels(false);
				} else {
					setAddhotels(true);
				}
				break;

			case 'addsubscription':
				if (addsubscription === true) {
					setSubscription(false);
				} else {
					setSubscription(true);
				}
				break;
			
			case 'logout':
				if (logout === true) {
					setLogout(false);
				} else {
					setLogout(true);
				}
				break;
			default:
				console.log("FUCKKKKK YEAH")
				break;
		}
	}

	function ChechPath( Path:any ) {
		switch (Path) {
			case '/eatofy/dashboard':
				setDashboard(true);
				break;

			case '/eatofy/add/hotels':
				setAddhotels(true);
				break;
			
			case '/eatofy/add/subscription':
				setSubscription(true);
				break;

			default:
				break;
		}
	}

	useEffect(()=>{
		ChechPath(path);	
	},[path])

	return (
		<>
			<nav className="bg-black w-[80px] h-dvh fixed left-0 top-0 bottom-0 flex flex-col items-center gap-8">

				<Image width={40} height={35} src="/logo.png" alt="Eatofy Icon" className="mt-5" />

				<div className="flex flex-col gap-8 justify-between h-full items-center">
					<Link href="/eatofy/dashboard" onClick={() => { ChangeMeDaddy('dashboard') }}>
						<IconChange highlight={dashboard} name='dashboard' />
					</Link>
					<Link href="/eatofy/add/hotels" onClick={() => { ChangeMeDaddy('addhotels') }}>
						<IconChange highlight={addhotels} name='addhotels' />
					</Link>
					<Link href="/eatofy/add/subscription" onClick={() => { ChangeMeDaddy('addsubscription') }}>
						<IconChange highlight={addsubscription} name='addsubscription' />
					</Link>
					<div className="flex-1"></div>
					<Link href="/eatofy/add/subscription" onClick={() => { ChangeMeDaddy('logout') }} className="my-6">
						<IconChange highlight={logout} name='logout' />
					</Link>
				</div>

			</nav>
		</>
	);

function IconChange({ highlight, name }: any) {
	console.log(name);
	switch (name) {
		case 'home':
			if (home === false) {
				return (
					<div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center">
						<GoHome size={40} color="#c43838" className="cursor-pointer" />
					</div>
				);
			} else {
				return (
					<div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-[#c43838] rounded-md">
						<GoHome size={35} color="#000" />
					</div>
				);
			}

		case 'dashboard':
			if (dashboard === false) {
				return (
					<div className="cursor-pointer w-[50px] h-[50px]  flex justify-center items-center">
						<FaChartPie size={40} color="#c43838" className="cursor-pointer" />
					</div>
				);
			} else {
				return (
					<div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-[#c43838] rounded-md">
						<FaChartPie size={35} color="#000" />
					</div>
				);
			}

		case 'addsubscription':
			if (highlight === false) {
				return (
					<div className="cursor-pointer w-[50px] h-[50px]  flex justify-center items-center">
						<MdSubscriptions size={40} color="#c43838" className="cursor-pointer" />
					</div>
				);
			} else {
				return (
					<div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-[#c43838] rounded-md">
						<MdSubscriptions size={35} color="#000" />
					</div>
				);
			}

		case 'addhotels':
			if (addhotels === false) {
				return (
					<div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center">
						<FaHotel size={40} color="#c43838" className="cursor-pointer" />
					</div>
				);
			} else {
				return (
					<div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-[#c43838] rounded-md">
						<FaHotel size={35} color="#000" />
					</div>
				);
			}

		case 'logout':
			if (logout === false) {
				return (
					<div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center">
						<IoLogOutOutline size={40} color="#c43838" className="cursor-pointer" />
					</div>
				);
			} else {
				return (
					<div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-[#c43838] rounded-md">
						<IoLogOutOutline size={35} color="#000" />
					</div>
				);
			}

		default:
			console.log("FUCK!!!!!!")
			break;
	}
}
}