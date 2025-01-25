import React, { ReactNode } from "react"

const EmptyContent: React.FC<{title: string, message: string, children?: ReactNode}> = (
    {title, message, children}
)=> {

    return (
        <div className="my-auto h-fit text-center">
            <h3 className="text-2xl mb-1 font-bold dark:text-white">{title}</h3>
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-200">{message}</p>
            { children }
        </div>
    )
}

export default EmptyContent;