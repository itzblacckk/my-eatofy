'use client'

import SideNav from "../../sideNavbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EatofyLogin() {

	const [username, setUsername] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [data, setdata] = useState([]);
	const route = useRouter();

	console.log(username);
	console.log(email);
	console.log(password);

	async function FetchData() {
		const	response = await fetch('http://192.168.1.206:3000/api/eatofy/auth/register',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, email, password }),
		})

		const data = await response.json();
		setdata(data);

		if (data.returncode === 200) {
			console.log("FUCK DOne")
			// route.push('/dashboard');
			}

	console.log(data);

	// useEffect(()=>{
	// 	FetchData();
	// },[]);

	return (
		<>
			<SideNav />
			<section className="flex flex-col justify-center items-center w-full h-dvh gap-8">
				<div className="shadow-lg shadow-gray-400 rounded-xl">
					<h1 className="text-2xl font-bold w-[450px] p-4">Login</h1>
					<form className="flex flex-col justify-between items-center gap-12 w-[450px] h-auto p-6">
						<input
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={(e:any) => {
								setUsername(e.target.value);
							}}
							className="text-black bg-white text-lg p-2 px-4 w-full rounded-md focus:outline-none focus:border-red-500 border-2 focus:ring-0"
						/>
						<input
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e:any) => {
								setemail(e.target.value);
							}}
							className="text-black bg-white text-lg p-2 px-4 w-full rounded-md focus:outline-none focus:border-red-500 border-2 focus:ring-0"
						/>
						<input
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e:any) => {
								setpassword(e.target.value);
							}}
							className="text-black bg-white text-lg p-2 px-4 w-full rounded-md focus:outline-none focus:border-red-500 border-2 focus:ring-0"
						/>

						<div className="w-full">
							<button onClick={FetchData} className="bg-red-400 text-white font-bold w-full text-xl p-3 block shadow-gray-400 shadow-md rounded-md">Login</button>
							<div className="flex justify-between items-center p-2 mt-4">
								<button className="font-bold w-full block rounded-md text-red-400 hover:text-red-500 underline">Alredy have account? Login here</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	)
 }
}
