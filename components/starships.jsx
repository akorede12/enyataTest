import Sidebar from "@/components/sidebar";
import TopBarBack from "@/components/topBarBack";
import Image from "next/image";

export default function Starships({ details = {} }) {
    const {image, name, model, passenger, length, class: starshipClass, pilots } = details;
    
    let pilotsArray = [];
    try {
        pilotsArray = pilots ? JSON.parse(pilots) : [];
    } catch (e) {
        console.error('Error parsing pilots:', e);
    }
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
                           <p className="text-gray-500">Model: {model}</p>
                           <p className="text-gray-500">Class: {starshipClass}</p>
                        
                           <div className="text-gray-500">Passengers: {passenger}</div>
                           <div className="text-gray-500">Length: {length} m</div>
                           <div className="text-gray-400">Pilots</div>
                           <div className="font-medium">
                             {pilotsArray.length > 0 ? (
                               pilotsArray.map((pilotUrl, i) => (
                                 <a
                                   key={i}
                                   href={pilotUrl}
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
                       </div>
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