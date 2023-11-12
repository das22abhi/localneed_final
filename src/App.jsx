import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Body1 from './components/Body1'
import Bodyheading from './components/Bodyheading'
import Body2 from './components/Body2'
import Body3 from './components/Body3'
import Body4 from './components/Body4'
import Body5 from './components/Body5'
import HotDeals from './components/HotDeals'
import Latest from './components/Latest'
import Copyright from './components/Copyright'
import AnimateWhileInView from './components/AnimateWhileInView'

function App () {
  return (
    <>
      <Navbar />
      <AnimateWhileInView>
        <Header />
      </AnimateWhileInView>
      <AnimateWhileInView>
        <Bodyheading />
      </AnimateWhileInView>
      <AnimateWhileInView>
        <Body2 />
      </AnimateWhileInView>
      <AnimateWhileInView>
        <Body1 />
      </AnimateWhileInView>
      {/* <Latest /> */}
      {/* <HotDeals /> */}
      <AnimateWhileInView>
        <Body3 />
      </AnimateWhileInView>
      <AnimateWhileInView>
        <Body4 />
      </AnimateWhileInView>
      <AnimateWhileInView>
        <Body5 />
      </AnimateWhileInView>
      <Copyright />
    </>
  )
}

export default App
