"use client";

import { useEffect, useState } from "react";
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function SpeciesTable() {
    const router = useRouter();
    const [species, setSpecies] = useState([]);

    useEffect(() => {
      async function fetchSpecies() {
        try {
          const res = await fetch("https://swapi.dev/api/species/");
          const data = await res.json();
          setSpecies(data.results.slice(0, 7));
        } catch (error) {
          console.error("Error fetching species:", error);
        }
      }
      fetchSpecies();
    }, []);

    return(
        <div className="pt-10 px-5">
            <h1 className="text-gray-400 pb-2">Species</h1>
            <table className="border-collapse border border-gray-200 text-gray-400 w-full text-xs">
                <thead>
                    <tr>
                        <th className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></th>
                        <th className="">Name</th>
                        <th className="">Classificastion</th>
                        <th className="">Eye colors</th>
                        <th className="">Hair color</th>
                        <th className="">Height</th>
                        <th className=" p-3">Created</th>
                    </tr>
                </thead>
                <tbody>
                    {species.map((sp, idx) => (
                      <tr key={idx}
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => {
                          const query = new URLSearchParams({
                          name: sp.name,
                          classification: sp.classification,
                          eye_colors: sp.eye_colors || '',
                          hair_colors: sp.hair_colors || '',
                          average_height: String(sp.average_height || ''),
                          lifespan: sp.lifespan,
                          image: '/user.svg'
                          }).toString();
                          router.push(`/species/detail?${query}`)}
                        }
                      >
                        <td className="pl-5">
                          <input type="checkbox" />
                        </td>
                        <td  className="py-4">{sp.name}</td>
                        <td  className="py-4">{sp.classification}</td>
                        <td  className="py-4">{sp.eye_colors}</td>
                        <td  className="py-4">{sp.hair_colors}</td>
                        <td  className="py-4">{sp.average_height} cm</td>
                        <td  className="py-4">{new Date(sp.created).toLocaleDateString()}</td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}