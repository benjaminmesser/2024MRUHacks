import Navbar from './Components/Navbar';
import './App.css';
import QuestManager from './Components/QuestManager';
import Calendar from './Components/Calender';
import Main from './Components/Main';
import GetData from './backend/database';

function App() {
  var quest_data = GetData(0, 'quest');
  console.log(quest_data);
  var user_data = GetData(0, 'user'); //if it fails, try public.user
  console.log(user_data);
  var reward_data = GetData(0, 'reward');
  console.log(reward_data)
  
  return (
    <>
      <div>
        <Navbar />
        <Main />
      </div>
    </>
  )
}

export default App
