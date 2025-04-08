import { use } from "react"
import Friend from "./Friend";
export default function Friends({friendsPromise}){

    const friends=use(friendsPromise);
  return(
    <div className="cart">
        <h3>Friends:{friends.length}</h3>
        {
            friends.map(friend=> <Friend  friend={friend}></Friend>)

        }
    </div>
  )

}