import { toast } from "react-hot-toast"

export const deleteUser = (id) =>{
    fetch(`https://b612-used-products-resale-server-side-46ra20-main.vercel.app/delete-user/?id=${id}`,
    {
        method:"delete"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deleteCount>0){
            toast.success("User Delete Successfully.")
        }
    })
}