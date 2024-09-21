

import './App.css'
import Footer from './Component/Footer'

import Mainlayouts from './Component/layouts/mainLayouts/Mainlayouts'


function App() {
 

  return (

<div className='min-h-screen w-full'>
  <Mainlayouts/>
  <div className='fixed bottom-0 w-full'>
    <Footer/>
  </div>
</div>
        
  
  )
}

export default App
