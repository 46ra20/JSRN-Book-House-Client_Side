

// get accessToken from server

export const accessToken = (user) =>{
    const userData = {"email":user.email, "uid":user.uid}
    fetch('https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/jwt',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res=> res.json())
    .then(data => {
        localStorage.setItem('accessToken',data.token);
    })

}