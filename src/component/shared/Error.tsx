
const Error = ({ message }: {message: string|null})=> {

    return (
        message && (
            <div className="">
                <p className='text-xs text-red-700'>{ message }</p>
            </div>
        )
    );
}

export default Error