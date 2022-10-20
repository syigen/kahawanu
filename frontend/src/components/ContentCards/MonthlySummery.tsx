
interface Iprops{
        title:string
}

const MonthlySummery=(props:Iprops)=>{

    return <div className=" col-span-2 bg-gradient-to-r from-[#F999B0] to-[#F07797] p-4 rounded-xl">
                <div className=" grid grid-rows-2 gap-y-4">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="#1E1E1E"/>
                        <rect width="1440" height="1024" transform="translate(-548 -128)" fill="white"/>
                        <rect x="-24" y="-24" width="392" height="200" rx="12" fill="#F7F7FA"/>
                        <circle cx="24" cy="24" r="24" fill="#E6F9DC"/>
                        <path d="M14 20.5H26.5" stroke="#25AF60" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 28.5H20" stroke="#25AF60" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.5 28.5H26.5" stroke="#25AF60" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34 26.03V28.11C34 31.62 33.11 32.5 29.56 32.5H18.44C14.89 32.5 14 31.62 14 28.11V19.89C14 16.38 14.89 15.5 18.44 15.5H26.5" stroke="#25AF60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32 21.5V15.5L34 17.5" stroke="#25AF60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32 15.5L30 17.5" stroke="#25AF60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                    <div className=" text-white">
                        <p className=" text-xl">{props.title}</p>
                        <span className="text-2xl font-bold">$1483.76</span>
                    </div>
                    
                </div>  
            </div>
}

export default MonthlySummery;