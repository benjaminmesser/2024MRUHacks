import Navbar from "./Components/Navbar"
import './App.css'
import TaskManager from './Components/TaskManager';
import Calendar from "./Components/Calender";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <TaskManager />
        <Calendar />
      </div>
    </>
  )
}

export default App
