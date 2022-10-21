import React, { useState } from 'react';



import AccountBalance from "components/ContentCards/AccountBalance"
import DetailCard from "components/ContentCards/DetailCard"
import MonthlySummery from "components/ContentCards/MonthlySummery"
import InvoiceForm from "components/InvoiceForm"
import NavBar from "components/NavBar"


import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import UserDetail from 'components/UserDetailCard';

const Overview=()=>{

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

                <div className=" col-span-4 bg-[#F7F7FA]">
                    <div>Recent Transactions</div>
                    <div className="flex justify-between">
                        <div className="p-input-icon-left flex flex-col w-1/2">
                            <i className="pi pi-search" />
                            <InputText value="" onChange={()=>{}} placeholder="search by invoice number, date" />
                        </div>
                        <div>
                        <Calendar id="range" value={dates2} onChange={(e) => setDates2(e.value)} selectionMode="range" readOnlyInput  showIcon/>
                        </div>
                    </div>
                    <div className=' w-4/5 flex  justify-between mt-4'>
                        <button className=' bg-[#151B2C] text-[#D9DFFF] text-xs py-1 px-10 rounded-md'>All</button>
                        <button className=' bg-[#E9ECFB] text-[#151B2C] text-xs py-1 px-10 rounded-md'>Draft</button>
                        <button className=' bg-[#E9ECFB] text-[#151B2C] text-xs py-1 px-10 rounded-md'>Pending</button>
                        <button className=' bg-[#E9ECFB] text-[#151B2C] text-xs py-1 px-10 rounded-md'>Paid</button>
                        <button className=' bg-[#E9ECFB] text-[#151B2C] text-xs py-1 px-10 rounded-md'>Unpaid</button>
                    </div>

                    <div className='space-y-6 mt-10'>
                        <UserDetail/>
                        <UserDetail/>
                        <UserDetail/>
                        <UserDetail/>
                    </div>

                </div>
            </div>

        </div>
    </NavBar>
}
export default Overview