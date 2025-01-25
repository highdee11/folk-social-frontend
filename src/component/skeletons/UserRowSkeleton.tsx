
const UserRowSkeleton = ()=> {

    return ( 
        <div className=" flex justify-between items-center border-b-[0.5px] border-b-lightFaintGray dark:border-b-darkFaintGray pb-3">
            <div className="flex justify-start items-center gap-3">
                <div className="w-[49px] h-[49px] rounded-full bg-lightFaintGray dark:bg-darkFaintGray"></div>
                <div>
                    <p className="w-[200px] h-[7px] bg-lightFaintGray dark:bg-darkFaintGray my-2"></p>
                    <p className="w-[170px] h-[5px] bg-lightFaintGray dark:bg-darkFaintGray my-1 "></p>
                    <p className="w-[150px] h-[5px] bg-lightFaintGray dark:bg-darkFaintGray my-1"></p>
                </div>
            </div>

            <div className="flex items-center h-5">
                <button className="px-5 py-2 w-[90px] h-[32px] text-xs text-white bg-lightFaintGray dark:bg-darkFaintGray rounded-[8px] text-nowrap"></button>
            </div>
        </div>
    )
}

export default UserRowSkeleton;