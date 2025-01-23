import LoginImg from '../../assets/images/UP.png';
import ToggleThemeItem from '../../component/shared/ToggleThemeItem';
import { AuthWrapper } from '../../core/interfaces/AuthInterface';



const AuthPageWrapper = ({form, title, description}:AuthWrapper) => {

    return (
        <div className='dark:bg-darkColor h-screen'>
            <div className="flex justify-between h-full w-[1400px] gap-10 login_wrap mx-auto">

                <div className="min-w-[800px] w-[800px] login_img lg:flex flex-col hidden justify-center items-start">
                    <img src={LoginImg} className='h-[85vh] w-full object-contain' alt='img' />
                </div>

                <div className="login_wrap w-full overflow-auto h-full flex flex-col justify-center lg:ml-auto lg:mx-0 mx-autopt-0">
                    <div className="text-[#101010] dark:text-gray-200 my-5">
                        <p className='OnestMedium text-3xl  text-center mb-2'> {title} </p>
                        <p className=' text-[#96A0AD] OnestRegular text-sm w-[320px] mx-auto text-center'>
                            {description}
                        </p>

                        <div className='mt-10 w-full px-5 overflow-y-auto'>
                          {form}
                        </div>
                    </div>

                    <div className="mx-auto items-center my-10">
                        <ToggleThemeItem />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AuthPageWrapper;