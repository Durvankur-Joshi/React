function UserCard(props){
     

    return(
        <> 


        <div className=" flex justify-center items-center mt-20  ">
         <div className="  h-40 w-100 bg-yellow-50 text-center border-3 rounded-2xl shadow-2xl shadow-black">
            <div className="mt-9 text-xl flex flex-col gap-3 ">
                <p>Name: {props.name}</p>
                <p>Age : {props.age}</p>
                <p>Active : {props.isOnline ? "Online" : "Offline"} </p>
            </div>
         </div>
        </div>

        </>
    )

}
export default UserCard;