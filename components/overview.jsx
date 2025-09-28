import Image from "next/image";
import Sidebar from "./sidebar";

export default function Overwiew() {
  return (
        <div>
           <div className="w-1/5">
           <Sidebar/>
           </div>
           <div className="w-4/5"></div> 
        </div>
  );
}
