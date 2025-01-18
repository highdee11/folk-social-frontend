import { CustomInputProps } from "../../core/interfaces/PropsInterface";

const CustomInput: React.FC<CustomInputProps> = ({ label, name, type, value, prefixIcon, onChange})=>{ 

    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm OnestRegular text-[#101010]">{label}</label>
            <div className='relative'>
                { prefixIcon }
                <input 
                    value={value}
                    onChange={onChange}
                    type={type} 
                    id={name} 
                    name={name}
                    className="bg-lightFaintGray dark:bg-darkFaintGray border border-[#001C001A] text-[#101010] dark:text-white text-sm rounded-[4px] focus:ring-[#101010] focus:border-[#101010]  block w-full p-2.5 pl-12 h-[50px] OnestRegular placeholder:text-[#001C0033]"
                    placeholder={`Enter ${label}`}
                    required />
            </div>
        </>
    )
}

export default CustomInput;