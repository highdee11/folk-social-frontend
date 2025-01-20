import LoginImg from '../../assets/images/UP.png';
import ToggleThemeItem from '../../component/shared/ToggleThemeItem';
import { AuthWrapper } from '../../core/interfaces/AuthInterface';



const AuthPageWrapper = ({form, title, description}:AuthWrapper) => {

    return (
        <div className='dark:bg-darkColor h-screen'>
            <div className="flex justify-between h-full w-[1400px] gap-10 sm:pt-28 pt-12 login_wrap mx-auto">

                <div className="min-w-[800px] w-[800px] login_img lg:flex hidden justify-center items-start">
                    <img src={LoginImg} className='h-[85vh] w-full object-contain' alt='img' />
                </div>

                <div className="login_wrap w-full h-full flex flex-col justify-around lg:ml-auto lg:mx-0 mx-auto sm:pt-12 pt-0">
                    <div className="text-[#101010] dark:text-gray-200">
                        <p className='OnestMedium text-3xl  text-center mb-2'> {title} 👋 </p>
                        <p className=' text-[#96A0AD] OnestRegular text-sm w-[320px] mx-auto text-center'>
                            {description}
                        </p>

                        <div className='mt-12 w-full px-5'>
                          {form}
                        </div>
                    </div>


                    <div className="mx-auto">
                        <ToggleThemeItem />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AuthPageWrapper;