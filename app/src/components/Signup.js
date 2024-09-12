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

    const MonthDropdown = ({ options }) => {
        return (
            <select>
                {options.filter(option => option.value === 'month' ).map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        )
    }

    const optionsData = [
        {value: 'month', label: 'January'},
        {value: 'month', label: 'February'},
        {value: 'day', label: '1'},
        {value: 'day', label: '2'},
    ]
    
    return (
        <div className='h-80 border m-5 bg-slate-700 
        flex justify-center items-center w-9/12
         grid-rows-6 grid-flow-col gap-4'>
            <form className='' onSubmit={handleSubmit}>
                <label >
                    When's your birthday?
                    <MonthDropdown options={optionsData} />
                </label>
                <label for='firstName'>
                    First Name:
                    <input
                        className='col-span-5'
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