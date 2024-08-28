import React, {useState} from 'react'

export const Signup = () => {
    const [data, setData] = {
        'email': '',
        'firstName' : '',
        'lastName' : '',
        'username' : '',
        'password' : ''
    }
    
    return (
        <div>
            <form >
                <label for='firstName'>
                    First Name:
                    <input
                        name='firstName'
                        value={data.firstName}
                        onChange={}
                        onSubmit={}
                    />
                </label>
                <label for='lastName'>
                    Last Name:
                    <input 
                        name='lastName'
                        value={data.lastName}
                        onChange={}
                        onSubmit={}
                    />
                </label>
                <label for='email'>
                    Email:
                    <input 
                        name='email'
                        value={data.email}
                        onChange={}
                        onSubmit={}
                    />
                </label>
                <label for='username'>
                    Username:
                    <input 
                        name='username'
                        value={data.username}
                        onChange={}
                        onSubmit={}
                    />
                </label>
                <label for='password'>
                    Password:
                    <input 
                        name='password'
                        value={data.password}
                        onChange={}
                        onSubmit={}
                    />
                </label>
            </form>
        </div>
    )
}