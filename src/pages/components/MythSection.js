import React, {useContext} from 'react';

import { AppContext } from '../../AppContext';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import myth from '../../assets/myth.png';
import { RiH2 } from 'react-icons/ri';

import { RiArrowDownSLine } from "react-icons/ri";

const Myths=()=>{

    const { pageTheme, myths, isSmallScreen } = useContext(AppContext);

  return (
    <section className='justify-content-center d-flex flex-column ' style={{ padding: '0vh 10vw' , background: pageTheme}}>
        
        <h2 className='d-flex justify-content-center my-5 text-center' 
        >
          Busting Myths about Skincare
        </h2>
        <div className='d-flex align-items-end ' style={{flexDirection: isSmallScreen? 'column':'row' }}>
          <div className='col-md-6 dropdown-width' style={{margin: '2rem 0 2rem 0'}}>
            {myths.map((myth, index) => (
              <Accordion
                style={{
                  // border: `2px solid ${pageTheme}`,
                  borderRadius: '10px',
                  background: 'offwhite',
                  // boxShadow: `0 0 5px ${pageTheme}`,
                }}
                sx={{
                  '&:before': {
                    display: 'none', // Remove the divider line
                  },
                }}
                // onClick={openMythById(index)}

                className='my-2 p-2 d-flex flex-column align-items-start '
              >
                <AccordionSummary
                // // expandIcon={<ExpandMoreIcon />}
                // aria-controls="panel-content"
                // id="panel-header"
                className='d-flex justify-content-between w-100'
                >
                  <Typography style={{ fontSize: '1.2rem', fontWeight: '30', justifyContent: 'space-between' , display: 'flex', width: '100%'}}><span> {myth.title}</span> <RiArrowDownSLine style={{fontSize: '2rem'}}/></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='p-2 text-justify' style={{  fontSize: '1.2rem' }}>
                    {myth.explaination}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <img src={myth} alt={'myths about skincare'} style={{ height: isSmallScreen? '300px':'520px', width: isSmallScreen? '120%': '60%', zIndex: 0 }} />
          </div>
      </section>
  )
}

export default Myths;