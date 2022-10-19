import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const Header=({children}:IProps)=>{
    return <div>
        <div className=" bg-red-300">Navigation Bar</div>
        <div>{children}</div>
    </div>
}

export default Header;