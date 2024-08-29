import React, {useState} from 'react'

export const Signup = () => {
    const [data, setData] = useState({
        'email': '',
        'firstName' : '',
        'lastName' : '',
        'username' : '',
        'password' : ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({...data, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }
    
    return (
        <div className='userCred'>
            <form onSubmit={handleSubmit}>
                <label for='firstName'>
                    First Name:
                    <input
                        name='firstName'
                        value={data.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label for='lastName'>
                    Last Name:
                    <input 
                        name='lastName'
                        value={data.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label for='email'>
                    Email:
                    <input 
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                    />
                </label>
                <label for='username'>
                    Username:
                    <input 
                        name='username'
                        value={data.username}
                        onChange={handleChange}
                    />
                </label>
                <label for='password'>
                    Password:
                    <input 
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}