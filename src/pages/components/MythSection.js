import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import girlImg from '../../assets/girlImg.png';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import './MythSection.css';

const Myths = () => {
  const { myths } = useContext(AppContext);

  const isMakeupMyth = (title) => {
    return title.toLowerCase().includes('makeup') || title.toLowerCase().includes('make up');
  };

  return (
    <section className='myths-section'>
      <div className='myths-container'>
        <h2 className='myths-title'>
          <FaLightbulb className="title-icon" />
          Skincare Myths vs Reality
        </h2>
        
        <div className='myths-content justify-content-between d-flex flex-row flex-wrap'>
          <div className='myths-list'>
            {myths.map((myth, index) => (
              <Accordion
                key={index}
                className={`myth-accordion ${isMakeupMyth(myth.title) ? 'makeup-myth' : ''}`}
                sx={{
                  '&:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<RiArrowDownSLine className="expand-icon" />}
                  className='myth-summary'
                >
                  <div className="myth-header">
                    <div className="myth-badge">MYTH #{index + 1}</div>
                    <Typography className='myth-title-text'>
                      {myth.title}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className='myth-details'>
                  <div className="truth-section">
                    <div className="truth-badge">REALITY</div>
                    <Typography className='myth-explanation'>
                      {myth.explaination}
                    </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          
          <div className='myths-image-container'>
            <img 
              src={girlImg} 
              alt='Discover the truth about skincare' 
              className='myths-image'
            />
            <div className="image-overlay">
              <p className="overlay-text">
                Discover the truth about skincare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Myths;