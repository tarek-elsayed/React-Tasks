import React from 'react'
import Nav from "../Components/Navbar/Nav"
import Herosection from '../Components/HeroSection/Herosection'
import Services from '../Components/Services/Services'
import Productive from '../Components/Productive/productive'
import Opinions from '../Components/Opinions/Opinions'
import Access from '../Components/Access/Access'
import Footer from '../Components/Footer/Footer'
export  function Home() {

    return (
        <div>
            <header>
                 <Nav/>
                <Herosection/>
            </header>
            <Services/>
            <Productive/>
            <Opinions/>
            <Access/>
            <Footer/>
            
        </div>
    )
}
