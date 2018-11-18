import React, { Component } from 'react';
import './landingpage.css';
import { Grid, Cell } from 'react-mdl';
import Amsterdam from '../assets/test.png'
import Footer from './footer';


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
                        <hr className="project-linebreak"></hr>
                        <p className="cellText">My name is Patrik Hogler and I'm 30 years old. Based in Stockholm, Sweden. 
                                                  Recently in June, I took my Front End Developer degree at KYH Stockholm.
                                                  <br></br>
                                                  <br></br>
                                                  After graduating, I jumped on an SEO/SEM course which made me get a deeper understanding for search engine optimization and digital marketing.  
                                                  Since I am newly graduated and fresh in the game, I am looking for a job. 
                                                  I still see myself as new into web development but i am very driven, ambitious and curious 
                                                  to learn even more.</p>
                        {/* <p className="cellText3">
                        <span className="html">HTML/CSS</span> -
                        <span className="bootstrap"> Bootstrap</span> -
                        <span className="js"> JavaScript</span> -
                        <span className="wordpress">WordPress</span> -
                        <span className="react">ReactJs</span>
                        </p> */}
                    </Cell>
                </Grid>
                       
               <Footer />
            </div>
        )
    }
}

export default Landing;