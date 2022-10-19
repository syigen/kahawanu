import { InputText } from "primereact/inputtext";

interface IInputBox{
    id:any;
    value: any;
    label:any;
    onChange: (value: any) => void;
    onBlur: (value: any) => void;
    type: string;
    placeholder: string;
    error?:string;
    touched: any;
}

const InputBox = ({id,value,onChange,onBlur,type,placeholder,error,label, touched}:IInputBox)=>{
    
    return (<>
    
        <div className="flex flex-col  w-full ">
            <label htmlFor={id}>{label}</label>
            <InputText
                value={value}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            
            />
            {touched && error ? (<div className=" text-red-500">{error}</div>) : null}
        </div>
    
    </>)
}
export default InputBox;