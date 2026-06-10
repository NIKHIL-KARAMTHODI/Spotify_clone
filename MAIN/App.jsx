import {useState} from 'react'
import './spotify/src/App.css'
import Navbar from "./COMPONENTS/NAVBAR/Navbar"
import Sidebar from "./COMPONENTS/SIDEBAR/Sidebar"
import MainSection from "./COMPONENTS/MAINSECTION/MainSection"
import Footer from "./COMPONENTS/FOOTER/Footer"

function App() {

    return (
            <>
                <div className ="MainContainer">
                    <Navbar/>
                <div className="MainSectionContentContainer">
                    <Sidebar/>
                    <MainSection/>
                </div></div>
                    <Footer/>
            </>
            )
}

export default App
