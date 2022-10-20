
const AccountBalance=()=>{

    return <div className=" col-span-2 bg-gradient-to-r from-[#F999B0] to-[#F07797] p-4 rounded-xl">
                <div className=" grid grid-rows-2 gap-y-4">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="#1E1E1E"/>
                        <rect width="1440" height="1024" transform="translate(-132 -128)" fill="white"/>
                        <rect x="-24" y="-24" width="392" height="200" rx="12" fill="url(#paint0_linear_0_1)"/>
                        <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.24"/>
                        <path d="M32.5167 19.24V25.2483C32.5167 28.8417 30.4633 30.3816 27.3833 30.3816H17.1283C16.6033 30.3816 16.1017 30.335 15.635 30.23C15.3433 30.1834 15.0633 30.1017 14.8067 30.0084C13.0567 29.355 11.995 27.8383 11.995 25.2483V19.24C11.995 15.6466 14.0483 14.1067 17.1283 14.1067H27.3833C29.9967 14.1067 31.875 15.215 32.3767 17.7467C32.4583 18.2134 32.5167 18.6916 32.5167 19.24Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M36.018 22.7401V28.7485C36.018 32.3418 33.9646 33.8818 30.8846 33.8818H20.6296C19.7663 33.8818 18.9846 33.7652 18.308 33.5085C16.9196 32.9952 15.9746 31.9335 15.6363 30.2302C16.103 30.3352 16.6046 30.3818 17.1296 30.3818H27.3846C30.4646 30.3818 32.518 28.8418 32.518 25.2485V19.2401C32.518 18.6918 32.4713 18.2018 32.378 17.7468C34.5946 18.2135 36.018 19.7768 36.018 22.7401Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.2482 25.3299C23.9492 25.3299 25.3282 23.9509 25.3282 22.2498C25.3282 20.5488 23.9492 19.1698 22.2482 19.1698C20.5471 19.1698 19.1682 20.5488 19.1682 22.2498C19.1682 23.9509 20.5471 25.3299 22.2482 25.3299Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.5767 19.6833V24.8167" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.9254 19.6837V24.817" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_0_1" x1="-24" y1="-24" x2="368" y2="176" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F999B0"/>
                        <stop offset="1" stop-color="#F07797"/>
                        </linearGradient>
                        </defs>
                    </svg>
                

                        <div className=" grid grid-cols-2 ">

                            <div className=" text-white">
                                <p className=" text-xl">John Doe</p>
                                <div className=" flex items-center ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" fill="#1E1E1E"/>
                                        <rect width="1440" height="1024" transform="translate(-132 -246)" fill="white"/>
                                        <rect x="-24" y="-142" width="392" height="200" rx="12" fill="url(#paint0_linear_0_1)"/>
                                        <circle cx="12" cy="12" r="12" fill="#151B2C"/>
                                        <path d="M15.5408 10.5825L12 7.04166L8.45917 10.5825" stroke="#F793AB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 16.9583V7.14084" stroke="#F793AB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_0_1" x1="-24" y1="-142" x2="368" y2="58" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F999B0"/>
                                        <stop offset="1" stop-color="#F07797"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className=" text-2xl font-bold mx-2">$1483.76</span>
                                </div>
                            </div>
                            <div className=" text-white">
                                <p className=" text-xl">Account Balance</p>
                                <span className="text-2xl font-bold">$1483.76</span>
                            </div>
                        </div>
                </div>  
            </div>
}

export default AccountBalance;