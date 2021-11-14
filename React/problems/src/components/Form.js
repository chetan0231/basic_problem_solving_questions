import React,{useState} from 'react'
import UserData from './UserData'

export default function Form() {
    const [data, setData] = useState({
        fullName : '',
        email : '',
        address : '',
        mobile : ''
    })
    const [flag,setFlag] = useState(false)

    const handleSubmit = (e) => {
        setData({...data,[e.target.name] : e.target.value})
    }

    const handleChange = (e) => {
        e.preventDefault()
        setFlag(true)
        
    }
   
    console.log(data,'data')
    return (
        <div>
           
            <form onSubmit={handleChange}>
                <div style={{float : 'left',marginRight : '10px'}}>
                    <label> Full Name : </label>
                    <input type="text" name="fullName" value={data.fullName} onChange={handleSubmit}></input>
                </div>
                <div style={{float : 'left',marginRight : '10px'}}>
                    <label>Email ID : </label>
                    <input type="email" name="email" value={data.email} onChange={handleSubmit}></input>
                </div>
                <div style={{float : 'left',marginRight : '10px'}}>
                    <label>Address : </label>
                    <input type="text" name="address" value={data.address} onChange={handleSubmit}></input>
                </div>
                <div style={{float : 'left',marginRight : '10px'}}>
                    <label>Mobile: </label>
                    <input type="tel" name="mobile" value={data.mobile} onChange={handleSubmit}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
            {flag && <div>
                <UserData data={data}/>
            </div>}
        </div>
    )
}
