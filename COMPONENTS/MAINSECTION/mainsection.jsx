import React, { useState } from 'react';
import './mainsection.css';
import Trending from '../../COMPONENTS/TRENDING/trending';
import PopularArtist from '../../COMPONENTS/POPULARARTISTS/popularartist';
import SpecificMusicFile from '../../specificmusicfile';


const MainSection = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentFile, setCurrentFile] = useState(null);

  console.log(currentPage);

  return (
    <main className="mainSection">
      {currentPage === "home" ? (
        <>
          <Trending setCurrentFile={setCurrentFile} setCurrentPage={setCurrentPage} />
          <PopularArtist setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === "musicSpecificPage" ? (
        <>
        <SpecificMusicFile currentEle={currentFile} />
        </>
      ) : currentPage === "artistSpecificPage" ? (
        <>artist</>
      ) : null}
    </main>
  );
};

export default MainSection;
