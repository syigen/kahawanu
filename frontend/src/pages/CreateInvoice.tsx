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
          <div>
            <p>Invoice details</p>
            {/* <table>
                <thead className="text-[#6576FD]">
                   <tr>
                    <th>Description</th>
                    <th>Rate</th>
                    <th>Qty</th>
                    <th>Amount</th>
                   </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table> */}
            <div>
                <div>
                    <p>Description</p>
                </div>
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
