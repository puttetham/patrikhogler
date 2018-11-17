import React, { Component } from 'react';
import './project.css'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import Danne from '../assets/danne.jpg';
import Amsterdam from '../assets/test.png';
import PatrikHogler3 from '../assets/putte2.png';
import Goat from '../assets/goat.jpg';
import Footer from './footer';

class Project extends Component {
    constructor(props) {
        super(props); {
            this.state = { activeTab: 0 }
        }
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card className="card-container" shadow={0} style={{width: '412px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + Danne + ') center / cover'}}>Dantrick</CardTitle>
                    <CardText>
                    Built in React as Frontend and Wordpress as Backend to update the content. 
                    Master thesis from my time in KYH Stockholm.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/puttetham/dantrick" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                        <a href="https://puttetham.github.io/dantrick/" rel="noopener noreferrer" target="_blank"><Button colored>Livedemo</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 {/* Project 2 */}
                <Card className="card-container" shadow={0} style={{width: '412px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url('+ Amsterdam +') center / cover'}}>Patrik Hogler - Portfolio V3.0</CardTitle>
                    <CardText>
                        My own portfolio site. Built in React.js with Material Design.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/puttetham/patrikhogler" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                        <a href="https://puttetham.github.io/patrikhogler/" rel="noopener noreferrer" target="_blank"><Button colored>Livedemo</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
                
            )
        } else if (this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card className="card-container" shadow={0} style={{width: '412px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url('+ Goat +') center / cover'}}>The Happy Goat</CardTitle>
                    <CardText>
                    A basic dynamic bed & breakfast site there you could read about the business,make a room reservation or book an activity. Admin section to update the content and handle the bookings.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/puttetham/Den-Glada-Geten" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 {/* Project 2 */}
                <Card className="card-container" shadow={0} style={{width: '412px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + PatrikHogler3 + ') center / cover'}}>Patrik Hogler - Portfolio V1.0</CardTitle>
                    <CardText>
                        My first ever made dynamic portfolio site. Started of as a school project. Built in HTML/CSS, JavaScript, jQuery and PHP with an admin section to update the content on the site.     
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/puttetham/putteprojekt" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 {/* vetly */}
                 <Card className="card-container" shadow={0} style={{width: '412px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static1.squarespace.com/static/59decda418b27ddf3baeb5ba/t/59df0df5197aeac813c065d6/1507790325363/Black.jpg?format=1500w) center / cover'}}>Vetly</CardTitle>
                    <CardText>
                        A team school project were we built a veteinary portal, there you could read about the business and make a booking with a vet through a calender. Built with HTML/CSS, JavaScript and very basic react.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/puttetham/Vetly" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 2){
            return (
                <div className="projects-grid">
                    {/* Patrik Hogler - Wordpress */}
                    <Card className="card-container" shadow={0} style={{width: '412px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + PatrikHogler3 + ') center / cover'}}>Patrik Hogler - Portfolio V2.0</CardTitle>
                    <CardText>
                        I took my first portfolio site from previous project and converted it into a WordPress theme.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/puttetham/Patrik-Hogler-WP-theme" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>JS & PHP</Tab>
                    <Tab>Wordpress</Tab>
                </Tabs>

                <Grid className="grid-container">
                    <Cell col={12}>
                        <div className="content">
                            <h1 className ="project-head">Have a look of my <span className="frontend">Projects</span></h1>
                            <hr className="project-linebreak"></hr>
                            <p className="project-text">Here you can see some projects I have worked with. Most of them are from my Front End 
                               education. Navigate through the tab to see which languages ​​the projects are written in.
                               I'm learning everyday and i will keep continue to post projects as soon as they are done.
                            </p>
                          {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            
                <Footer />
            </div>
        )
    }
}

export default Project;