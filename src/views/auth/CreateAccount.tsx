import { Link, useNavigate } from "react-router-dom";
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
        if (isLoading) return;
        
        const payload = {
            ...credentials,
            dob: handleDateFormat(credentials.dob)
        }

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
                <>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <CustomInput
                                label="Username"
                                name='username'
                                type='text'
                                prefixIcon={<FaUser className='absolute bottom-4 left-4' />}
                                value={credentials.username}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                            />
                        </div>
                        <div className="flex gap-5 mb-4">
                            <CustomInput
                                label="Firstame"
                                name='firstname'
                                type='text'
                                value={credentials.firstname}
                                prefixIcon={<FaUser className='absolute bottom-4 left-4' />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                            />
                            <CustomInput
                                label="Lastname"
                                name='lastname'
                                type='text'
                                value={credentials.lastname}
                                prefixIcon={<FaUser className='absolute bottom-4 left-4' />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <CustomInput
                                label="Email Address"
                                name='email'
                                type='email'
                                value={credentials.email}
                                prefixIcon={<IoMail className='absolute bottom-4 left-4' />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                label="Dob"
                                name='dob'
                                attributes={{
                                    max: "12-31-2025",
                                    placeholder:"dd-MM-YYYY"
                                }}
                                type='date'
                                value={credentials.dob}
                                prefixIcon={<FaCalendar className='absolute bottom-4 left-4' />}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChanges(e.target.name, e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
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
                        <div className='mt-5'>
                            <PrimaryButton 
                                type='submit'
                                disabled={isLoading}>
                                Hatch! 
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className="w-full px-5 mt-4">
                        <div className="flex ml-auto text-sm">
                            <p className='mr-1'>Already in the cool club? </p>
                            <Link className='text-primary underline' to={routes.login}> Log in!</Link>
                        </div>
                    </div>
                    </>
            }
            title={"Welcome To Folk Social"}
            description={"Join us today! Fill in the details below to create your account and start exploring."}
        />
    );
}

export default PublicWrapper(CreateAccount)