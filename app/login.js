import Image from "next/image";
import LoginForm from "@/components/loginForm";

export default function Login() {
    return(
    <div className="w-full flex h-lvh">
                <div 
                id="leftDiv"
                className="bg-[#031434] w-1/3"
                >
                  <div>
                    <Image src="/swLogo.svg"
                    className="py-50 px-10 mx-auto"
                    alt="logo"
                    width={385}
                    height={167}
                    />
                  </div>
                </div>
                <div id="rightDiv" className="w-2/3  my-30">
                <div className="">
                <div className="w-1/2 text-center mx-auto border rounded">
                  <LoginForm/>
                </div>
                </div>
                </div>
            </div>
    )
}