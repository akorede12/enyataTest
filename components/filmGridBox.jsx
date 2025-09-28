import Image from "next/image";

export default function FilmGridBox() {
    return(
        <div className="shadow-md p-2 text-sm">
            <div className="flex gap-x-20">
            <div id="header" className="font-bold">Films</div>
            <div>
            <Image src="/teal.svg"
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
            <div className="text-xs text-green-500">
                20 more than yestesday
            </div>
        </div>
    )
}