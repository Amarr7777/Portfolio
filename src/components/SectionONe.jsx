import React from 'react'
import Header from './Header'
import Footer from './Footer'

function SectionONe() {
  return (
    <>
    <Header/>
    <div className='flex flex-col h-screen justify-center items-center'>
        <h1 className='text-white text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-ConcertOne'>WELCOME</h1>
        <p className='font-ConcertOne text-white font-thin leading-5 text-justify px-5 md:px-20 lg:px-60 py-5'>Hello! I'm Amar G Nath, a passionate and dedicated software engineer with a strong background in web and mobile development. With a keen interest in solving complex problems through innovative solutions, I have honed my skills across various technologies and frameworks.</p>
    </div>
    <Footer/>
    </>
  )
}

export default SectionONe