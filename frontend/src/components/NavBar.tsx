import { ReactNode } from "react";
import { Link } from "react-router-dom";

import profile from "../images/profile.png"

import 'primeicons/primeicons.css';


interface IProps {
    children: ReactNode;
}

const NavBar=({children}:IProps)=>{
    return <div>
        <div className=" bg-[#FFFFFF] flex justify-between p-4">
            <div className=" flex ">
                <Link to="/"><div className=" px-8 flex space-x-2">
                <svg width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 22V2L5.5 5L25.5 0V21L21 22V6.5L11.5 9L17 12V33L0 22Z" fill="#F99AB1"/>
                </svg>
                <p className=" text-[#F99AB1]">Brand Here</p>
                </div></Link>
                <ul className=" grid grid-cols-4 gap-x-2">
                <Link to="/overview">Overview</Link>
                <Link to="/invoice">Invoices</Link>
                <Link to="/create-invoice">Create Invoices</Link>
                <Link to="">Payments</Link>
                </ul>
                
            </div>

            <div className="flex justify-between space-x-8 items-center">
                <div><i className=" pi pi-search"></i></div>
                <div><i className=" pi pi-bell"></i></div>
                <div>
                    <img src={profile}/>
                </div>
            </div>
        </div>
        <div>{children}</div>
    </div>
}

export default NavBar;