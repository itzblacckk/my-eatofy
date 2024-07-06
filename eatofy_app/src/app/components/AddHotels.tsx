'use client';

import { useState } from "react";
import { FaCross } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
// import SideNav from "@/components/SideNavbar"

export default function AddHotels({ closeModel }:any) {

  const [file, setFile] = useState<File | undefined>();
  const [speciality, setspeciality]: any = useState('');
  const [contacts, setcontacts]: any = useState('');

  const specialArray = speciality.split(',');
  const contactsArray = contacts.split(',');

  console.log(specialArray, ' ', contactsArray)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('speciality', specialArray)
    formData.append('contacts', contactsArray)

    try {
      const response = await fetch('http://192.168.1.206:3000/api/eatofy/hotels/operations/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Hotel created:', data);
      } else {
        console.error('Failed to create hotel');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <>
      <div className='w-full h-full p-6 flex items-center absolute top-[80px] left-0 bg-gradient-to-r from-red-500 via-red-600 to-red-900'>
        <form encType="multipart/form-data" onSubmit={handleSubmit} className='shadow-md backdrop-blur-xl bg-black/30 text-white shadow-gray-400 flex flex-col justify-center items-center gap-4 w-[80%] mx-auto py-8  rounded-lg'>
          <div className="w-[60%]">
            <label>Hotel Name</label>
            <input name="hotel_name" type="text" id="hotel_name" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="w-[60%]">
            <label>Email</label>
            <input name="email" type="email" id="email" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="w-[60%]">
            <label>Password</label>
            <input name="password" type="password" id="password" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="w-[60%]">
            <label>Address</label>
            <textarea id="address" name="address" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="w-[60%]">
            <label>Ratings</label>
            <input name="ratings" type="text" id="ratings" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="w-[60%]">
            <label>Speciality</label>
            <input name="spaciality" type="text" id="speciality" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required
              onChange={
                (e) => {
                  setspeciality(e.target.value);
                }
              }
              defaultValue={speciality}
            />
          </div>
          <div className="w-[60%]">
            <label>Contact's</label>
            <input name="contacts" type="text" id="contacts" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required
              onChange={
                (e) => {
                  setcontacts(e.target.value);
                }
              }
            />
          </div>
          <div className="w-[60%]">
            <label>Hotel Logo (image)</label>
            <input name="logo" id='logo' type="file" accept="image/*" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setFile(e.target.files?.[0])} required />
          </div>
          <div className="w-[60%]">
            <label>Website</label>
            <input name="website" type="url" id="website" className="shadow appearance-none backdrop-blur-xl bg-black/30 text-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <button type="submit" className='border px-2 py-3 rounded mt-10  bg-red-500 font-bold text-black w-[60%]'>Add Hotel</button>
        </form>
      </div>
    </>
  )
}
