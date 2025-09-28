import Image from "next/image"
import Link from "next/link"
export default function TopBarBack() {
    return(
        <div className="w-full shadow-sm flex py-5 justify-between">
            <div className="justify-start flex">
                <Image src="/back.svg"
                className="ml-10 mr-5"
                alt="logo"
                width={15}
                height={15}
                />
                <Link href="#">
                Back            
                </Link>
            </div>
            <div className="justify-end flex">
            <div>
                <Image src="/bell.svg"
                className="ml-10 mr-5"
                alt="logo"
                width={24}
                height={24}
                /> 
            </div>
            <div className="border-l-2 border-gray-200">
                <Image src="/user.svg"
                className="ml-10 mr-5"
                alt="logo"
                width={24}
                height={24}
                /> 
            </div>
            <div className="mr-10">
                John Doe
            </div>
            </div>
        </div>
    )
}