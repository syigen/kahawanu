import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
    children: ReactNode;
}

const Header=({children}:IProps)=>{
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
                <div>search</div>
                <div>notifi</div>
                <div>profile</div>
            </div>
        </div>
        <div>{children}</div>
    </div>
}

export default Header;