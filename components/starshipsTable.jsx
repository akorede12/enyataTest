"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StarshipsTable() {
    const router = useRouter();
    const [starships, setStarships] = useState([]);

    useEffect(() => {
      async function fetchStarships() {
        try {
          const res = await fetch("https://swapi.dev/api/starships/");
          const data = await res.json();
          setStarships(data.results.slice(0, 7))
        } catch (error) {
          console.error("Error fetching starships:", error);
        }
      }
      fetchStarships();
    }, []);

    return(
        <div className="pt-10 px-5">
            <h1 className="text-gray-400 pb-2">Starships</h1>
            <table className="border-collapse border border-gray-200 text-gray-400 w-full text-xs">
                <thead>
                    <tr>
                        <th className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></th>
                        <th className="">Name</th>
                        <th className="">Model</th>
                        <th className="">Class</th>
                        <th className="">Passenger</th>
                        <th className="">Length</th>
                        <th className=" p-3">Character</th>
                    </tr>
                </thead>
                <tbody>
                    {starships.map((ship, idx) => (
                      <tr key={idx} 
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => router.push('/starships/detail')}
                      >
                        <td className="pl-5">
                          <input type="checkbox" />
                        </td>
                        <td className="py-4">{ship.name}</td>
                        <td className="py-4">{ship.model}</td>
                        <td className="py-4">{ship.starship_class}</td>
                        <td className="py-4">{ship.passengers}</td>
                        <td className="py-4">{ship.length} m</td>
                        <td className="py-4">
                          {ship.pilots.length > 0 ? (
                            ship.pilots.slice(0, 2).map((url, i) => (
                              <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline mr-2"
                              >
                                Pilot {i + 1}
                              </a>
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