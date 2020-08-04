import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';

const CreatePost = () => {
    const history = useHistory();
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");
    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": "Bearer "+localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title:title,
                    body:body,
                    pic:url
                })
            }).then(res=> res.json())
            .then(data => {
                if(data.error)
                {
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }
                else
                {
                    M.toast({html: "Created Post Successfully",classes:"#43a047 green darken-3"})
                    history.push('/')
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },[url])

    const postDetails = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name","sameerpatel")
        fetch("https://api.cloudinary.com/v1_1/sameerpatel/image/upload",{
            method:"POST",
            body: data,
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url)
        })
        .catch(err=> {
            console.log(err)
        }) 
    }

    return (
        <div className="card input-filed"
            style={{
                margin:"50px auto",
                maxWidth: "500px",
                padding: "20px",
                textAlign: "center"
            }}>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-2">
                    <span>Upload Image</span>
                    <input 
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])} 
                    />
                </div>

                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>

            <button 
                className="btn waves-effect waves-light #64b5f6 blue darken-2" 
                onClick={()=>postDetails()}>
                Create Post
            </button>

        </div>
    )
}

export default CreatePost
