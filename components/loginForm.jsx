import Link from "next/link"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginForm() {
    return(
            <div id="formDiv" className="py-5 px-10">
                <div className="">
                <div id="formHeader">
                    <h1 className="text-2xl font-bold text-gray-600 text-left">Login</h1>
                    <p className="text-gray-400 text-left">Kindly enter your details to login</p>
                </div>
                <div id="formFields" className="py-10">
                <TextField label="Email Address" fullWidth defaultValue="your email here" focused/>
                <br/>
                <br/>
                <TextField label="Password" fullWidth focused className="pt-5" defaultValue="********"/>
                <br/>
                <br/>
                <Button variant="contained" fullWidth>Log in</Button>
                <br/>
                <br/>
                <Link href="#" className="text-blue-500 text-center">Forgot your password?</Link>
                </div>
                <div id="formFooter" className="text-gray py-5">
                    <Link href="#" className="text-gray-600 underline">Privacy Policy</Link> <span className="text-gray-400">and</span> <Link href="#" className="text-gray-600 underline">Terms of services</Link>
                </div>
                </div>
            </div>
    )
}