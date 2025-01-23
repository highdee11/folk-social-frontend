import { Link, useSearchParams } from 'react-router-dom';
import SuccessImage from '../../assets/images/successIcon.svg';
import ToggleThemeItem from '../../component/shared/ToggleThemeItem';
import { routes } from '../../core/data/route';
const CreateAccountSuccessPage = () => {

    const [searchParams] = useSearchParams()

    return (
        <div className=" flex flex-col justify-center items-center h-[100vh] w-full bg-lightFaintGray dark:bg-darkColor">

            <div className=' bg-white dark:bg-[#131313] py-9 px-7 rounded-md shadow-md shadow-lightFaintGray'>
                <div className='flex justify-center items-center'>
                    <img src={SuccessImage} />
                </div>

                <div className='mt-8'>
                    <p className='OnestMedium dark:text-white text-3xl text-center mb-2'>
                        Account Created Successfully!  🎉
                    </p>
                    <p className=' text-sm dark:text-white text-center w-[250px] mx-auto'>
                        You're ready to go! Start connecting and sharing your thoughts.
                    </p>

                    <div className=' flex justify-center items-center mt-10'>
                        <Link to={routes.login+"?email="+searchParams.get("email")} className=' bg-darkColor dark:bg-white OnestRegular px-7 py-2.5 rounded-md mx-auto text-white dark:text-darkColor text-sm flex justify-center items-center gap-1'>
                            Continue
                        </Link>
                    </div>

                </div>
            </div>

            <div className="mx-auto items-center my-10">
                <ToggleThemeItem />
            </div>
        </div>
    );
}

export default CreateAccountSuccessPage;