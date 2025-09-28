import Sidebar from "@/components/sidebar";
import FilmGridBox from "@/components/filmGridBox";
import SpecGridBox from "@/components/specGridBox";
import StarGridBox from "@/components/starshipGridBox";
import PeopleGridBox from "@/components/peopleGridBox";
import TopBar from "@/components/topBar";
import OverviewTable from "@/components/overviewTable";

export default function Overview() {
  return (
      <div className="flex">
         <div className="w-1/5">
         <Sidebar/>
         </div>
         <div className="w-4/5">
         <div id="topBar"><TopBar/></div>
         <div id="grid" className="flex mx-5 space-x-5 py-5">
          <FilmGridBox/>
          <StarGridBox/>
          <PeopleGridBox/>
          <SpecGridBox/>
         </div>
         <div id="table">
          <OverviewTable/>
         </div>
         </div> 
      </div>  
  );
}
