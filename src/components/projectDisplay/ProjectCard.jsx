import './ProjectDisplayer.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

import DevIcon from '../DevIcon';


export default function ProjectCard({ project, itsTechs }) {
    const [currentImg, setCurrentImg] = useState(0);

    const handleImageChange = (direction) => {
        if (direction === 'next') {
            setCurrentImg((prev) => (prev + 1) % project.images.length);
        } else {
            setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    return (
        <motion.div
            className="fade-in-on-scroll project-card"
            whileFocus={{ scale: 1.05 }}
        >
            {(project.screenshots.length !== 0 && project.screenshots[0] !== "") ? (
                <div className="image-container">
                    {project.screenshots.length > 1 ? (
                        <button onClick={() => handleImageChange('prev')} className="nav-button prev">Prev</button>
                    ) : (null)}
                    <img src={project.screenshots[currentImg]} alt={project.title} />
                    {project.screenshots.length > 1 ? (
                        <button onClick={() => handleImageChange('next')} className="nav-button next">Next</button>
                    ) : (null)}
                </div>
            ): (null)}
            <h3 className="audiowide-regular !text-center !text-3xl">{project.name}</h3>
            <p className="oregano-regular !text-center !text-xl">{project.description}</p>
            {itsTechs ? (
                <span className='flex flex-wrap justify-center gap-2'>
                    {itsTechs.map((tech, index) => (
                        <DevIcon key={index} width={50} height={50} link={tech.link} name={tech.name} />
                    ))}
                </span>
            ) : (
                <p className='oregano-regular'>No techs specified</p>
            )}
            <div>
                {project.links && project.links.length > 0 ? (
                    <div>
                        {project.links.map((link, index) => (
                            <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="!text-xl !no-underline"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                ) : (
                    <p className='oregano-regular'>No links available</p>
                )}
            </div>
        </motion.div>
    );
}