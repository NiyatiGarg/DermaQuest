import React,{useContext} from 'react';

import { AppContext } from '../../AppContext';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import myth from '../../assets/myth.png';

const Myths=()=>{

    const { pageTheme, myths } = useContext(AppContext);

  return (
    <section className='justify-content-center d-flex flex-column bg-light' style={{ padding: '2vh 10vw' }}>
        
        <h1 className='d-flex justify-content-center my-5 text-center' style={{ fontFamily: 'cursive' }}>
          Busting Myths about Skincare
        </h1>
        <div className='d-flex'>
          <div className='col-md-6'>
            {myths.map((myth, index) => (
              <Accordion
                style={{
                  background: pageTheme,
                  borderRadius: '50px',
                  border: 'none',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
                sx={{
                  '&:before': {
                    display: 'none', // Remove the divider line
                  },
                }}
                // onClick={openMythById(index)}

                className='my-2 p-2 justify-content-center d-flex flex-column align-items-center '
              >
                <AccordionSummary
                // // expandIcon={<ExpandMoreIcon />}
                // aria-controls="panel-content"
                // id="panel-header"
                >
                  <Typography style={{ fontSize: '1.2rem', fontWeight: '30', fontFamily: 'cursive' }}>{myth.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='p-2 text-center' style={{ fontFamily: 'cursive', fontSize: '1.2rem' }}>
                    {myth.explaination}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div>
            <img src={myth} alt={'myths about skincare'} style={{ height: '100%', width: '110%' }} />
          </div>
        </div>
      </section>
  )
}

export default Myths;