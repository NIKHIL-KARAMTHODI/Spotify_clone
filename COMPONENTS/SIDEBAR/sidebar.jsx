import React from 'react'
import './COMPONENTS/SIDEBAR/sidebar.css'
import Cards from "./COMPONENTS/SIDEBAR/cards"

const Sidebar = () => {
    const Text = ["Legal", "Security & Privacy Center","PrivacyPolicy","Cookies","About Ads", "Accessibility"] 
     return (
        <div className = "sidebarContainer">
            <div className="sidebarTopSection">
            <h1>Your Library</h1>
            <p>+</p> 
            </div>
        <div className="sidebarMiddleSection">
            <Cards heading= "Create your first Playlist" subheading= "It's easy, we'll help you" buttontext= "Create Playlist" />
            <Cards heading= "Let's find some podcast to follow" subheading= "we'll help you updated on new updates" buttontext= "Browse Podcasts" />
        </div>
        <div className="sidebarBottomSection">
            <div className="sidebarBottomSectionTopContainer">
                {
                Text.map((ele) => {
                    return (
                        <p>{ele}</p>
                    )
                })
                }
            </div>
            <div className="sidebarBottomSectionBottomContainer">
                <p>Cookies</p>
            </div>
            <div className="sidebarBottomSectionBottomContainer">
                <button>English</button>
            </div>
        </div>
        </div>
    )
}

export default Sidebar
