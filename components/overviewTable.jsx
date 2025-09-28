"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function OverviewTable() {
  const router = useRouter();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      const res = await fetch("https://swapi.dev/api/films/");
      const data = await res.json();
      setFilms(data.results.slice(0, 7));
    }
    fetchFilms();
  }, []);
    return(
        <div className="pt-5 px-5">
            <h1 className="text-gray-400 pb-2">Films</h1>
            <table className="border-collapse border border-gray-200 text-gray-400 w-full text-xs">
                <thead>
                    <tr className="">
                        <th className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></th>
                        <th className="text-left">Film Title</th>
                        <th className="text-left">Release Date</th>
                        <th className="text-left">Director</th>
                        <th className="text-left">Producer</th>
                        <th className="text-left">Episode ID</th>
                        <th className="text-left p-3">Character</th>
                    </tr>
                </thead>
                <tbody className="">
                    {films.map((film) => (
                      <tr
                        key={film.episode_id}
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => {
                          const query = new URLSearchParams({
                            title: film.title,
                            director: film.director,
                            producer: film.producer,
                            release_date: film.release_date,
                            image: "/img.png"
                          }).toString();
                          router.push(`/overview/detail?${query}`)
                        }}
                      >
                        <td className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></td>
                        <td className="py-4">{film.title}</td>
                        <td className="py-4">{film.release_date}</td>
                        <td className="py-4">{film.director}</td>
                        <td className="py-4">{film.producer}</td>
                        <td className="py-4">{film.episode_id}</td>
                        <td className="py-4">
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