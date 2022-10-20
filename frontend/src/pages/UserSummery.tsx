import AccountBalance from "components/ContentCards/AccountBalance"
import DetailCard from "components/ContentCards/DetailCard"
import MonthlySummery from "components/ContentCards/MonthlySummery"
import InvoiceForm from "components/InvoiceForm"
import NavBar from "components/NavBar"

const UserSummery=()=>{
    return <NavBar>
        <div className=" px-20">
            <div className=" grid grid-cols-6 gap-x-6 gap-y-8">
                <AccountBalance/>
                <MonthlySummery title="Paid this month"/>
                <MonthlySummery title="Outstanding this month"/>
                <DetailCard title="Invoice"/>
                <DetailCard title="Payment"/>
                <DetailCard title="Clients"/>
                <DetailCard title="Purchase"/>
                <div className=" col-span-2 row-span-3"><InvoiceForm/></div>
            </div>

        </div>
    </NavBar>
}

export default UserSummery