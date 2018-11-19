import React, { Component } from 'react';
import './aboutme.css';
import { Grid, Cell} from 'react-mdl';
import PatrikContact from '../assets/contact-patrik.png'
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import Footer from './footer';
import PatrikHogler3 from '../assets/putte-contact.png';


class About extends Component {
    render(){
        return(
            <div lassName="landingcontainer">
                <Grid lassName="landing-grid2">
                <Cell col={6} id="left-cell">
                    <div className="left-about" style={{textAlign: 'center'}}>
                        <img src={PatrikContact} 
                             alt="Patrik Hogler"
                             style={{height: '320px', display: 'block', margin: 'auto',  border:'5px solid #191919'}}
                             />
                        
                        <h2 className="about-head">Patrik Hogler</h2>
                        <h4 className="about-head2">Front End Developer</h4>
                        <hr className="project-linebreak"></hr>
                        <p className="about-text">My name is Patrik Hogler and I'm 30 years old. Based in Stockholm, Sweden. 
                                                  Recently in June, I took my Front End Developer degree at KYH Stockholm, 
                                                  which was a two year profession education. During my study i have learned about 
                                                  HTML, CSS, JavaScript, PHP, CMS (Wordpress) and UX/UI. I have also completed a 
                                                  five month long internship at a company, where I received and contributied my development skills. 
                                                  <br></br>
                                                  <br></br>
                                                  After graduating, I jumped on an SEO/SEM course which made me get a deeper understanding for search engine optimization and digital marketing.  
                                                  Since I am newly graduated and very fresh in the game, I am looking for a job. 
                                                  I still see myself as new into web development but i am very driven, ambitious and curious 
                                                  to learn even more.</p>

                        <Skills />
                    </div>
                </Cell>

                <Cell col={6} id="right-cell">
                    <div className="right-about" >
                    <h2 className="about-head">Education</h2>
                    <Education 
                        startYear={2016}
                        endYear={2018}
                        schoolName={'KYH Stockholm'}
                        schoolDescription={'University Vocational Education. Front End Developer program. The courses was HTML/CSS, JavaScript, Backend & Dynamic web (PHP), Graphical tools for Interface design, User Experience design, Working methodology (scrum), 5 month long internship, and Master thesis.'}
                    />

                    <Education 
                        startYear={2005}
                        endYear={2008}
                        schoolName={'Huddinge Gymnasium'}
                        schoolDescription={'High School - Media program'}
                    />

                 

                    <h2 className="about-head">Experience</h2>
                    <CollapsibleComponent>
                    <Experience 
                        startYear={2018}
                        endYear={''}
                        jobName={'Stadium'}
                        jobDescription={'Since I have big interest in sports and training, I started to work at Stadium with sales. '}
                    />
                     <Experience 
                        startYear={2017}
                        endYear={2018}
                        jobName={'Studentmedia'}
                        jobDescription={'I made my internship at Studentmedia. Studentmedia is a niche media house that provides media on the Internet and print for a few very specific audiences: students and graduates. I worked with HTML5, CSS and basic Javascript programming, but also with media production and design work in Figma.'}
                    />

                    
                    <CollapsibleHead className="additionalClassForHead">EXPAND ></CollapsibleHead>
                    <CollapsibleContent className="additionalClassForContent">
                     <Experience 
                        startYear={2015}
                        endYear={2018}
                        jobName={'Svea Ekonomi AB'}
                        jobDescription={'My tasks have been sales of currency, international money transfer, simple banking services and advising customers about currency and knowledge about different cash cultures. Administration, statistics and reconciliation also belong to the role.'}
                    />
                     <Experience 
                        startYear={2013}
                        endYear={2014}
                        jobName={'Samsung Electronic Nordics'}
                        jobDescription={'Consultant for Samsung, where i worked at Samsung Shop in Shop at big electronic department store like Elgiganten & Media Markt.'}
                    />
                    <Experience 
                        startYear={2012}
                        endYear={2013}
                        jobName={'Teknikmagasinet'}
                        jobDescription={'Sales'}
                    />

                    <Experience 
                        startYear={2010}
                        endYear={2012}
                        jobName={'Forex Bank'}
                        jobDescription={'My tasks have been sales of currency, international money transfer, simple banking services and advising customers about currency and knowledge about different cash cultures. Administration, statistics and reconciliation also belong to the role.'}
                    />
                    </CollapsibleContent>
                 </CollapsibleComponent>
                 </div>
                </Cell>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default About;