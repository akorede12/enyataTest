import Sidebar from "@/components/sidebar";
import TopBarBack from "@/components/topBarBack";
import Image from "next/image";

export default function People({ details = {} }) {
    const {image, name, birth_year, skin_color, gender, height} = details;
    return(
        <div>
            <div className="flex">
               <div className="w-1/5">
               <Sidebar/>
               </div>
               <div className="w-4/5">
               <div id="topBar"><TopBarBack/></div>
               <div id="content">
                   {name && (
                     <div className="p-6">
                       <div className="flex items-center space-x-6">
                         {image && (
                           <Image src={image} alt={name} width={120} height={120} className="rounded" />
                         )}
                         <div>
                           <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>
                           <p className="text-gray-500">Gender: {gender}</p>
                           <p className="text-gray-500">Year of Birth: {birth_year}</p>
                           <p className="text-gray-500">Skin Color: {skin_color}</p>
                           <p className="text-gray-500">Height: {height}</p>
                         </div>
                       </div>
                     </div>
                   )}
               </div>
               </div> 
            </div> 
        </div>
    )
}