import Sidebar from "@/components/sidebar";
import TopBarBack from "@/components/topBarBack";

export default function People() {
    return(
        <div>
            <div className="flex">
               <div className="w-1/5">
               <Sidebar/>
               </div>
               <div className="w-4/5">
               <div id="topBar"><TopBarBack/></div>
               <div id="content">

               </div>
               </div> 
            </div> 
        </div>
    )
}