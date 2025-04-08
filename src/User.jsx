import { use } from "react"

export default function Users({fetchUsers}){

    const users = use(fetchUsers);

    return(
       <div className="cart">
         <h3>Users:{users.length} </h3>
       </div>
    )
}