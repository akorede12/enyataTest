"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function TopBarBack() {
    const router = useRouter();
    
    const handleBack = () => {
        router.back();
    };

    return(
        <div className="w-full shadow-sm flex py-2 justify-between">
            <div className="justify-start flex">
                <Image src="/back.svg"
                className="ml-10 mr-5"
                alt="logo"
                width={15}
                height={15}
                />
                <button 
                    onClick={handleBack}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                Back            
                </button>
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
            <div>
                <Image src="/menu.svg"
                className="pt-2 mr-5"
                alt="logo"
                width={24}
                height={24}
                /> 
            </div>
            </div>
        </div>
    )
}