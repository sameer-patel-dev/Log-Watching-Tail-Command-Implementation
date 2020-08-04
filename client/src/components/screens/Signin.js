import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signin = () => {
    const history = useHistory();
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const postData = () =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html: "Invalid Email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                password:password,
                email:email
            })
        }).then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.error)
            {
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else
            {
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                M.toast({html: "Signed In Successfully",classes:"#43a047 green darken-3"})
                history.push('/')
            }
        }).catch(error => {
            console.log(error)
        })
    }

    return (
      <div className="mycard">
        <div className="card auth-card input-field">
            <h2>Instgaram</h2>
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button 
                className="btn waves-effect waves-light #64b5f6 blue darken-2"
                onClick={() => postData()}>
                Login
            </button>

            <h6>
                <Link to="/signup">Dont have an account? Sign up here</Link>
            </h6>

        </div>
      </div>
    );
}

export default Signin