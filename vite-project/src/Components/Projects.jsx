import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Projects = () => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="images/Bellabheka websiete.png" />
                <Card.Body>
                    <Card.Title>Bellabheka Website</Card.Title>
                    <Card.Text>
                    A website for a decor and catering business based in durban that caters for weddings, birthdays and all kinds of events.
                    </Card.Text>
                    <Button variant="primary" href="https://bellabheksa-website.netlify.app/">Website</Button>{' '}
                    <Button variant="secondary" href="https://github.com/HlobisileLukhele/BellaBheka-Website-">GitHub</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="images/Weather App.jpeg" />
                <Card.Body>
                    <Card.Title>React Weather Application</Card.Title>
                    <Card.Text>
                    React weather app that shows live forecast data
                    </Card.Text>
                    <Button variant="primary" href="https://jenise-react-weather-app.netlify.app/">Website</Button>{' '}
                    <Button variant="secondary" href="https://github.com/HlobisileLukhele/React-Weather-App">GitHub</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="images/Portfolio Website" />
                <Card.Body>
                    <Card.Title>Portfolio Website</Card.Title>
                    <Card.Text>
                        Personal portfolio made withreactjs to showcase projects built and skills acquired.
                    </Card.Text>
                    <Button variant="primary" href="https://hlobisile-lukhele-portfolio.netlify.app/">Website</Button>{' '}
                    <Button variant="secondary" href="https://github.com/HlobisileLukhele/Personal-Portfolio">GitHub</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Projects;