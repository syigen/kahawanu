import User1 from "../../images/user1.png"

const UserDetail =()=>{
    return(
        <div className='flex justify-between items-center'>
                        <div className=' flex justify-between items-center space-x-2'>
                            <img src={User1}/>
                            <p className=''>Brendon Taylor</p>
                        </div>
                        <div className=' flex space-x-2 '>
                            <div>16 Feb</div>
                            <div>14.24</div>
                        </div>
                        <div className='  flex space-x-20 items-center'>
                            <div className='rounded-full bg-[#9AA3EC] px-3 py-0.5'>Paid</div>
                            <div>
                                <div className=' font-bold text-lg'>$240</div>
                                <div className=' text-sm text-[#9AA3EC]'>+05.00</div>
                            </div>
                        </div>
                    </div>
    )
}

export default UserDetail;