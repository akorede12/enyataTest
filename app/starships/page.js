import StarshipsTable from "@/components/starshipsTable";
import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topBar";


export default function Starshipsection()  {
    return(
        <div>
            <div className="flex">
               <div className="w-1/5">
               <Sidebar/>
               </div>
               <div className="w-4/5">
               <div id="topBar"><TopBar/></div>
               <div id="table">
                <StarshipsTable/>
               </div>
               </div> 
            </div> 
        </div>
    )
}