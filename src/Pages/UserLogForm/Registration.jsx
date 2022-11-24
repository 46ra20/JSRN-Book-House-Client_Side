import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../UserContext/UserContext';

const Registration = () => {
    const { singUpUser } = useContext(ContextProvider);
    const [error, setError] = useState('');
    const [userType, setUserType] = useState('Buying')

    const handleSingUp = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;
        console.log(userEmail, userPassword);

        singUpUser(userEmail, userPassword)
            .then(result => {
                console.log(result.user)
                form.reset();
            })
            .catch(err => setError(err.code))

    }
    console.log(userType);
    return (
        <div>
            <div className='w-96 border rounded shadow p-8 mx-auto my-24'>
                <form onSubmit={handleSingUp}>
                    <label htmlFor='userEmail'>Email:</label>
                    <input id='userEmail' name='userEmail' className='input input-sm w-full input-bordered input-success mb-5' type={'email'} required></input>

                    <label htmlFor="userPassword" className='mt-8 text text-semibold'>Password:</label>
                    <input id='userPassword' name='userPassword' className='input w-full input-bordered input-success mb-3 input-sm' type={'password'} required></input>

                    <div className='flex justify-between mb-5'>
                        <label htmlFor="userType">What do you want?</label>
                        <select name="userType" id="userType" onChange={(e)=> setUserType(e.target.value)} className='select select-sm select-bordered'>
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