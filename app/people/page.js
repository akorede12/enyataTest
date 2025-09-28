import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topBar";
import PeopleTable from "@/components/peopleTable";

export default function PeopleSection() {
    return(
        <div>
            <div className="flex">
               <div className="w-1/5">
               <Sidebar/>
               </div>
               <div className="w-4/5">
               <div id="topBar"><TopBar/></div>
               <div id="table">
                <PeopleTable/>
               </div>
               </div> 
            </div> 
        </div>
    )
}