"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");
  return (
        <div className="bg-[#031434] h-lvh text-white text-center w-full">
        <Image src="/swLogo.svg"
        className="py-5 mx-auto"
        alt="logo"
        width={107}
        height={46}
        />
        <div className="px-5 mx-auto">

        <div className={`hover:bg-sky-700 ${isActive("/overview") ? "bg-sky-700" : ""}`}>
        <Link href="/overview" >
        <div className="py-5 text-left flex">
        <Image src="/gridIcon.svg"
        className="ml-10 mr-5"
        alt="logo"
        width={24}
        height={24}
        />  
        Overview
        </div>
        </Link>
        </div>

        <div className="py-10">
        <div className={`hover:bg-sky-700 ${isActive("/starships") ? "bg-sky-700" : ""}`}>
        <Link href="/starships">
        <div className="py-5 flex">
        <Image src="/blue.svg"
        className="ml-10 mr-5"
        alt="logo"
        width={24}
        height={24}
        />   
        Starships
        </div>
        </Link>
        </div>

        <div className={`hover:bg-sky-700 ${isActive("/people") ? "bg-sky-700" : ""}`}>        
        <Link href="/people">
        <div className="py-5 flex">
        <Image src="/pink.svg"
        className="ml-10 mr-5"
        alt="logo"
        width={24}
        height={24}
        /> 
        People
        </div>
        </Link>
        </div>

        <div className={`hover:bg-sky-700 ${isActive("/species") ? "bg-sky-700" : ""}`}>
        <Link href="/species">
        <div className="py-5 flex">
        <Image src="/yellow.svg"
        className="ml-10 mr-5"
        alt="logo"
        width={24}
        height={24}
        />  
        Species
        </div>
        </Link>
        </div>
        </div>

        </div>    
        </div>
  );
}
