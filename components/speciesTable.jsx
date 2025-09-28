"use client";

import { useEffect, useState } from "react";
import Image from "next/image"
export default function SpeciesTable() {
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
                      <tr key={idx} className="border-t border-gray-200">
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