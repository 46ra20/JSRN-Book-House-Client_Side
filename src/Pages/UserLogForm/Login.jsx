import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../UserContext/UserContext';

const Login = () => {
    const {loginWithEmailAndPassword,loginWithGoogle}  = useContext(ContextProvider);
    const [error, setError] = useState('');
    //navigate user after login
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from || '/';

    const handleLogin = (event) =>{
        event.preventDefault();
        setError('')
        const form = event.target;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;
        loginWithEmailAndPassword(userEmail, userPassword)
        .then(result => {
            console.log(result)
        })
        .catch(err=> setError(err.code))
    }

    const handleGoogleLogIn = () =>{
        loginWithGoogle()
        .then(result => console.log(result.user))
        .then(err => setError(err.code))
    }

    return (
        <div>
            <div className='w-96 border rounded shadow p-8 mx-auto my-24'>
                <div className='divide'>
                    <h2 className='divide text-2xl text-center font-semibold'>Login</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <label className='font-semibold w-full' htmlFor='userEmail'>Email:</label>
                    <input id='userEmail' name='userEmail' className='input input-sm w-full input-bordered input-success mb-5' type={'email'} required></input>

                    <label  htmlFor="userPassword" className='mt-8 font-semibold'>Password:</label>
                    <input id='userPassword' name='userPassword' className='input w-full input-bordered input-success mb-8 input-sm' type={'password'} required></input>
                    {
                        error && <p className='text-red-600'>{error}</p>
                    }
                    <p className='mb-3'>No account? Please <Link to={'/registration'}  className='underline text-blue-600 mb-3'>Create</Link> One..</p>
                    <input type="submit" className='w-full btn btn-outline btn-success' value={'Login'} />
                </form>
                <p className='divider'>Or</p>
                <button className='btn btn-outline w-full btn-success' onClick={handleGoogleLogIn}>Continue With Google</button>

            </div>
        </div>
    );
};

export default Login;