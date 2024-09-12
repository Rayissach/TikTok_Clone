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

   

    const DayDropdown = ({ selectedMonth }) => {
        const thirtys = ['April', 'June', 'September', 'November']
        const february = 'February'
        const days = 
        thirtys.includes(selectedMonth) ? 30 : selectedMonth === february ? 28 : 31;

        return (
            <select>
                {[...Array(days).keys()].map(i => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
            </select>
        )
    }

    const monthOptions = [
        {value: 'month', label: 'January'},
        {value: 'month', label: 'February'},
        {value: 'month', label: 'March'},
        {value: 'month', label: 'April'},
        {value: 'month', label: 'May'},
        {value: 'month', label: 'June'},
        {value: 'month', label: 'July'},
        {value: 'month', label: 'August'},
        {value: 'month', label: 'September'},
        {value: 'month', label: 'October'},
        {value: 'month', label: 'November'},
        {value: 'month', label: 'December'},
    ]

    const [selectedMonth, setSelectedMonth] = useState(monthOptions[0].label)

    const handleSelectedMonth = (e) => {
        setSelectedMonth(e.target.value)
    }
    
    return (
        <div className='h-80 border m-5 bg-slate-700 
        flex justify-center items-center w-9/12
         grid-rows-6 grid-flow-col gap-4'>
            <form className='' onSubmit={handleSubmit}>
                <label >
                    When's your birthday?
                    <MonthDropdown options={monthOptions} />
                    <DayDropdown selectedMonths={selectedMonth} />
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