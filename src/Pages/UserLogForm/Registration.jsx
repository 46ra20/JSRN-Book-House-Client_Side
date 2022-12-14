import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../UserContext/UserContext';
import { accessToken } from '../../Utility/Utility';

const Registration = () => {
    const { singUpUser } = useContext(ContextProvider);
    const [error, setError] = useState('');
    const [userType, setUserType] = useState('Buying')
    
    //navigate user after successfully create user
    const navigate = useNavigate();

    const handleSingUp = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;

        
        singUpUser(userEmail, userPassword)
        .then((result) => {
                const userData = {"userName": userName, "userEmail": userEmail, "role": userType};
                saveUserInDB(userData);
                form.reset();
                navigate('/')
                accessToken(result.user)
            })
            .catch(err => setError(err.code))

    }

    const saveUserInDB = (user) =>{
        fetch('https://b612-used-products-resale-server-side-46ra20-main.vercel.app/saveUser',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return (
        <div>
            <div className='w-96 border rounded shadow p-8 mx-auto my-24'>
                <form onSubmit={handleSingUp}>
                    <label htmlFor="userName" className='block pb-1 font-semibold'>Your Name:</label>
                    <input type="text" name='userName' id='userName' className='input w-full input-sm input-bordered input-success mb-3' placeholder='Ex: Md Rakib Bhuiyan' />
                    <label htmlFor='userEmail' className='block pb-1 font-semibold'>Email:</label>
                    <input id='userEmail' name='userEmail' className='input input-sm w-full input-bordered input-success mb-3' type={'email'} placeholder='ex@ex.com' required></input>

                    <label htmlFor="userPassword" className='block pb-1 text font-semibold'>Password:</label>
                    <input id='userPassword' name='userPassword' className='input w-full input-bordered input-success mb-3 input-sm' type={'password'} placeholder='######' required></input>

                    <div className='mb-5'>
                        <label htmlFor="userType" className='font-semibold w-full'>What do you want?</label>
                        <select name="userType" id="userType" onChange={(e) => setUserType(e.target.value)} className='select select-sm select-bordered w-full'>
                            <option>Buying</option>
                            <option>Selling</option>
                        </select>
                    </div>

                    {
                        error && <p className='text-red-600'>{error}</p>
                    }
                    <p className='mb-3'>Already have an account? Please <Link to={'/login'} className='underline text-blue-600'>Login..</Link></p>
                    <button className='w-full btn btn-outline btn-success'>Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;