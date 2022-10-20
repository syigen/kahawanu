import React, { useState } from 'react';

import AccountBalance from "components/ContentCards/AccountBalance"
import DetailCard from "components/ContentCards/DetailCard"
import MonthlySummery from "components/ContentCards/MonthlySummery"
import InvoiceForm from "components/InvoiceForm"
import NavBar from "components/NavBar"

import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const UserSummery=()=>{

    const [dates2, setDates2] = useState<Date | Date[] | undefined>(undefined);


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

                <div className=" col-span-4 border">
                    <p>Recent Transactions</p>
                    <div className=" flex justify-between items-center">
                        <span className="p-input-icon-left ">
                            <i className="pi pi-search" />
                            <InputText className="rounded-full p-inputtext-sm"  value="" onChange={()=>{}} placeholder="Search" />
                        </span>
                        <div>
                        <Calendar id="range" value={dates2} onChange={(e) => setDates2(e.value)} selectionMode="range" readOnlyInput  showIcon/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </NavBar>
}

export default UserSummery