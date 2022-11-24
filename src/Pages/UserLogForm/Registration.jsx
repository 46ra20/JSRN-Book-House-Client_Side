import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../../UserContext/UserContext';

const Registration = () => {
    const {singUpUser} = useContext(ContextProvider);

    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;
        console.log(userEmail, userPassword);

        singUpUser(userEmail, userPassword)
        .then(result => console.log(result.user))
        .catch(err => console.log(err))

    }

    return (
        <div>
            <div className='w-96 border rounded shadow p-8 mx-auto my-24'>
                <form onSubmit={handleSingUp}>
                    <label htmlFor='userEmail'>Email:</label>
                    <input id='userEmail' name='userEmail' className='input input-sm w-full input-bordered input-success mb-5' type={'email'} required></input>

                    <label htmlFor="userPassword" className='mt-8 text text-semibold'>Password:</label>
                    <input id='userPassword' name='userPassword' className='input input-sm w-full input-bordered input-success mb-8 input-sm' type={'password'} required></input>
                    <button className='w-full btn btn-outline btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;