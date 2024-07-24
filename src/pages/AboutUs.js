import React , {useContext} from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';

function AboutUs() {

  const { bgColor } = useContext(AppContext);

    return (
        <div style={{ backgroundColor: bgColor }}>
        <Header />
        <div className='d-flex justify-content-center flex-column'>
        <h1 >DermaQuest: Your Personalized Skincare Guide</h1>
            <p>
                DermaQuest is your one-stop shop for all things skincare. We empower you
                to make informed choices for your skin by providing answers to your
                questions and offering personalized recommendations. Whether you're
                struggling with dryness, acne, wrinkles, or simply want to achieve a
                healthy glow, DermaQuest is here to help.
            </p>
            <h2 style={{ fontSize: '2rem' }}>Here's what you can find on DermaQuest</h2>
            <ul>
                <li> <b>Expert Advice:</b> Our comprehensive blog features articles written by skincare professionals, covering a wide
                    range of topics to address your specific concerns.</li>
                <li><b>Ingredient Decoder:</b> Learn about the science behind skincare ingredients and discover how they can benefit your skin.</li>
                <li><b>Skin Type Quiz:</b> Take our interactive quiz to identify your unique skin type and receive personalized product
                    recommendations tailored to your needs.</li>
                <li><b>Live Data Integration:</b> Get the latest and most relevant skincare information through our
                    integration with reliable sources.</li>
            </ul>
            <p style={{fontWeight: 'bold'}}>DermaQuest is your partner in achieving healthy, radiant skin. We believe that knowledge is power, and we're here
                 to equip you with the information you need to feel confident about your skincare routine.</p>
            <p></p>
        </div>
           
        </div>
    )
}

export default AboutUs