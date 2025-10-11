 import UserCard from "./UserCard";

function User()
{
    return(
        <>
   <UserCard name="Durvankur" age={20} isOnline={true} />
   <UserCard name="Aditya" age={20} isOnline={false} />
        </>
    )
}
export default User;