import React from 'react';

import './Projects.css';

function Projects() {
  return (
    <section className='projects-section'>
      <h6>Projects:</h6>
      <div className='all-projects-wrapper'>

        <div className='project-wrapper'>
          <div className='project-title'>Whisker Watch</div>
          <p className='project-description'>
            Whisker Watch is a charming web application designed for cat breed enthusiasts with a particular interest in rare and unusual cat breeds. This interactive platform offers a delightful experience for users who want to explore and celebrate these unique feline companions.
          </p>
          <a
            href="https://github.com/CarissaHluchan/whisker-watch"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View GitHub Repo
          </a>
          <a
            href="https://whisker-watch.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View Live Site
          </a>
        </div>

        <div className='project-wrapper'>
          <div className='project-title'>Red Horizon</div>
          <p className='project-description'>
            Mars exploration app for curious learners to discover images of the surface features of Mars, explore its moons, and images from the Mars rover expeditions.
          </p>
          <a
            href="https://github.com/CarissaHluchan/red-horizon"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View GitHub Repo
          </a>
          <a
            href="https://red-horizon-4zql.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View Live Site
          </a>
        </div>

        <div className='project-wrapper'>
          <div className='project-title'>Crusty Carrots</div>
          <p className='project-description'>
            A movie discovery site, allowing users to discover movies based on title and ratings.
          </p>
          <a
            href="https://github.com/CarissaHluchan/crusty-carrots"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View GitHub Repo
          </a>
          <a
            href="https://carissahluchan.github.io/crusty-carrots/"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View Live Site
          </a>
        </div>

        <div className='project-wrapper'>
          <div className='project-title'>Overlook Hotel</div>
          <p className='project-description'>
            A hotel booking tool for hotel customers to search rooms at the Overlook Hotel, manage room bookings and calculate bills.
          </p>
          <a
            href="https://github.com/CarissaHluchan/overlook-hotel"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View GitHub Repo
          </a>
          <a
            href="https://carissahluchan.github.io/overlook-hotel/"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View Live Site
          </a>
        </div>

        <div className='project-wrapper'>
          <div className='project-title'>What's Cookin</div>
          <p className='project-description'>
            A recipe tracking / meal planning application that allows users to view recipes they want to cook & plan shopping trips around them. Users can view a list of recipes, filter them by name or tag, & choose recipes to cook.
          </p>
          <a
            href="https://github.com/CarissaHluchan/whats-cookin"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View GitHub Repo
          </a>
          <a
            href="https://carissahluchan.github.io/whats-cookin/"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View Live Site
          </a>
        </div>

        <div className='project-wrapper'>
          <div className='project-title'>Rock Papper Scissors</div>
          <p className='project-description'>
            A game to play two versions of Rock, Paper, Scissors, a classic version, and a more difficult version with five fighter choices adding a lizard and alien/UFO.
          </p>
          <a
            href="https://github.com/CarissaHluchan/rock-paper-scissors"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View GitHub Repo
          </a>
          <a
            href="https://carissahluchan.github.io/rock-paper-scissors/"
            target="_blank"
            rel="noopener noreferrer"
            className='project-link'>
            View Live Site
          </a>
        </div>
      </div>

    </section>
  )
}

export default Projects;