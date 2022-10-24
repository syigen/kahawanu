import NavBar from "components/NavBar";
import user1 from "../images/user1.png"
import UserDetail from "components/UserDetailCard";

import { InputText } from 'primereact/inputtext';
import { TreeSelect } from 'primereact/treeselect';

const Invoice =()=>{

    return <NavBar>
        <div className=" grid grid-cols-3 mx-20 mb-6 gap-x-6 ">
            <div className=" col-span-1 bg-[#F7F7FA] pt-6 px-6 rounded-xl" >

                    <p className=" text-2xl font-bold">Account Status</p>

                    <div className=" bg-[#FFFFFF] mt-6 pt-6 px-6 space-y-2">
                        <p className=" text-[#91939D] text-sm">Paid by this month</p>
                        <div className=" flex items-end space-x-2">
                            <p className=" text-xl font-bold">$14,432</p>
                            <p className=" text-[#25AF60] text-sm">+374.53</p>
                        </div>
                    </div>

                    <div className=" bg-[#FFFFFF] mt-6 pt-6 px-6 space-y-2">
                        <p className=" text-[#91939D] text-sm">Paid by this month</p>
                        <div className=" flex items-end space-x-2">
                            <p className=" text-xl font-bold">$14,432</p>
                            <p className=" text-[#25AF60] text-sm">+374.53</p>
                        </div>
                    </div>
                    <div >
                        <p className=" text-2xl font-bold mt-8">Invoice-Clients</p>
                        <div className=" grid grid-cols-3 gap-x-3 gap-y-6">

                            <div className="py-5 flex flex-col justify-between items-center space-y-2 rounded-lg bg-[#FFFFFF]">
                                <img width="40px" src={user1}/>
                                <p>Bernard</p>
                                <p className=" text-sm text-[#F99AB1]">+324.89</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6666 7.99998C14.6666 11.68 11.6799 14.6666 7.99992 14.6666C4.31992 14.6666 2.07325 10.96 2.07325 10.96M2.07325 10.96H5.08659M2.07325 10.96V14.2933M1.33325 7.99998C1.33325 4.31998 4.29325 1.33331 7.99992 1.33331C12.4466 1.33331 14.6666 5.03998 14.6666 5.03998M14.6666 5.03998V1.70665M14.6666 5.03998H11.7066" stroke="#151B2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="py-5 flex flex-col justify-between items-center space-y-2 rounded-lg bg-[#FFFFFF]">
                                <img width="40px" src={user1}/>
                                <p>Bernard</p>
                                <p className=" text-sm text-[#F99AB1]">+324.89</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6666 7.99998C14.6666 11.68 11.6799 14.6666 7.99992 14.6666C4.31992 14.6666 2.07325 10.96 2.07325 10.96M2.07325 10.96H5.08659M2.07325 10.96V14.2933M1.33325 7.99998C1.33325 4.31998 4.29325 1.33331 7.99992 1.33331C12.4466 1.33331 14.6666 5.03998 14.6666 5.03998M14.6666 5.03998V1.70665M14.6666 5.03998H11.7066" stroke="#151B2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="py-5 flex flex-col justify-between items-center space-y-2 rounded-lg bg-[#FFFFFF]">
                                <img width="40px" src={user1}/>
                                <p>Bernard</p>
                                <p className=" text-sm text-[#F99AB1]">+324.89</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6666 7.99998C14.6666 11.68 11.6799 14.6666 7.99992 14.6666C4.31992 14.6666 2.07325 10.96 2.07325 10.96M2.07325 10.96H5.08659M2.07325 10.96V14.2933M1.33325 7.99998C1.33325 4.31998 4.29325 1.33331 7.99992 1.33331C12.4466 1.33331 14.6666 5.03998 14.6666 5.03998M14.6666 5.03998V1.70665M14.6666 5.03998H11.7066" stroke="#151B2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="py-5 flex flex-col justify-between items-center space-y-2 rounded-lg bg-[#FFFFFF]">
                                <img width="40px" src={user1}/>
                                <p>Bernard</p>
                                <p className=" text-sm text-[#F99AB1]">+324.89</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6666 7.99998C14.6666 11.68 11.6799 14.6666 7.99992 14.6666C4.31992 14.6666 2.07325 10.96 2.07325 10.96M2.07325 10.96H5.08659M2.07325 10.96V14.2933M1.33325 7.99998C1.33325 4.31998 4.29325 1.33331 7.99992 1.33331C12.4466 1.33331 14.6666 5.03998 14.6666 5.03998M14.6666 5.03998V1.70665M14.6666 5.03998H11.7066" stroke="#151B2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="py-5 flex flex-col justify-between items-center space-y-2 rounded-lg bg-[#FFFFFF]">
                                <img width="40px" src={user1}/>
                                <p>Bernard</p>
                                <p className=" text-sm text-[#F99AB1]">+324.89</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6666 7.99998C14.6666 11.68 11.6799 14.6666 7.99992 14.6666C4.31992 14.6666 2.07325 10.96 2.07325 10.96M2.07325 10.96H5.08659M2.07325 10.96V14.2933M1.33325 7.99998C1.33325 4.31998 4.29325 1.33331 7.99992 1.33331C12.4466 1.33331 14.6666 5.03998 14.6666 5.03998M14.6666 5.03998V1.70665M14.6666 5.03998H11.7066" stroke="#151B2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                        </div>
                    </div>

            </div>

            <div className=" col-span-2 bg-[#F7F7FA] px-6 py-6 rounded-xl">
                    <div >
                            <p className=" text-2xl font-bold">Activity</p>
                            <div className="flex justify-between mt-3">
                                <div className="p-input-icon-left flex flex-col w-1/2 ">
                                    <i className="pi pi-search" />
                                    <InputText className="rounded-full" value="" onChange={()=>{}} placeholder="search by invoice number, date" />
                                </div>
                                <TreeSelect value=""  onChange={()=>{}} placeholder="Month"></TreeSelect>
                            </div>
                            <div className='flex  space-x-4 mt-10'>
                                <button className=' bg-[#151B2C] text-[#D9DFFF] text-xs py-1 px-10 rounded-md'>All</button>
                                <button className=' bg-[#E9ECFB] text-[#151B2C] text-xs py-1 px-10 rounded-md'>Paid</button>
                                <button className=' bg-[#E9ECFB] text-[#151B2C] text-xs py-1 px-10 rounded-md'>Outstanding</button>
                               
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

export default Invoice;