import Image from "next/image"
export default function TopBar() {
    return(
        <div className="w-full justify-end shadow-sm flex py-2">
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
            <div>
                <Image src="/menu.svg"
                className="pt-2 mr-5"
                alt="logo"
                width={24}
                height={24}
                /> 
            </div>
        </div>
    )
}