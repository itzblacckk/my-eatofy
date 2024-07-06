import React, { useEffect, useState } from 'react';

interface Hotel {
  id: string;
  HotelName: string;
  Email: string;
  isValid: boolean;
}

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.206:3000/api/eatofy/dashboard');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const transformedData = data.output[0].subscribed_hotels.map((hotel: any) => ({
          id: hotel.Hotel.id,
          HotelName: hotel.Hotel.HotelName,
          isValid: hotel.isValid,
          Email: hotel.Hotel.Email,
        }));

        setHotels(transformedData);
        setError(null);
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p className="text-center text-white">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : hotels.length === 0 ? (
        <p className="text-center text-white">No data found</p>
      ) : (
        <table className="min-w-full justify-center items-center backdrop-blur-xl bg-black/30 p-4 text-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="p-4">Hotel Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Subscription Valid</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel.id}>
                <td className="p-4 text-center">{hotel.HotelName}</td>
                <td className="p-4 text-center">{hotel.Email}</td>
                <td className="p-4 text-center">{hotel.isValid.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HotelList;
