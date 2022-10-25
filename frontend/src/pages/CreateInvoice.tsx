import NavBar from "components/NavBar";
import InputBox from "components/InputBox";
import { InputTextarea } from "primereact/inputtextarea";

interface Iprops {
    title: string
    business_number?:string
}

const Form = ({title, business_number}:Iprops)=>{

    return<form>
    <p>{title}</p>
    <div className=" grid grid-cols-2 gap-x-6 gap-y-5">
      <InputBox
        id="name"
        value=""
        onChange={() => {}}
        onBlur={() => {}}
        type="text"
        placeholder="Name"
        error=""
        label=""
        touched=""
      />
      <InputBox
        id="email"
        value=""
        onChange={() => {}}
        onBlur={() => {}}
        type="text"
        placeholder="Email address"
        error=""
        label=""
        touched=""
      />
      <InputBox
        id="contact"
        value=""
        onChange={() => {}}
        onBlur={() => {}}
        type="text"
        placeholder="Phone number"
        error=""
        label=""
        touched=""
      />
      <InputBox
        id="biz_contact"
        value=""
        onChange={() => {}}
        onBlur={() => {}}
        type="text"
        placeholder={business_number ? "Business number": "Pan card number"}
        error=""
        label=""
        touched=""
      />
      <InputTextarea
        className="col-span-2"
        value=""
        onChange={() => {}}
        autoResize
        placeholder="Address"
      />
    </div>
  </form>
}

const CreateInvoice = () => {

  return (
    <NavBar>
      <div className=" grid grid-cols-3 mx-20 ">
        <div className="col-span-2 px-6 py-6 bg-[#F7F7FA]">
          <div className=" flex justify-between">
            <div>
              <p>Create Invoice</p>
              <p>INV2983649020</p>
            </div>
            <button>Back</button>
          </div>
          <div>
            <p>Upload invoice logo</p>
          </div>

          <Form title="From" business_number="Business number"/>
          <Form title="To"/>

          <div className=" mt-8 ">
            <p className=" text-xl font-bold">Invoice details</p>

            <div className=" grid grid-cols-7 gap-x-10 mt-3">
              <p className=" col-span-3 text-[#6576FD] font-bold">Description</p>
              <p className="  text-[#6576FD] font-bold">Rate</p>
              <p className="  text-[#6576FD] font-bold">QTY</p>
              <p className="col-span-2 text-[#6576FD] font-bold">Amount</p>
            </div>

            <div className=" grid grid-cols-7 gap-x-10 mt-3">  
              <div className=" col-span-3 ">
                <InputBox
                  id="description"
                  value=""
                  onChange={() => {}}
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
                  value=""
                  onChange={() => {}}
                  onBlur={() => {}}
                  type="text"
                  placeholder="rate"
                  error=""
                  label=""
                  touched=""
                />

                <InputBox
                  id="qty"
                  value=""
                  onChange={() => {}}
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
                    value=""
                    onChange={() => {}}
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
              <button className=" bg-[#151B2C] text-[#FFFFFF] px-4 py-2 rounded-lg mt-6"> Add 1 more item</button>
            </div>
          </div>
        </div>

        <div className=" col-span-1">
          <p>Preview</p>
        </div>
      </div>
    </NavBar>
  );
};

export default CreateInvoice;
