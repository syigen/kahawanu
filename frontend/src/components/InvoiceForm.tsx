import InputBox from "./InputBox";
import { InputTextarea } from "primereact/inputtextarea";

const InvoiceForm = () => {
  return (
    <div className=" bg-slate-100 p-6 rounded-xl space-y-8">
      <div className=" space-y-3">
        <div className=" flex justify-between items-center">
          <p className=" text-[#151B2C] font-bold text-2xl">Quick Invoice</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div className=" flex justify-between">
          <p className=" text-[#91939D] text-xl">Latest Transaction</p>
          <p className=" text-sm">See all</p>
        </div>
      </div>
      <form>
        <p className=" font-bold text-xl mb-2">Form</p>
        <div className=" grid grid-cols-2 gap-x-3.5 gap-y-3">
          <InputBox
            id="name"
            value=""
            onBlur={() => {}}
            type="text"
            placeholder="Name"
            onChange={() => {}}
            touched=""
            label=""
          />
          <InputBox
            id="email"
            value=""
            onBlur={() => {}}
            type="email"
            placeholder="Email"
            onChange={() => {}}
            touched=""
            label=""
          />
          <InputBox
            id="contact"
            value=""
            onBlur={() => {}}
            type="tel"
            placeholder="Phone number"
            onChange={() => {}}
            touched=""
            label=""
          />
          <InputBox
            id="bussines_contact"
            value=""
            onBlur={() => {}}
            type="tel"
            placeholder="Business number"
            onChange={() => {}}
            touched=""
            label=""
          />
          <div className=" col-span-2 border">
            <InputTextarea
              className=" w-full"
              id="address"
              value=""
              onBlur={() => {}}
              type="text"
              placeholder="Address"
              onChange={() => {}}
              
            />
          </div>
          <InputBox
            id="item_name"
            value=""
            onBlur={() => {}}
            type="text"
            placeholder="Item name"
            onChange={() => {}}
            touched=""
            label=""
          />
          <InputBox
            id="amount"
            value=""
            onBlur={() => {}}
            type="number"
            placeholder="Amount"
            onChange={() => {}}
            touched=""
            label=""
          />

          <div className=" border col-span-2">Attach Document</div>

          <div className=" flex  col-span-2 justify-between">
            <button className=" bg-[#FFEAEF] p-4 rounded-lg">Add more details</button>
            ,<button className=" bg-[#191D30] text-[#FFFFFF] p-4 rounded-lg">Generate Invoice</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
