import './App.css'
import Card from './components/card'

function App() {
  const arr = [
    {
      name : "Vedansh",
      role : "Developer"
    },
    {
      name : "Drax",
      role : "Quality analyst"
    },
    {
      name : "Sujal",
      role : "Developer"
    },
    {
      name : "KANE",
      role : "Forward Deployed Engineer"
    }];
  return (

      <div className="parent">
        {arr.map(function(elem){
          return <Card user ={elem.name} pos={elem.role}/>
        })}
      </div>
  )
}

export default App
