import Image from "next/image";

export default function SpecGridBox() {
    return(
        <div className="shadow-md p-5">
            <div className="flex gap-x-20">
            <div id="header" className="">Species</div>
            <div>
            <Image src="/yellow.svg"
            className="ml-5"
            alt="gridBox"
            width={20}
            height={20}
            />
            </div>
            </div>
            <div className="pt-10">
                200
            </div>
            <div className="pt-2 text-sm text-green-500">
                20 more than yestesday
            </div>
        </div>
    )
}