import ProjectCard from './ProjectCard'

function Projects() {

  const projCards = [
    {name: "al 'freskō", techStack: 'Built using Ruby on Rails, React.js and PostgreSQL', about: 'Outdoor dining locator app that highlights ', gitHub: 'Github', live: 'Live'}, 
    {name: 'Breathe', techStack: 'Built using Ruby on Rails, vanilla javascript and PostgreSQL', about: 'Meditation and Mindfulness for Sleep, Anxiety and Stress', gitHub: 'Github', live: 'Live'} 
  ]

  const projsToDisplay = projCards.map(projCard => {
    return <ProjectCard key={projCard.name} projCard={projCard}/>
  })

    return (
      <div>
          PROJECTS
          {projsToDisplay}
      </div>
    );
  }
  
  export default Projects;