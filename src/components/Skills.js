import react from '../assets/react.svg';
import javascript from '../assets/javascript.svg';
import rails from '../assets/rails.svg';
import ruby from '../assets/ruby.svg';
import reactrouter from '../assets/react-router.svg';
import redux from '../assets/redux.svg';
import html from '../assets/html-5.svg';
import css from '../assets/css-3.svg';
import postgresql from '../assets/postgresql.svg';
import git from '../assets/git-icon.svg';
import heroku from '../assets/heroku.svg';
import netlify from '../assets/netlify.svg';
import semantic from '../assets/semantic-ui.svg';
import material from '../assets/material-ui.svg';
import SkillsCard from './SkillsCard'

function Skills() {

    const skillCards = [
      {name: 'React', logo: react}, 
      {name: 'JavaScript', logo: javascript}, 
      {name: 'React Router', logo: reactrouter},
      {name: 'Ruby', logo: ruby},
      {name: 'Rails', logo: rails},
      {name: 'Redux', logo: redux},
      {name: 'Git', logo: git},
      {name: 'PostgreSQL', logo: postgresql},
      {name: 'CSS', logo: css},
      {name: 'Semantic UI', logo: semantic},
      {name: 'Material ', logo: material}, 
      {name: 'HTML', logo: html},
      {name: 'Heroku', logo: heroku},
      {name: 'Netlify', logo: netlify}
    ]

    const cardsToDisplay = skillCards.map(skillCard => {
      return <SkillsCard key={skillCard.name} skillCard={skillCard}/>
    })

    return (
      <div>
          SKILLS
          {cardsToDisplay}
      </div>
    );
  }
  
  export default Skills;