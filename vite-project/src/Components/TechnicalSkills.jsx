import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';

const TechnicalSkills = () => {
    const skills = [
        {
            id: 1,
            title: 'JavaScript',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'React',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'Bootstrap',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            title: 'Framer Motion',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            title: 'HTML',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            title: 'CSS',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 7,
            title: 'Node.js',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 8,
            title: 'Express.js',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 9,
            title: 'MongoDB',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 10,
            title: 'Git',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="d-flex overflow-auto">
            {skills.map((skill) => (
                <motion.div
                    key={skill.id}
                    className="mx-2"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={skill.image} />
                        <Card.Body>
                            <Card.Title>{skill.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default TechnicalSkills;