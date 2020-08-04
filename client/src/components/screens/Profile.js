import React from 'react'

const Profile = () => {
    return (
        <div style={{maxWidth:"1050px",margin:"0px auto"}}>
            <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin:"18px 0px",
                    borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                        alt="Profile Pic"
                     />
                </div>

                <div>
                    <h4>Chinese Person</h4>
                    <div style={{display:"flex", justifyContent:"space-between",width:"108%"}}>
                        <h6>40 Posts</h6>
                        <h6>40 Followers</h6>
                        <h6>40 Following</h6>
                    </div>
                </div>
            </div>
        
            <div className="gallery">
                <img
                    className="item" 
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                    alt="Profile Pic"
                />
                <img
                    className="item" 
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                    alt="Profile Pic"
                />
                <img
                    className="item" 
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                    alt="Profile Pic"
                />
                <img
                    className="item" 
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                    alt="Profile Pic"
                />
                <img
                    className="item" 
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                    alt="Profile Pic"
                />
                <img
                    className="item" 
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                    alt="Profile Pic"
                />
            </div>
        </div>
    )
}

export default Profile