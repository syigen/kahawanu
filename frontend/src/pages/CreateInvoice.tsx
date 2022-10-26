import React, { ChangeEvent, useState } from "react";
import { useFormik } from "formik";

import NavBar from "components/NavBar";
import InputBox from "components/InputBox";
import { InputTextarea } from "primereact/inputtextarea";

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

const Form = ({title, business_number}:Iprops)=>{
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      contact:"",
      biz_contact:"",
      address:"",
      pan_card:""
     
    },
    onSubmit:(values)=>{
        alert(values)
    },

  })
    return<form>
    <p>{title}</p>
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
      {business_number ?<InputBox
        id={ "biz_contact"}
        value={formik.values.biz_contact}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        placeholder={"Business number"}
        error={formik.errors.biz_contact}
        label=""
        touched={formik.touched.biz_contact}
      /> :
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
      />}
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
  </form>
}

const CreateInvoice = () => {

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
      <div className=" grid grid-cols-3 mx-20 ">
        <div className="col-span-2 px-6 py-6 bg-[#F7F7FA]">
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

          <Form title="From" business_number="Business number"/>
          <Form title="To" business_number=""/>

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
              <button className=" bg-[#191D30] text-[#FFFFFF] py-4 rounded-lg" type="button">Generate Invoice</button>
            </div>
        </div>

        <div className=" col-span-1">
          <p>Preview</p>
        </div>
      </div>
      <InputBox
                  id="description"
                  value={details.description}
                  onChange={()=>{}}
                  onBlur={() => {}}
                  type="text"
                  placeholder="description"
                  error=""
                  label=""
                  touched=""
                />
    </NavBar>
  );
};

export default CreateInvoice;
