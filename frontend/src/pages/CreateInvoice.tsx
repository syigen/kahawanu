import React, { ChangeEvent, useState } from "react";
import { useFormik } from "formik";

import NavBar from "components/NavBar";
import InputBox from "components/InputBox";
import { InputTextarea } from "primereact/inputtextarea";

import templateImage from "../images/template.png"
import userImage from "../images/user_2.png"

interface Iprops {
    title: string
    business_number?:string
}

interface invoiceDetail{
  description:string,
  rate:string,
  qty:string,
  amount:string
}
let ItemDetailList : invoiceDetail[] = []

const CreateInvoice = () => {

  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      contact:"",
      biz_contact:"",
      address:"",
      name_2:"",
      email_2:"",
      contact_2:"",
      address_2:"",
      pan_card:""
     
    },
    onSubmit:(values)=>{
        alert(values)
    },
  })

  const [detailList, setDetailList]= useState<invoiceDetail[]>()
  const [details, setDetails] = useState<invoiceDetail>({
    description:"",
    rate: "",
    qty: "",
    amount:""
  });

  const ItemDetailChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setDetails((prevState)=>{
        return {...prevState, [e.target.id]: e.target.value }
    });
  }

  const AddItemHandler=(e:React.MouseEvent)=>{
    if(details.description.length===0){
      return
    }
      ItemDetailList.push(details);
      setDetailList(ItemDetailList)
      setDetails({
        description:"",
        rate: "",
        qty: "",
        amount:""
      })    
  }
  return (
    <NavBar>
   <form onSubmit={formik.handleSubmit}> 
      <div className=" grid grid-cols-3 mx-20 gap-x-6">
        <div className="col-span-2 px-6 py-6 bg-[#F7F7FA] rounded-2xl">
          <div className=" flex justify-between items-start">
            <div className=" space-y-3">
              <p className=" text-3xl font-bold ">Create Invoice</p>
              <p className=" bg-[#FFE4EB] px-3 py-1 rounded-lg w-fit">INV2983649020</p>
            </div>
            <button className=" text-[#91939D] bg-[#FFFFFF] py-2 px-6 rounded-lg" >Back</button>
          </div>
          <div className=" mt-8">
            <p className=" text-xl font-bold">Upload invoice logo</p>
            <div></div>
          </div>

          <div>
          <p className=" my-3 text-lg font-bold">From</p>
              <div className=" grid grid-cols-2 gap-x-6 gap-y-5">
                <InputBox
                  id="name"
                  value={formik.values.name}        
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Name"
                  error={formik.errors.name}
                  label={""}
                  touched={formik.touched.name}
                />
                <InputBox
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Email address"
                  error={formik.errors.email}
                  label=""
                  touched={formik.touched.email}
                />
                <InputBox
                  id="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Phone number"
                  error={formik.errors.contact}
                  label=""
                  touched={formik.touched.contact}
                />
                <InputBox
                  id={ "biz_contact"}
                  value={formik.values.biz_contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder={"Business number"}
                  error={formik.errors.biz_contact}
                  label=""
                  touched={formik.touched.biz_contact}
                /> 
               
                <InputTextarea
                  id="address"
                  className="col-span-2"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoResize
                  placeholder="Address"
                
                />
              </div>
              <p className=" my-3 text-lg font-bold">To</p>
              <div className=" grid grid-cols-2 gap-x-6 gap-y-5">
                <InputBox
                  id="name_2"
                  value={formik.values.name_2}        
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Name"
                  error={formik.errors.name_2}
                  label={""}
                  touched={formik.touched.name_2}
                />
                <InputBox
                  id="email_2"
                  value={formik.values.email_2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Email address"
                  error={formik.errors.email_2}
                  label=""
                  touched={formik.touched.email_2}
                />
                <InputBox
                  id="contact_2"
                  value={formik.values.contact_2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Phone number"
                  error={formik.errors.contact_2}
                  label=""
                  touched={formik.touched.contact_2}
                />
                 
                <InputBox
                  id={ "pan_card"}
                  value={formik.values.pan_card}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder={"Pan card number"}
                  error={formik.errors.pan_card}
                  label=""
                  touched={formik.touched.pan_card}
                />
                <InputTextarea
                  id="address_2"
                  className="col-span-2"
                  value={formik.values.address_2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoResize
                  placeholder="Address"
                
                />
              </div>
          </div>
          

          <div className=" mt-8 bg-[#EFF2FF] px-6 py-6 rounded-lg">
            <p className=" text-xl font-bold">Invoice details</p>

            <div className=" grid grid-cols-7 gap-x-10 mt-3">
              <p className=" col-span-3 text-[#6576FD] font-bold">Description</p>
              <p className="  text-[#6576FD] font-bold">Rate</p>
              <p className="  text-[#6576FD] font-bold">QTY</p>
              <p className="col-span-2 text-[#6576FD] font-bold">Amount</p>
              {detailList && detailList.map(item=>{
                return<>
                    <p className=" bg-[#FFFFFF] col-span-3  font-bold px-3 py-2 rounded-lg">{item.description}</p>
                    <p className=" bg-[#FFFFFF] font-bold px-3 py-2 rounded-lg">{item.rate}</p>
                    <p className=" bg-[#FFFFFF] font-bold px-3 py-2 rounded-lg">{item.qty}</p>
                    <p className=" bg-[#FFFFFF] col-span-2 font-bold px-3 py-2 rounded-lg">{item.amount}</p>
                </>
              })}
            </div>

            <div className=" grid grid-cols-7 gap-x-10 mt-3">  
              <div className=" col-span-3 ">
                <InputBox
                  id="description"
                  value={details.description}
                  onChange={ItemDetailChangeHandler}
                  onBlur={() => {}}
                  type="text"
                  placeholder="description"
                  error=""
                  label=""
                  touched=""
                />
              </div>

                <InputBox
                  id="rate"
                  value={details.rate}
                  onChange={ItemDetailChangeHandler}
                  onBlur={() => {}}
                  type="text"
                  placeholder="rate"
                  error=""
                  label=""
                  touched=""
                />

                <InputBox
                  id="qty"
                  value={details.qty}
                  onChange={ItemDetailChangeHandler}
                  onBlur={() => {}}
                  type="text"
                  placeholder="qty"
                  error=""
                  label=""
                  touched=""
                />
                <div className=" col-span-2">
                  <InputBox
                    id="amount"
                    value={details.amount}
                    onChange={ItemDetailChangeHandler}
                    onBlur={() => {}}
                    type="text"
                    placeholder="amount"
                    error=""
                    label=""
                    touched=""
                  />
                </div>
            </div>
            <div className=" ">
              <button className=" bg-[#151B2C] text-[#FFFFFF] px-4 py-2 rounded-lg mt-6" onClick={AddItemHandler}> Add 1 more item</button>
            </div>
              
          </div>

            <div className=" flex  justify-end mt-8">
              <div className=" flex flex-col items-end text-[#91939D]">
                <p>Subtotal - </p>
                <p>Tax - </p>
                <p>Total - </p>
                <p>Balance due - </p>
              </div>
              <div className=" flex flex-col items-end w-1/4 font-bold">
                <p>${1000}</p>
                <p>${1000}</p>
                <p>${1000}</p>
                <p>${1000}</p>
              </div>
                
            </div>
              
            <div className=" grid grid-cols-2 gap-x-6 mt-12">
              <button className=" bg-[#FFEAEF] py-4 rounded-lg" type="button">Preview as email</button>
              <button className=" bg-[#191D30] text-[#FFFFFF] py-4 rounded-lg" type="submit" >Generate Invoice</button>
            </div>
        </div>

        <div className=" col-span-1 px-6 py-6 bg-[#F7F7FA] rounded-2xl h-fit" >
          <div className=" flex justify-between">
            <p className=" text-2xl font-bold">Preview</p>
            <div className=" flex space-x-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.96 14.17C26.96 15.56 28.34 17.77 28.62 20.32" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.4902 20.37C11.7502 17.83 13.1102 15.62 15.0902 14.22" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.1899 28.94C17.3499 29.53 18.6699 29.86 20.0599 29.86C21.3999 29.86 22.6599 29.56 23.7899 29.01" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.0598 15.7C21.5951 15.7 22.8398 14.4554 22.8398 12.92C22.8398 11.3847 21.5951 10.14 20.0598 10.14C18.5244 10.14 17.2798 11.3847 17.2798 12.92C17.2798 14.4554 18.5244 15.7 20.0598 15.7Z" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.8298 27.92C14.3652 27.92 15.6098 26.6753 15.6098 25.14C15.6098 23.6046 14.3652 22.36 12.8298 22.36C11.2945 22.36 10.0498 23.6046 10.0498 25.14C10.0498 26.6753 11.2945 27.92 12.8298 27.92Z" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.1701 27.92C28.7055 27.92 29.9501 26.6753 29.9501 25.14C29.9501 23.6046 28.7055 22.36 27.1701 22.36C25.6348 22.36 24.3901 23.6046 24.3901 25.14C24.3901 26.6753 25.6348 27.92 27.1701 27.92Z" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17V14.5C10 12.01 12.01 10 14.5 10H17" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 10H25.5C27.99 10 30 12.01 30 14.5V17" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30 24V25.5C30 27.99 27.99 30 25.5 30H24" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 30H14.5C12.01 30 10 27.99 10 25.5V23" stroke="#91939D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

          </div>
          <div className=" flex justify-center mt-4">
            <img src={templateImage}/>
          </div>
          <div className=" flex space-x-8 justify-center mt-6">
            <p className=" text-[#151B2C]">{"INV2983649020"}</p>
            <p className=" text-[#91939D]">${"21000.00"}</p>
          </div>
          <div className=" flex space-x-4 justify-center mt-4">
            <img src={userImage}/>
            <div className=" flex space-x-2"> 
              <p>To</p>
              <p>{"Dianne Russell"}</p>
            </div>
          </div>
          
        </div>
      </div>
    </form>   
  </NavBar>
  );
};

export default CreateInvoice;
