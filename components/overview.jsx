import Sidebar from "@/components/sidebar";
import TopBarBack from "@/components/topBarBack";
import Image from "next/image";

export default function Overview({ details = {} }) {
    const { title, image, director, producer, release_date } = details;
    return(
        <div>
            <div className="flex">
               <div className="w-1/5">
               <Sidebar/>
               </div>
               <div className="w-4/5">
               <div id="topBar"><TopBarBack/></div>
               <div id="content">
                   {title && (
                     <div className="p-6">
                       <div className="flex items-center space-x-6">
                         {image && (
                           <Image src={image} alt={title} width={120} height={120} className="rounded" />
                         )}
                         <div>
                           <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
                           <div className="text-gray-400 text-sm">Director</div>
                           <div className="font-medium">{director}</div>
                           <div className="text-gray-400 text-sm">Producer</div>
                           <div className="font-medium">{producer}</div>
                           <p className="text-gray-500">Release date: {release_date}</p>
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