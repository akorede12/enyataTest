"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function PeopleTable() {
    const router = useRouter();
    const [people, setPeople] = useState([]);

    useEffect(() => {
      async function fetchPeople() {
        try {
          const res = await fetch("https://swapi.dev/api/people/");
          const data = await res.json();
          setPeople(data.results.slice(0, 7));
        } catch (error) {
          console.error("Error fetching people:", error);
        }
      }
      fetchPeople();
    }, []);
  
    return(
        <div className="pt-5 px-5">
            <h1 className="text-gray-400 pb-2">People</h1>
            <table className="border-collapse border border-gray-200 text-gray-400 w-full text-xs">
                <thead>
                    <tr>
                        <th className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></th>
                        <th className="text-left">Name</th>
                        <th className="text-left">Birth year</th>
                        <th className="text-left">Gender</th>
                        <th className="text-left">Hair color</th>
                        <th className="text-left">Height</th>
                        <th className="text-left p-3">Created</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, idx) => (
                      <tr key={idx} 
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => {
                        const query = new URLSearchParams({
                          name: person.name,
                          birth_year: person.birth_year,
                          skin_color: person.skin_color || '',
                          gender: person.gender || '',
                          height: String(person.height || ''),
                          image: '/user.svg'
                        }).toString();
                        router.push(`/people/detail?${query}`)
                      }}
                      >
                        <td className="pl-5">
                          <input type="checkbox" />
                        </td>
                        <td className="py-4">{person.name}</td>
                        <td className="py-4">{person.birth_year}</td>
                        <td className="py-4">{person.gender}</td>
                        <td className="py-4">{person.hair_color}</td>
                        <td className="py-4">{person.height} cm</td>
                        <td className="py-4">{new Date(person.created).toLocaleDateString()}</td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}