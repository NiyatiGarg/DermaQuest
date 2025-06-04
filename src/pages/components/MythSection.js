import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import myth from '../../assets/myth.png';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import './MythSection.css';

const Myths = () => {
  const { pageTheme, myths, isSmallScreen } = useContext(AppContext);

  return (
    <section className='myths-section'>
      <div className='myths-container'>
        <h2 className='myths-title'>
          <FaLightbulb className="title-icon" />
          Busting Common Skincare Myths
        </h2>
        
        <div className='myths-content'>
          <div className='myths-list'>
            {myths.map((myth, index) => (
              <Accordion
                key={index}
                className='myth-accordion'
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
                    <div className="truth-badge">THE TRUTH</div>
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
              src={myth} 
              alt='Debunking skincare myths illustration' 
              className='myths-image'
            />
            <div className="image-overlay">
              <p className="overlay-text">
                Get the facts right about skincare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Myths;