import '../App.css';
import '../index.css';
import Home from './Home'
import Links from './Links'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      
        <Home/> 
        <Skills/> 
        <Projects/>
        <Experience/>
        <Links/>
        <Contact/>
        <Footer/>
      
    </div>
  );
}

export default App;
