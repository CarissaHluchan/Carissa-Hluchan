import React from 'react';
import { Link } from 'react-router-dom';

import './Project.css';
import chessGif from '../../assets/gifs/chess.gif';
import whiskerGif from '../../assets/gifs/whisker-watch.gif';
import redGif from '../../assets/gifs/red-horizon.gif';
import carrotGif from '../../assets/gifs/crusty-carrots.gif';
import overlookGif from '../../assets/gifs/overlook-hotel.gif';
import cookingGif from '../../assets/gifs/whats-cookin.gif';
import rockGif from '../../assets/gifs/rps.gif';

function Project({ id, title, description, collaborators, projectNotes, repo, liveSite }) {

  const gifs = {
    1: chessGif,
    2: whiskerGif,
    3: redGif,
    4: carrotGif,
    5: overlookGif,
    6: cookingGif,
    7: rockGif
  };

  return (
    <section id={id} className='project-section'>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={gifs[id]} alt={`${title} preview`} />
      <h3>Co-Collaborators:</h3>
      <div>{collaborators.join(', ')}</div>
      <h4>Project Notes:</h4>
      <div>{projectNotes}</div>
      <div className='project-link-wrapper'>
        <Link to={repo}>Code Repo</Link>
        {liveSite && <Link to={liveSite}>Live Site</Link>}
      </div>
    </section>
  )
}

export default Project