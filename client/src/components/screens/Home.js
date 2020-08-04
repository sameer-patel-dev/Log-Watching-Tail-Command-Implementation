import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Sameer</h5>
                <div className="card-image">
                    <img 
                        src="https://images.unsplash.com/photo-1544137105-295758788545?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                        alt="Profile"
                   />
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>This is an Amazing Post</p>
                    <input 
                        type="text"
                        placeholder="Add a Comment" 
                    />
                </div>
            </div>

            <div className="card home-card">
                <h5>Sameer</h5>
                <div className="card-image">
                    <img 
                        src="https://images.unsplash.com/photo-1544137105-295758788545?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                        alt="Profile"
                   />
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>This is an Amazing Post</p>
                    <input 
                        type="text"
                        placeholder="Add a Comment" 
                    />
                </div>
            </div>

            

            
        </div>
    )
}

export default Home