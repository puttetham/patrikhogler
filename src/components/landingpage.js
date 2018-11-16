import React, { Component } from 'react';
import './landingpage.css';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import Amsterdam from '../assets/test.png'


class Landing extends Component {
    render(){
        return(
            <div className="landingcontainer">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <h2 className="banner-text">Hello<span className="frontend">.</span> I'm a <span className="frontend">Frontend</span> Developer</h2>
                        <p className="banner-code">I like to code and design stuff</p>
                    </Cell>             
                </Grid>

                <Grid className="landing-grid2">
                    <Cell col={6} id="left-cell">
                        <img 
                        src={Amsterdam} 
                        alt="Patrik Hogler - Front End Developer"
                        className="avatar-img"
                        />
                    </Cell>
                    
                    <Cell col={6} id="right-cell">
                        <h1 className="cellText2">PATRIK HOGLER</h1>
                        <p className="cellText">My name is Patrik Hogler and I'm 30 years old. Based in Stockholm, Sweden. Recently in June, I took my Front End Developer degree at KYH Stockholm, which was a two year profession education. During my study, i have learned about HTML, CSS, JavaScript, CMS (Wordpress) and UX/UI. I have also completed a 5 month long internship at a company, where I received and contributied my developed skills. After graduating, I jumped on an education where I learned a little more about SEO. Since I am newly graduated and very fresh in the game, I am looking for a job. I still see myself as very new in web development but am very driven and curious to learn even more.</p>
                        <p className="cellText3">
                        <span className="html">HTML/CSS</span> -
                        <span className="bootstrap"> Bootstrap</span> -
                        <span className="js"> JavaScript</span> -
                        <span className="wordpress">WordPress</span> -
                        <span className="react">ReactJs</span>
                        </p>
                    </Cell>
                </Grid>
                       
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

export default Landing;