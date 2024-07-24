import React from "react"
import "../styles/MyWork.css"
import projectOne from "../assets/photos/proj1.jpg";
import projectTwo from "../assets/photos/proj4.webp";
import projectThree from "../assets/photos/proj2.jpg";


function MyWork() {
    return(
        <div id="mywork" className="mywork-container">
            <div className="mywork">
                <h1>My Works</h1>
                <div className="myprojects">
                    <div className="myproject-work">
                        <img src={projectOne} alt="project-one-image"></img>
                        <div className="card">
                            <p>
                                
                            </p>
                        </div>
                    </div>
                    <div className="myproject-work">
                        <img src={projectTwo} alt="project-two-image"></img>
                        <div className="card">
                            <p>
                               
                            </p>
                        </div>
                    </div>
                    <div className="myproject-work">
                        <img src={projectThree} alt="project-three-image"></img>
                        <div className="card">
                            <p>
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWork;