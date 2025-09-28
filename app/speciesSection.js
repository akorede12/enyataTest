import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topBar";
import SpeciesTable from "../components/speciesTable";

export default function SpeciesSection() {
    return(
        <div>
            <div className="flex">
               <div className="w-1/5">
               <Sidebar/>
               </div>
               <div className="w-4/5">
               <div id="topBar"><TopBar/></div>
               <div id="table">
                <SpeciesTable/>
               </div>
               </div> 
            </div> 
        </div>
    )
}