import { useState } from "react";

export const LoginPage = () => {
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    };
    const onFormSubmit = e => {
        e.preventDefault();
        // eslint-disable-next-line
        const user = {
            email: userEmail,
            password: userPassword,
        };
        //dispatch user

    }
    

    return (<>
        <form onSubmit = {onFormSubmit}>
            <label>Email:</label>
      <input       
        type="mail"      
        required
        onChange = {onEmailChange}        
            />
            <label>Password:</label>
      <input       
        type="text"      
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
        onChange = {onPasswordChange}        
            />
            <button type = "submit">Enter</button>
    </form>
    </>)
}