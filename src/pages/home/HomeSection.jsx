import React from 'react'
import heroImage from '../../assets/images/communication-technology-lifestyle-concept-curious-dark-skinned-woman-reads-interesting-post-online-holds-mobile-phone-hand-thinks-how-give-answer-received-message-poses-indoor-removebg-preview 1.svg'
const HomeSection = () => {
  return (
    <div className='w-full md:flex justify-between items-center gap-5'>
      <div className=' w-full md:w-[50%] space-y-5 '>
      <h1 className=' font-semibold text-4xl '>Unlock Affordable Data Plans and Utility Services with <strong className='text-secondary' >DataFlex ConnectHub!</strong></h1>
        <p className='text-xl font-normal'>Streamline your business communication and utility management with our seamless Telegram Chatbot and Web App.</p>
       

        <button className=' bg-primaryColor p-3 rounded-md text-NeutralLight px-10 '> Get started</button>
      </div>

        <div className="bg-[url('./assets/images/2115011_7800\ 3.svg')]" >
        <img src={heroImage} alt="" />
        </div>
      
    </div>
  )
}

export default HomeSection
