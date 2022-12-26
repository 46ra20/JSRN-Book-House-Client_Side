import toast from "react-hot-toast";

export const deleteUser = (id) => {
        fetch(` https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/delete-user/?id=${id}`, {
                method: 'DELETE',
                headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
        })
                .then(res => res.json())
                .then(data => {
                       console.log(data);
                       if(data.deleteCount>0){
                        toast('User Delete Successfully.');
                       }
                })
}
