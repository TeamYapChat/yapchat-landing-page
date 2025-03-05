//import { useState } from 'react'
import bgImg from './assets/bg_login.png'
import TransparentButton from './components/TransparentButton'
import './App.css'


function App() {

  return (
    <main className="grid h-screen w-full overflow-hidden" style={{ backgroundImage: `url(${bgImg})` }}>
      <img src={bgImg} className='absolute inset-0 object-cover w-full h-full -z-20'/>
      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center">
        <div className="relative h-full w-full ">
          {/* NavBar */}
          <div className="relative h-1/10 w-full top-0 shadow-md">
            <div className="absolute top-1/2 left-10 -translate-y-1/2">
              <p>YapChat Logo Goes Here</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <TransparentButton name="Support"/>
              <TransparentButton name="Discover"/>
            </div>
            <div className="absolute top-1/2 right-10 -translate-y-1/2">
              <TransparentButton name="Login" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App
