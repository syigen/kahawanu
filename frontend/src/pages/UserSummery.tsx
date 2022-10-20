import AccountBalance from "components/ContentCards/AccountBalance"
import MonthlySummery from "components/ContentCards/MonthlySummery"
import NavBar from "components/NavBar"

const UserSummery=()=>{
    return <NavBar>
        <div className=" px-20">
            <div className=" grid grid-cols-6 gap-x-6">
                <AccountBalance/>
                <MonthlySummery title="Paid this month"/>
                <MonthlySummery title="Outstanding this month"/>
            </div>
        </div>
    </NavBar>
}

export default UserSummery