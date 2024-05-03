import React from 'react';
import HomeSection from './HomeSection';
import ChooseUs from './ChooseUs';
import Features from './Features';
import HowItWorks from './HowItWorks';

const Home = () => {
  return (
    <>
        {/* Hero Section */}



        {/* Features */}

        {/* Pricing */}

        {/* Contact us */}


        <div className="  py-[8rem]">
            
           
        <div id='Home' className='container'>
            <HomeSection />
        </div>
        
        <div id='choose' className='container'>
            <ChooseUs />
        </div>
        
        <div >
           <Features />
        </div>
        
        <div id='gray' className='container'>
            <HowItWorks />
        </div>

        </div>
    
    </>
  )
}

export default Home;