import React, {useState} from 'react'
import arrowIcon from '../images/sort-down-solid.svg'

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

    const MonthDropdown = ({ options, selectedMonth, onChange }) => {
        return (
            <select className='w-4/12 text-xl appearance-none display-none bg-no-repeat pr-10' style={{
                backgroundImage:`url(${arrowIcon})`,
                backgroundPositionX: 'calc(100% - 10px)',
                backgroundPositionY: 'center',
                backgroundSize: '12px 12px',
                transition: 'transform 0.3s ease',
            }} name='month' value={selectedMonth} onChange={onChange}>
                {/* <option value="" disabled>Month</option> */}
                {
                    options.map(option => (
                        <option key={option.label} value={option.label}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
        )
    }

    const YearsDropdown = () => {
        const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

        const handleYearChange = (e) => {
            setSelectedYear(e.target.value)
        }

        const generateYears = () => {
            const currentYear = new Date().getFullYear()
            const startYear = currentYear - 120
            const endYear = currentYear

            const years = []
            for(let year = startYear; year <= endYear; year++){
                years.push(year);
            }
            return years;
        }

        return (
            <select className='w-4/12 text-xl appearance-none display-none bg-no-repeat pr-10' style={{
                backgroundImage:`url(${arrowIcon})`,
                backgroundPositionX: 'calc(100% - 10px)',
                backgroundPositionY: 'center',
                backgroundSize: '12px 12px',
                transition: 'transform 0.3s ease',
            }} value={selectedYear} onChange={handleYearChange}>
                <option value="1" disabled>Year</option>
                {generateYears().map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        )
    }

   

    const DayDropdown = ({ selectedMonth }) => {
        const thirtys = ['April', 'June', 'September', 'November'];
        const february = 'February';
        const days =
            thirtys.includes(selectedMonth) ? 30 : selectedMonth === february ? 28 : 31;

        return (
            <select className='w-4/12 text-xl appearance-none display-none bg-no-repeat pr-10' style={{
                backgroundImage:`url(${arrowIcon})`,
                backgroundPositionX: 'calc(100% - 10px)',
                backgroundPositionY: 'center',
                backgroundSize: '12px 12px',
                transition: 'transform 0.3s ease',
            }} name="day">
                {[...Array(days).keys()].map((_,i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
        );
    };

    const monthOptions = [
        {value: '', label: 'Month', disabled: true},
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
        <div className='mt-16 overflow-scroll w-screen'>
        <div className='bg-slate-700 
         mt-16 mx-64 box-border w-96 object-contain h-96'>
            <form className='' onSubmit={handleSubmit}>
                <h2 className=' w-full h-12 mt-4 mb-4 text-3xl flex justify-center items-center'>Sign up</h2>
                <label for='bday' className='w-full bg-yellow-500 mb-4 text-base'> 
                    When's your birthday?
                    <div name='bday' className='w-full h-11 flex justify-center'>
                            <MonthDropdown
                                options={monthOptions} 
                                selectedMonth={selectedMonth}
                                onChange={handleSelectedMonth}
                            />
                        <DayDropdown selectedMonth={selectedMonth} />
                        <YearsDropdown />
                    </div>
                </label>
                <label for='firstName'>
                    First Name:
                    <input
                        autocomplete="off" 
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
        </div>
    )
}