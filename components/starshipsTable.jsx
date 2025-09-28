"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StarshipsTable() {
    const router = useRouter();
    const [starships, setStarships] = useState([]);
    const [pilotNames, setPilotNames] = useState({});

    useEffect(() => {
      async function fetchStarships() {
        try {
          const res = await fetch("https://swapi.dev/api/starships/");
          const data = await res.json();
          const starshipsData = data.results.slice(0, 7);
          setStarships(starshipsData);
          
          // Fetch pilot names for all starships
          const allPilotUrls = new Set();
          starshipsData.forEach(ship => {
            ship.pilots.slice(0, 2).forEach(url => allPilotUrls.add(url));
          });
          
          // Fetch pilot data
          const pilotPromises = Array.from(allPilotUrls).map(async (url) => {
            try {
              const response = await fetch(url);
              const pilot = await response.json();
              return { url, name: pilot.name };
            } catch (error) {
              console.error('Error fetching pilot:', error);
              return { url, name: 'Unknown' };
            }
          });
          
          const pilots = await Promise.all(pilotPromises);
          const pilotMap = {};
          pilots.forEach(pilot => {
            pilotMap[pilot.url] = pilot.name;
          });
          setPilotNames(pilotMap);
        } catch (error) {
          console.error("Error fetching starships:", error);
        }
      }
      fetchStarships();
    }, []);

    return(
        <div className="pt-10 px-5">
            <h1 className="text-gray-400 pb-2">Starships</h1>
            <table className="border-collapse border rounded border-gray-200 text-gray-400 w-full text-xs">
                <thead className="text-left">
                    <tr>
                        <th className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></th>
                        <th className="">Name</th>
                        <th className="">Model</th>
                        <th className="">Class</th>
                        <th className="">Passenger</th>
                        <th className="">Length</th>
                        <th className=" py-3">Character</th>
                    </tr>
                </thead>
                <tbody>
                    {starships.map((ship, idx) => (
                      <tr key={idx} 
                        className="cursor-pointer hover:bg-gray-50 border-t-1 border-gray-100"
                        onClick={() => {
                          const query = new URLSearchParams({
                            name: ship.name,
                            model: ship.model,
                            class: ship.starship_class,
                            passenger: ship.passengers,
                            length: ship.length,
                            pilots: JSON.stringify(ship.pilots),
                            image: '/user.svg'
                          }).toString();
                          router.push(`/starships/detail?${query}`)}
                        }
                      >
                        <td className="pl-5 ">
                          <input type="checkbox" />
                        </td>
                        <td className="py-4">{ship.name}</td>
                        <td className="py-4">{ship.model}</td>
                        <td className="py-4">{ship.starship_class}</td>
                        <td className="py-4">{ship.passengers}</td>
                        <td className="py-4">{ship.length} m</td>
                        <td className="py-4">
                          {ship.pilots.length > 0 ? (
                            ship.pilots.slice(0, 2).map((pilotUrl, i) => (
                              <span key={i} className="text-gray-600 mr-2">
                                {pilotNames[pilotUrl] || 'Loading...'}
                                {i < ship.pilots.slice(0, 2).length - 1 && ', '}
                              </span>
                            ))
                          ) : (
                            "None"
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}