import { useState, useEffect } from "react"
import { JsxElement } from "typescript"

const invoiceIcon = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#1E1E1E"/>
<rect width="1440" height="1024" transform="translate(-132 -352)" fill="white"/>
<rect x="-24" y="-24" width="184" height="160" rx="12" fill="#FFC2A0"/>
<circle cx="20" cy="20" r="20" fill="#151B2C"/>
<path d="M28.3333 15V17.0167C28.3333 18.3333 27.5 19.1667 26.1833 19.1667H23.3333V13.3417C23.3333 12.4167 24.0916 11.6667 25.0166 11.6667C25.925 11.675 26.7583 12.0417 27.3583 12.6417C27.9583 13.25 28.3333 14.0833 28.3333 15Z" stroke="#FCB38B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 15.8333V27.5C11.6667 28.1917 12.45 28.5833 13 28.1667L14.425 27.1C14.7584 26.85 15.225 26.8833 15.525 27.1833L16.9084 28.575C17.2334 28.9 17.7667 28.9 18.0917 28.575L19.4917 27.175C19.7834 26.8833 20.25 26.85 20.575 27.1L22 28.1667C22.55 28.575 23.3334 28.1833 23.3334 27.5V13.3333C23.3334 12.4167 24.0834 11.6667 25 11.6667H15.8334H15C12.5 11.6667 11.6667 13.1583 11.6667 15V15.8333Z" stroke="#FCB38B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 20.8417H20" stroke="#FCB38B" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5083H20" stroke="#FCB38B" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.9963 20.8333H15.0038" stroke="#FCB38B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.9963 17.5H15.0038" stroke="#FCB38B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const paymentIcon= <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#1E1E1E"/>
<rect width="1440" height="1024" transform="translate(-340 -352)" fill="white"/>
<rect x="-24" y="-24" width="184" height="160" rx="12" fill="#C7F7A9"/>
<circle cx="20" cy="20" r="20" fill="#151B2C"/>
<path d="M11.6666 20.5083H25.8333" stroke="#B9EC9A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 18.5667V24.525C25.8083 26.9 25.1583 27.5 22.6833 27.5H14.8167C12.3 27.5 11.6666 26.875 11.6666 24.3917V18.5667C11.6666 16.3167 12.1916 15.5917 14.1666 15.475C14.3666 15.4667 14.5833 15.4583 14.8167 15.4583H22.6833C25.1999 15.4583 25.8333 16.0833 25.8333 18.5667Z" stroke="#B9EC9A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3333 15.6083V21.4333C28.3333 23.6833 27.8083 24.4083 25.8333 24.525V18.5667C25.8333 16.0833 25.1999 15.4583 22.6833 15.4583H14.8167C14.5833 15.4583 14.3666 15.4667 14.1666 15.475C14.1916 13.1 14.8417 12.5 17.3167 12.5H25.1833C27.6999 12.5 28.3333 13.125 28.3333 15.6083Z" stroke="#B9EC9A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.375 24.8417H15.8083" stroke="#B9EC9A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5917 24.8417H20.4583" stroke="#B9EC9A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const clientsIcon= <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#1E1E1E"/>
<rect width="1440" height="1024" transform="translate(-548 -352)" fill="white"/>
<rect x="-24" y="-24" width="184" height="160" rx="12" fill="#B3BBFF"/>
<circle cx="20" cy="20" r="20" fill="#151B2C"/>
<path d="M20.1334 19.0583C20.05 19.05 19.95 19.05 19.8584 19.0583C17.875 18.9917 16.3 17.3667 16.3 15.3667C16.3 13.325 17.95 11.6667 20 11.6667C22.0417 11.6667 23.7 13.325 23.7 15.3667C23.6917 17.3667 22.1167 18.9917 20.1334 19.0583Z" stroke="#9AA3EC" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9667 22.1333C13.9501 23.4833 13.9501 25.6833 15.9667 27.025C18.2584 28.5583 22.0167 28.5583 24.3084 27.025C26.3251 25.675 26.3251 23.475 24.3084 22.1333C22.0251 20.6083 18.2667 20.6083 15.9667 22.1333Z" stroke="#9AA3EC" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const purchaseIcon = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#1E1E1E"/>
<rect width="1440" height="1024" transform="translate(-756 -352)" fill="white"/>
<rect x="-24" y="-24" width="184" height="160" rx="12" fill="#FFAFC3"/>
<circle cx="20" cy="20" r="20" fill="#151B2C"/>
<path d="M11.6666 11.6667H13.1166C14.0166 11.6667 14.725 12.4417 14.65 13.3333L13.9583 21.6333C13.8416 22.9916 14.9166 24.1583 16.2833 24.1583H25.1583C26.3583 24.1583 27.4083 23.175 27.5 21.9833L27.95 15.7333C28.05 14.35 27 13.225 25.6083 13.225H14.85" stroke="#F99AB1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.5417 28.3333C24.117 28.3333 24.5833 27.867 24.5833 27.2917C24.5833 26.7164 24.117 26.25 23.5417 26.25C22.9664 26.25 22.5 26.7164 22.5 27.2917C22.5 27.867 22.9664 28.3333 23.5417 28.3333Z" stroke="#F99AB1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.875 28.3333C17.4503 28.3333 17.9167 27.867 17.9167 27.2917C17.9167 26.7164 17.4503 26.25 16.875 26.25C16.2997 26.25 15.8334 26.7164 15.8334 27.2917C15.8334 27.867 16.2997 28.3333 16.875 28.3333Z" stroke="#F99AB1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 16.6667H27.5" stroke="#F99AB1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

interface Iprops{
    title:string
}

const DetailCard=(props:Iprops)=>{


    const [svg, setSvg]= useState<JSX.Element>()

    useEffect(()=>{
        switch(props.title){
            case "Invoice":
                setSvg(invoiceIcon);
                break;
            case "Payment":
                setSvg(paymentIcon);
                break;
            case "Clients":
                setSvg(clientsIcon);
                break;
            case "Purchase":
                setSvg(purchaseIcon);
                break;
            default:
                
        }
    },[])
    

    return (
        <div className=" bg-[#FFC2A0] grid grid-rows-2 p-4 gap-y-8 rounded-xl">
            <div>{svg}</div>
            <p className=" text-lg font-bold">{props.title}</p>

        </div>
    )
}

export default DetailCard