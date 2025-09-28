import Image from "next/image";

export default function PeopleGridBox() {
    return(
        <div className="shadow-md p-2">
            <div className="flex gap-x-20">
            <div id="header" className="">People</div>
            <div>
            <Image src="/pink.svg"
            className="ml-5"
            alt="gridBox"
            width={20}
            height={20}
            />
            </div>
            </div>
            <div className="pt-5">
                200
            </div>
            <div className="pt-1 text-sm text-green-500">
                20 more than yestesday
            </div>
        </div>
    )
}