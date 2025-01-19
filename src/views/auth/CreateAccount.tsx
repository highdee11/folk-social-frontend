import { useNavigate } from "react-router-dom";
import AuthPageWrapper from "./AuthPageWrapper";
import PublicWrapper from "./PublicWrapper"
import { useState, FormEvent, ChangeEvent } from "react";
import CustomInput from "../../component/forms/CustomInput";
import CustomPasswordInput from "../../component/forms/CustomPasswordInput";
import PrimaryButton from "../../component/shared/PrimaryButton";
import useAuth from "../../core/hooks/auth/useAuth";
import { SignUpRequest } from "../../core/interfaces/AuthInterface";
import { routes } from '../../core/data/route';
import Error from '../../component/shared/Error';
import { IoMail } from "react-icons/io5";

import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


const CreateAccount = () => {

    const { SignUp, signUpData, isLoading, error } = useAuth()
    const navigate = useNavigate();



    const [credentials, setCredentails] = useState<SignUpRequest>(signUpData)
    const handleChanges = (field: string, value: any) => setCredentails({ ...credentials, [field]: value })

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const payload = {
            ...credentials,
            dob: handleDateFormat(credentials.dob)
        }
        if (isLoading) return;
        SignUp(payload)
            .then(() => {
                navigate(routes.login)
            })
    }
    const handleDateFormat = (value: any)=>{
        
        const [year, month, day] = value.split('-');
        // Format the date as MM/DD/YYYY
        return  `${day}-${month}-${year}`;

    }

    return (
        <AuthPageWrapper
            form={
                <form onSubmit={submit}>
                    <div className="mb-8">
                        <CustomInput
                            label="Username"
                            name='username'
                            type='text'
                            prefixIcon={<FaUser className='absolute bottom-4 left-4' />}
                            value={credentials.username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="flex gap-5">
                        <CustomInput
                            label="first name"
                            name='firstname'
                            type='text'
                            value={credentials.firstname}
                            prefixIcon={<FaUser className='absolute bottom-4 left-4' />}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                        />
                        <CustomInput
                            label="last name"
                            name='lastname'
                            type='text'
                            value={credentials.username}
                            prefixIcon={<FaUser className='absolute bottom-4 left-4' />}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-8">
                        <CustomInput
                            label="Email Address"
                            name='email'
                            type='email'
                            value={credentials.email}
                            prefixIcon={<IoMail className='absolute bottom-4 left-4' />}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="mb-8">
                        <CustomInput
                            label="Dob"
                            name='dob'
                            attributes={{
                                max: "12-31-2030",
                                placeholder:"dd-MM-YYYY"
                            }}
                            type='date'
                            value={credentials.dob}
                            prefixIcon={<FaCalendar className='absolute bottom-4 left-4' />}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <CustomPasswordInput
                            label="Password"
                            name='password'
                            type='password'
                            attributes={{
                                autocomplete: true,
                            }}
                            value={credentials.password}
                            prefixIcon={<RiLockPasswordFill className='absolute bottom-4 left-4' />}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="h-10">
                        <Error message={error} />
                    </div>
                    <div className='mt-10'>
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

            }
            title={"Welcome To Folk Social"}
            description={"Join us today! Fill in the details below to create your account and start exploring."}
        />
    );
}

export default PublicWrapper(CreateAccount)