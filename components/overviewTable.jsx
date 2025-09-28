"use client"
import Image from "next/image"
import { useEffect, useState } from "react";


export default function OverviewTable() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      const res = await fetch("https://swapi.dev/api/films/");
      const data = await res.json();
      setFilms(data.results);
    }
    fetchFilms();
  }, []);
    return(
        <div className="pt-5 px-5">
            <h1 className="text-gray-400">Films</h1>
            <table className="border-collapse border border-gray-200 text-gray-400 w-full text-sm">
                <thead>
                    <tr>
                        <th className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></th>
                        <th className="">Film Title</th>
                        <th className="">Release Date</th>
                        <th className="">Director</th>
                        <th className="">Producer</th>
                        <th className="">Episode ID</th>
                        <th className=" p-3">Character</th>
                    </tr>
                </thead>
                <tbody>
                    {films.map((film) => (
                      <tr key={film.episode_id}>
                        <td className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></td>
                        <td className="p-2">{film.title}</td>
                        <td className="p-2">{film.release_date}</td>
                        <td className="p-2">{film.director}</td>
                        <td className="p-2">{film.producer}</td>
                        <td className="p-2">{film.episode_id}</td>
                        <td className="p-2">
                          {film.characters.slice(0, 2).map((char, i) => (
                            <a
                              key={i}
                              href={char}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline mr-2"
                            >
                              Link {i + 1}
                            </a>
                          ))}
                        </td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}