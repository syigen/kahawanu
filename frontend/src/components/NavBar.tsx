import { ReactNode } from "react";
import { Link } from "react-router-dom";

import 'primeicons/primeicons.css';

interface IProps {
    children: ReactNode;
}

const NavBar=({children}:IProps)=>{
    return <div>
        <div className=" bg-red-300 flex justify-between p-4">
            <div className=" flex ">
                <div className=" px-8">LOGO</div>
                <ul className=" grid grid-cols-4 gap-x-2">
                <Link to="">Overview</Link>
                <Link to="">Invoices</Link>
                <Link to="">Clients</Link>
                <Link to="">Payments</Link>
                </ul>
                
            </div>

            <div className="grid grid-cols-3 gap-x-2 ">
                <div><i className=" pi pi-search"></i></div>
                <div><i className=" pi pi-bell"></i></div>
                <div>profile</div>
            </div>
        </div>
        <div>{children}</div>
    </div>
}

export default NavBar;