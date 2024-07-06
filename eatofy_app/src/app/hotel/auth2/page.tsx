 "use client"
 import React, { useState, FormEvent } from 'react';

 const Widget: React.FC = () => {
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
 
   const togglePasswordVisibility = () => {
     setPasswordVisible(!passwordVisible);
   };
 
   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();
 
     try {
       const response = await fetch('http://192.168.1.206:3000/api/hotel/authentication/sign_in', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           email,
           password,
         }),
       });
 
       if (response.ok) {
         const data = await response.json();
 
         // Save token to sessionStorage
         sessionStorage.setItem('jwtToken', data.output[1].token);
 
         // Save user data to sessionStorage
         if (data.output && data.output.length > 0) {
           const userData = data.output[0].result[0];
           sessionStorage.setItem('userData', JSON.stringify(userData));
         }
 
         console.log('Login successful:', data);
       } else {
         console.error('Login failed:', response.statusText);
       }
     } catch (error) {
       console.error('Error during login:', error);
     }
   };
 
   return (
     <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bgimg.jpg')" }}>
       <div className=" bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
         <div className="flex justify-center mb-6">
           <img src="/logo1.png" width={200} alt="EATOFY Logo" />
         </div>
         <form onSubmit={handleSubmit}>
           {/* Email Input */}
           <div className="mb-4">
             <label className="block text-card-foreground mb-2" htmlFor="email">
               Email
             </label>
             <input
               className="w-full p-3 rounded bg-input text-foreground border border-border focus:outline-none focus:ring focus:ring-primary"
               type="email"
               id="email"
               placeholder="Enter Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
           </div>
           {/* Password Input */}
           <div className="mb-6">
             <label className="block text-card-foreground mb-2" htmlFor="password">
               Password
             </label>
             <div className="relative">
               <input
                 className="w-full p-3 rounded bg-input text-foreground border border-border focus:outline-none focus:ring focus:ring-primary"
                 type={passwordVisible ? 'text' : 'password'}
                 id="password"
                 placeholder="Enter password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
               />
               <button
                 type="button"
                 className="absolute inset-y-0 right-3 flex items-center text-muted-foreground"
                 onClick={togglePasswordVisibility}
               >
                 {passwordVisible ? (
                   <img alt="eye-open-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👁️" />
                 ) : (
                   <img alt="eye-closed-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👁️‍🗨️" />
                 )}
               </button>
             </div>
           </div>
           {/* Login Button */}
           <button className="w-full p-3 bg-red-500 text-primary-foreground rounded hover:bg-primary/80">
             Login
           </button>
         </form>
         {/* Additional Info */}
         <div className="mt-6 text-center">
           <h2 className="text-lg font-semibold text-card-foreground">Welcome To Eatofy</h2>
           <p className="text-muted-foreground">From ordering to paying, that's all contactless</p>
         </div>
       </div>
     </div>
   );
 };
 
 export default Widget;
 
