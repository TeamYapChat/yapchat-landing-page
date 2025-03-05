//import { useState } from 'react'
import bgImg from './assets/landingpagebg.jpg'
import './App.css'


function App() {

  return (
    <main className="grid h-screen w-full overflow-hidden" style={{ backgroundImage: `url(${bgImg})` }}>
      <img src={bgImg} className='absolute inset-0 object-cover w-full h-full -z-20'/>
      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center">
        <div className="relative h-full w-full border-gray-400 border-4">
          {/* NavBar */}
          <div className='relative h-1/10 w-full top-0 border-white border-4'>
            <p> weeeeee </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App
