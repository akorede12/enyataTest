import Image from "next/image"
export default function SpeciesTable() {
    return(
        <div className="pt-10 px-5">
            <h1 className="text-gray-400">Species</h1>
            <table className="border-collapse border border-gray-200 text-gray-400 w-full">
                <thead>
                    <tr>
                        <th className=""><Image src="/tableSquare.svg" width={15} height={15} alt="square" className="ml-5"/></th>
                        <th className="">Name</th>
                        <th className="">Classificastion</th>
                        <th className="">Eye colors</th>
                        <th className="">Hair color</th>
                        <th className="">Height</th>
                        <th className=" p-3">Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                        </td>
                        <td> 

                        </td>
                        <td> 

                        </td>
                        <td> 

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td> 

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}