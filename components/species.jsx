import Sidebar from "@/components/sidebar";
import TopBarBack from "@/components/topBarBack";
import Image from "next/image";

export default function Species({ details = {} }) {
    const {image, name, classification, eye_colors, lifespan, language } = details;
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
                           <p className="text-gray-500">Designation: {classification}</p>
                           <p className="text-gray-500">Language: {language}</p>
                           <p className="text-gray-500">Eye Colors: {eye_colors}</p>
                           <p className="text-gray-500">Average Lifespan: {lifespan}</p>
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