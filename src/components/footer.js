import React, { Component } from 'react';
import './landingpage.css';
import { Grid, Cell } from 'react-mdl';


class Footer extends Component {
    render(){
        return(
            <div className="landingcontainer">
                <Grid className="landing-grid3">
                    <Cell col={12}>
                            <div className="social-links">            
                                <a href="https://se.linkedin.com/in/patrik-hogler-1377b0129" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/puttetham" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.facebook.com/people/Patrik-Thammavit/753827673" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/puttetham/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </Cell>
                    </Grid> 

            </div>
)
}
}

export default Footer;