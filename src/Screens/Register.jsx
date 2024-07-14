import React, { useContext, useState } from 'react'
import { validatePassword, validateEmail, validateName, validatePhone, validateAddress } from "../constants/Validation";
import { AppContext } from '../App';
import './css/register.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const { data, setData } = useContext(AppContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        password: "",
        phone: ""
    });

    const [isError, setError] = useState({
        name: null,
        email: null,
        phone: null,
        address: null,
        password: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        let valueRes;
        if (name == 'name') {
            valueRes = validateName(value);
        }
        if (name == 'email') {
            valueRes = validateEmail(value);
        }
        if (name == 'phone') {
            valueRes = validatePhone(value);
        }
        if (name == 'address') {
            valueRes = validateAddress(value);
        }
        if (name == 'password') {
            valueRes = validatePassword(value);
        }
        setError({
            ...isError,
            [name]: !valueRes
        });
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        const validName = !validateName(form.name);
        const validEmail = !validateEmail(form.email);
        const validAddress = !validateAddress(form.address);
        const validPhone = !validatePhone(form.phone);
        const validPassword = !validatePassword(form.password);
    
        if (validEmail || validPassword || validName || validAddress || validPhone ) {
            setError({
                ...isError,
                ["email"]: validEmail,
                ["password"]: validPassword,
                ["name"]: validName,
                ["phone"]: validPhone,
                ["address"]: validAddress,
               
            });
            return
        }

        setData(prevData => [...prevData, form]);

        console.log(data);

        navigate('/')



        
    }



    return (
        <div className='body'>
               <div  className='container'>
       
       <form  method='POST' action='' onSubmit={handleSubmit}>
          
                    <div className="input">
                        <label htmlFor="name">Name :</label>
                        <input type="text" value={form.name} name="name" id="name" onChange={handleInputChange} onBlur={handleInputBlur} />
                        {isError.name == true ?
                            <div className="text-danger" >
                                Name is required.
                            </div> : null}
                    </div>
          
                    <div className="input">
                        <label htmlFor="email">Email :</label>
                        <input type="email" value={form.email} name="email" id="email" onChange={handleInputChange} onBlur={handleInputBlur} />
                        {isError.email == true ?
                            <div className="text-danger" >
                                Email is required.
                            </div> : null}
                    </div>
          
                    <div className="input">
                        <label htmlFor="address">Address :</label>
                        <input type="text" value={form.address} name="address" id="address" onChange={handleInputChange} onBlur={handleInputBlur} />
                        {isError.address == true ?
                            <div className="text-danger" >
                                Address is required.
                            </div> : null}
                    </div>
          
                    <div className="input">
                        <label htmlFor="phone">Phone :</label>
                        <input type="phone" value={form.phone} name="phone" id="phone" onChange={handleInputChange} onBlur={handleInputBlur} />
                        {isError.phone == true ?
                            <div className="text-danger" >
                                Phone is required.
                            </div> : null}
                    </div>
          
                    <div className="input">
                        <label htmlFor="password">Password :</label>
                        <input type="text" value={form.password} name="password" id="npasswordame" onChange={handleInputChange} onBlur={handleInputBlur} />
                        {isError.password == true ?
                            <div className="text-danger" >
                                Password is required.
                            </div> : null}
                    </div>
          
          <button>Register</button>
          <button onClick={()=>{
             navigate('/')
          }}>HomePage</button>
      </form>
     </div>
        </div>
    )


}

export default Register