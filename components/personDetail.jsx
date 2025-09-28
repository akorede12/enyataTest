import Sidebar from "@/components/sidebar";
import TopBarBack from "@/components/topBarBack";
import Image from "next/image";

export default function PersonDetail({ details = {} }) {
  const { image, name, birth_year, skin_color, gender, height } = details;
  return (
    <div>
      <div className="flex">
        <div className="w-1/5">
          <Sidebar/>
        </div>
        <div className="w-4/5">
          <div id="topBar"><TopBarBack/></div>
          <div id="content" className="p-6">
            <div className="flex items-center space-x-6">
              {image && (
                <Image src={image} alt={name || 'Person'} width={120} height={120} className="rounded-full bg-gray-100" />
              )}
              <div>
                <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>
                <p className="text-gray-500">Birth year: {birth_year}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="border p-4 rounded">
                <div className="text-gray-400 text-sm">Skin color</div>
                <div className="font-medium">{skin_color}</div>
              </div>
              <div className="border p-4 rounded">
                <div className="text-gray-400 text-sm">Gender</div>
                <div className="font-medium">{gender}</div>
              </div>
              <div className="border p-4 rounded">
                <div className="text-gray-400 text-sm">Height</div>
                <div className="font-medium">{height} cm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


