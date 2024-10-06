import Navbar from './Components/Navbar';
import './App.css';
import QuestManager from './Components/QuestManager';
import Calendar from './Components/Calender';
import Main from './Components/Main';
import GetData from './backend/database';
import RewardItem from './Components/RewardItem';

function App() {
  var quest_data = GetData(0, 'quest');
  console.log(quest_data);
  var user_data = GetData(0, 'user');
  console.log(user_data);
  var reward_data = GetData(0, 'reward');
  console.log(reward_data)
  
  return (
    <>
      <div >
        <Navbar userData = {user_data}/>
        <Main rewardData = {reward_data} questData = {quest_data}/>
      </div>
    </>
  )
}

export default App
