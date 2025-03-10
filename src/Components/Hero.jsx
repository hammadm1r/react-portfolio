import {useState} from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
function Hero(){
    const socialLinks = [
{
    icon: <LuGithub />,
    link: "https://github.com",
},
{
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com",
},
{
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
}
    ]
    return (
        <div className="flex flex-wrap justify-between p-2 sm:p-8">
            <div className = "pl-2 w-full md:w-2/3  order-2 md:order-1">
                <h2 className="text-4xl font-extrabold">Hi, I'm Hammad</h2>
                <p className="text-md font-thin text-balance mt-4">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                <div>
                <p className="flex pt-4  text-md font-thin justify-left items-center"><IoLocationOutline className=" font-bold flex justify-center items-center"/><span className="pl-2">Sialkot, Pakistan</span></p>
                <p className="flex pt-2 text-md font-thin  justify-left items-center">< GoDotFill className=" font-bold text-green-700 flex justify-center items-center" /><span className="pl-2">Available for new projects</span></p>
                </div>
                <div className="flex p-5">
                { 
                socialLinks.map((item) => 
                    <p className="text-xl font-bold pr-4">{item.icon}</p>
                )   
                }
                </div>
            </div>
            <div className="bg-cyan-300 w-full md:w-1/3 order-1 md:order-2">
                <h1>Hello World</h1>
            </div>
        </div>
    )
}

export default Hero

