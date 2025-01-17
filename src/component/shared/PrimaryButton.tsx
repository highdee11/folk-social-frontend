import { PrimaryButtonProps } from "../../core/interfaces/PropsInterface"

const PrimaryButton = ({ 
    disabled,
    onTap,
    type = 'submit',
    children,
}: PrimaryButtonProps)=>{
    
    return (
        <button 
            type={type} 
            onClick={!disabled? onTap: ()=>{}}
            className={`w-full h-[50px] ${disabled? 'bg-opacity-50 cursor-not-allowed':'bg-opacity-100'}
             text-white rounded-[5px] bg-darkColor OnestMedium hover:opacity-[0.9]
              ease-in-out duration-150 flex justify-center items-center gap-3`}>
            
            
            {children}
        </button>
    )
}

export default PrimaryButton;