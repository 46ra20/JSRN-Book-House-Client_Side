import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='w-96 border rounded shadow p-8 mx-auto my-24'>
                <form>
                    <label htmlFor='userEmail'>Email:</label>
                    <input id='userEmail' className='input input-sm w-full input-bordered input-success mb-5' type={'email'} required></input>

                    <label htmlFor="userPassword" className='mt-8 text text-semibold'>Password:</label>
                    <input id='userPassword' className='input input-sm w-full input-bordered input-success mb-8 input-sm' type={'password'} required></input>
                    <input type="submit" className='w-full btn btn-outline btn-success' />
                </form>

            </div>
        </div>
    );
};

export default Login;