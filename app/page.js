import Image from "next/image";
import LoginForm from "@/components/loginForm";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div 
        id="leftDiv"
        className="bg-[#031434] w-1/3 flex items-center justify-center"
      >
        <div>
          <Image src="/swLogo.svg"
            className="mx-auto"
            alt="logo"
            width={300}
            height={130}
          />
        </div>
      </div>
      <div id="rightDiv" className="w-2/3 flex items-center justify-center">
        <div className="w-1/2 border rounded shadow-lg">
          <LoginForm/>
        </div>
      </div>
    </div>
  );
}
