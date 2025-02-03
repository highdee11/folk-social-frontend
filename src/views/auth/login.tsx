import LoginImg from '../../assets/images/UP.png';
import useAuth from '../../core/hooks/auth/useAuth';
import { SignInCredentials, SignInRequest } from '../../core/interfaces/AuthInterface';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Error from '../../component/shared/Error';
import PrimaryButton from '../../component/shared/PrimaryButton';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { routes } from '../../core/data/route'; 
import PublicWrapper from './PublicWrapper';
import CustomInput from '../../component/forms/CustomInput';
import CustomPasswordInput from '../../component/forms/CustomPasswordInput';
import AuthPageWrapper from './AuthPageWrapper';


const Login = () => {

    const { signin, signInData, isLoading, error } = useAuth()
    const navigate = useNavigate()
    const [ searchParams ] = useSearchParams()

    const [credentials, setCredentails] = useState<SignInCredentials>(signInData)
    const handleChanges = (field:string, value:any)=> setCredentails({...credentials, [field]: value })

    useEffect(()=>{
        setCredentails({...credentials, username: searchParams.get('email') || ''})
    }, [searchParams])


    const submit = (e: FormEvent)=>{
        e.preventDefault();
        if(isLoading) return;

        const payload: SignInRequest = {email: credentials.username, password: credentials.password }
        signin(payload)
        .then(()=> {
            navigate(routes.home)
        })
    }


    return (
        <AuthPageWrapper 
            form={
                <>
                <div className='w-full px-5'>
                    <form onSubmit={submit}>

                        <div className="mb-8">
                            <CustomInput
                                label="Email Address"
                                name='username'
                                type='email'
                                value={credentials.username}
                                prefixIcon={<span className='absolute bottom-4 left-4 text-black dark:text-white'>
                                        <svg width="17" height="18" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.664 14.88C5.64 14.88 4.71733 14.7147 3.896 14.384C3.08533 14.0533 2.392 13.5893 1.816 12.992C1.25067 12.3947 0.813333 11.6907 0.504 10.88C0.205333 10.0587 0.056 9.16267 0.056 8.192C0.056 7.06133 0.216 6.032 0.536 5.104C0.866667 4.16533 1.34667 3.35467 1.976 2.672C2.60533 1.98933 3.37333 1.46133 4.28 1.088C5.18667 0.714666 6.22667 0.528 7.4 0.528C8.40267 0.528 9.29333 0.693333 10.072 1.024C10.8613 1.344 11.528 1.80267 12.072 2.4C12.616 2.98667 13.032 3.68 13.32 4.48C13.608 5.28 13.752 6.16 13.752 7.12C13.7413 7.568 13.6933 8.048 13.608 8.56C13.5333 9.06133 13.3893 9.53067 13.176 9.968C12.9627 10.4053 12.664 10.7627 12.28 11.04C11.896 11.3067 11.4 11.44 10.792 11.44C10.28 11.44 9.85333 11.312 9.512 11.056C9.17067 10.8 8.94667 10.4587 8.84 10.032C8.63733 10.3627 8.40267 10.6293 8.136 10.832C7.88 11.024 7.60267 11.1627 7.304 11.248C7.00533 11.3227 6.68533 11.36 6.344 11.36C5.69333 11.3493 5.16 11.184 4.744 10.864C4.33867 10.5333 4.04 10.1173 3.848 9.616C3.656 9.104 3.56 8.58133 3.56 8.048C3.57067 7.54667 3.64533 7.06133 3.784 6.592C3.93333 6.12267 4.14667 5.70133 4.424 5.328C4.712 4.944 5.064 4.64533 5.48 4.432C5.90667 4.208 6.39733 4.10133 6.952 4.112C7.24 4.112 7.512 4.14933 7.768 4.224C8.03467 4.29867 8.26933 4.42133 8.472 4.592C8.68533 4.76267 8.85067 4.992 8.968 5.28L9.368 4.448L10.392 4.56C10.2747 5.2 10.1733 5.824 10.088 6.432C10.0133 7.02933 9.95467 7.60533 9.912 8.16C9.89067 8.448 9.89067 8.74133 9.912 9.04C9.93333 9.328 10.008 9.57333 10.136 9.776C10.2747 9.968 10.504 10.064 10.824 10.064C11.1547 10.064 11.4107 9.95733 11.592 9.744C11.784 9.53067 11.928 9.26933 12.024 8.96C12.12 8.64 12.1787 8.32533 12.2 8.016C12.232 7.696 12.248 7.43467 12.248 7.232C12.248 6.50667 12.1467 5.82933 11.944 5.2C11.752 4.56 11.4533 4.00533 11.048 3.536C10.6427 3.06667 10.1307 2.69867 9.512 2.432C8.904 2.16533 8.184 2.032 7.352 2.032C6.41333 2.032 5.592 2.18667 4.888 2.496C4.184 2.80533 3.592 3.23733 3.112 3.792C2.64267 4.34667 2.28533 4.992 2.04 5.728C1.80533 6.45333 1.688 7.232 1.688 8.064C1.688 9.056 1.88533 9.952 2.28 10.752C2.68533 11.5413 3.272 12.16 4.04 12.608C4.808 13.0667 5.73067 13.296 6.808 13.296C7.07467 13.296 7.29867 13.2907 7.48 13.28C7.66133 13.2693 7.832 13.248 7.992 13.216C8.16267 13.1947 8.36 13.1627 8.584 13.12L8.728 14.64C8.35467 14.7253 8.01333 14.784 7.704 14.816C7.40533 14.8587 7.05867 14.88 6.664 14.88ZM6.632 10C7.05867 10 7.40533 9.89333 7.672 9.68C7.94933 9.46667 8.15733 9.18933 8.296 8.848C8.44533 8.50667 8.536 8.144 8.568 7.76C8.61067 7.39733 8.57867 7.04533 8.472 6.704C8.36533 6.36267 8.18933 6.08 7.944 5.856C7.69867 5.632 7.368 5.52 6.952 5.52C6.504 5.52 6.14133 5.648 5.864 5.904C5.58667 6.16 5.37867 6.48 5.24 6.864C5.112 7.248 5.048 7.632 5.048 8.016C5.048 8.19733 5.06933 8.40533 5.112 8.64C5.16533 8.864 5.24533 9.07733 5.352 9.28C5.46933 9.48267 5.62933 9.65333 5.832 9.792C6.04533 9.93067 6.312 10 6.632 10Z" fill="currentColor" />
                                        </svg>
                                    </span>}
                                onChange={(e: ChangeEvent)=> handleChanges(e.target.name, e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <CustomPasswordInput
                                label="Password"
                                name='password'
                                type='email'
                                value={credentials.password}
                                onChange={(e: ChangeEvent)=> handleChanges(e.target.name, e.target.value)}
                            /> 
                        </div>
                        <div className="h-10">
                            <Error message={error} />
                        </div>
                        <div className='mt-5'>
                            <PrimaryButton 
                                label='Login' 
                                type='submit'
                                disabled={isLoading}>
                                Login
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.75 11.7266L4.75 11.7266" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.7002 5.701L19.7502 11.725L13.7002 17.75" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

                <div className="w-full px-5 mt-4">
                    <div className="flex ml-auto text-sm">
                        <p className='mr-1'>Fresh here? </p>
                        <Link className='text-primary underline' to={routes.createAccount}>Hatch an account! 🐣</Link>
                    </div>
                </div>
                </>
            }
            title={" Welcome To Folk Social 👋"}
            description={"Please sign in to catch up on what you've missed!"}
        />
    );
}

export default PublicWrapper(Login)