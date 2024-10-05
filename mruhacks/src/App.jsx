import Navbar from "./Components/Navbar"
import './App.css'
import TaskManager from './Components/TaskManager';
import Calendar from "./Components/Calender";
import Rewards from "./Components/Rewards";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <TaskManager />
        <Calendar />
        <Rewards />
      </div>
    </>
  )
}

export default App
