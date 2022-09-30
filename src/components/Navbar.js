import React from 'react';
import propTypes from 'prop-types'


export default function Navbar(props) {
    const removeBorder = ()=>{
        document.querySelectorAll(".radius-bg-50").forEach(item=>{
            item.style.border = "none";
        })
    }

    const removeColorBorder = () =>{
        document.querySelectorAll(".radius-50").forEach(item=>{
            item.style.border = "none";
        })
    }

    const changeTheme = (event)=>{
           
        if(event.target.classList.contains("bg-yellow")){
            document.body.style.backgroundColor = "hsl(52,75%, 60%)";
            removeBorder();
            event.target.style.border = "2px solid white";
        }else if(event.target.classList.contains("bg-red")){
            document.body.style.backgroundColor = "hsl(352,75%, 60%)";
            removeBorder();
            event.target.style.border = "2px solid white";
        } 
        else if(event.target.classList.contains("bg-blue")){
            document.body.style.backgroundColor = "hsl(202,75%, 60%)";
            removeBorder();
            event.target.style.border = "2px solid white";
        }
        else if(event.target.classList.contains("bg-green")){
            document.body.style.backgroundColor = "hsl(152,75%, 60%)";
            removeBorder();
            event.target.style.border = "2px solid white";
        }else if(event.target.classList.contains("bg-darkblue")){
            document.body.style.backgroundColor = "#001534"
            removeBorder();
            event.target.style.border = "2px solid white";
        }       
    }

    const changeColor = (event) => {
        if(event.target.classList.contains("red-color")){
            document.body.style.color = "hsl(352,75%, 60%)";
            removeColorBorder();
            event.target.style.border = "2px solid white";
        }else if(event.target.classList.contains("grey-color")){
            document.body.style.color = "grey";
            removeColorBorder();
            event.target.style.border = "2px solid white";
        } 
        else if(event.target.classList.contains("black-color")){
            document.body.style.color = "black";
            removeColorBorder();
            event.target.style.border = "2px solid white";
        }
        else if(event.target.classList.contains("aquamarine-color")){
            document.body.style.color = "aquamarine";
            removeColorBorder();
            event.target.style.border = "2px solid white";
        }else if(event.target.classList.contains("orange-color")){
            document.body.style.color = "orange"
            removeColorBorder();
            event.target.style.border = "2px solid white";
        }
    }

    return (

        

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.addLink}</a>
                        </li>

                    </ul>
                    {/* Button to change mode */}
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" forHtml="flexSwitchCheckDefault" style={props.mode==="dark"?{color:"white"}:{color:"black"}}>Enable Drak Mode</label>
                    </div>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Change Theme
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel" style={props.mode==="dark"?{color:"white"}:{color:"black"}}>Change Theme</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={props.mode==="dark"?{color:"black"}:{color:"white"}}>
                                    <h4 style={props.mode==="dark"?{color:"black"}:{color:"white"}}>Change Background Color</h4>
                                    <div className='inside-modal'>
                                        <p className='bg-yellow radius-bg-50' onClick={changeTheme}></p>
                                        <p className='bg-red radius-bg-50' onClick={changeTheme}></p>
                                        <p className='bg-green radius-bg-50' onClick={changeTheme}></p>
                                        <p className='bg-blue radius-bg-50' onClick={changeTheme}></p>
                                        <p className='bg-darkblue radius-bg-50' onClick={changeTheme}></p>
                                    </div>
                                    <h4 style={props.mode==="dark"?{color:"black"}:{color:"white"}}>Change Font Color</h4>
                                    <div className='inside-modal'>
                                        <p className='radius-50 red-color' onClick={changeColor}></p>
                                        <p className='radius-50 grey-color' onClick={changeColor}></p>
                                        <p className='radius-50 black-color' onClick={changeColor}></p>
                                        <p className='radius-50 aquamarine-color' onClick={changeColor}></p>
                                        <p className='radius-50 orange-color' onClick={changeColor}></p>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}

Navbar.propTypes = {
    title: propTypes.string,
    addLink: propTypes.string
}

Navbar.defaultProps = {
    title: "Text Utils",
    addLink: "Contact"
}