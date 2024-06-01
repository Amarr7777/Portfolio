import React from 'react'

function Home() {
  return (
    <>
    <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col h-full justify-center items-center text-center px-5">
        <h1 className="text-white text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-ConcertOne">
          WELCOME
        </h1>
        <p className="font-ConcertOne text-white font-thin leading-5 text-justify md:px-20 lg:px-60 py-5">
          Hello! I'm Amar G Nath, a passionate and dedicated software engineer
          with a strong background in web and mobile development. With a keen
          interest in solving complex problems through innovative solutions, I
          have honed my skills across various technologies and frameworks.
        </p>
      </div>
    </>
  )
}

export default Home