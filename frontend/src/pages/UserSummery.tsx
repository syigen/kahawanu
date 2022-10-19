import NavBar from "components/NavBar"

const UserSummery=()=>{
    return <NavBar>
        <div className=" grid grid-cols-6 gap-x-4">
            <div className=" col-span-2">Account Banlance</div>
            <div className=" col-span-2">Paid and month</div>
            <div className=" col-span-2">Outstanding this month</div>
        </div>
    </NavBar>
}

export default UserSummery