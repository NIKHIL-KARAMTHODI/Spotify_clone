import React from 'react'
import './popularartist.css'
import ArtistCard from './COMPONENTS/ARTISTCARD/arrtistcard'

const PopularArtist = ({setCurrentPage}) => {
    return (
        <div className = "PopularArtistMainContainer TrendingSectionMainContainer">
        <span>Popular Artists</span>
        <ArtistCard setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default PopularArtist
