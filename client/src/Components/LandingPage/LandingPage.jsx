import React from "react";
import "./LandingPage.css"
import {Link} from "react-router-dom"




const LandingPage = () => {
    return (
        <div className="LandingPage">
          

            <div className="tittle" >
                <img src="https://fontmeme.com/permalink/230221/dc42b73c9482c44a56c46293c38b08eb.png" alt="welcome to my pokemon's application" />
            </div>
            <button className="buttonImage" >
            <Link to = "/home"><img src="https://fontmeme.com/permalink/230221/5421cc0bd4301165f3247838ceb71ee9.png" alt="" />
            </Link></button>

           

          
        </div>

    )
}

export default LandingPage;