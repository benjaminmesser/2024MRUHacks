import Navbar from './Components/Navbar';
import './App.css';
import QuestManager from './Components/QuestManager';
import Calendar from './Components/Calender';
import Main from './Components/Main';
import GetData from './backend/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import RewardItem from './Components/RewardItem';

//import sample data from text files
import sampleUserData from './data/user.js'
import sampleRewardData from './data/rewards.js'
import sampleQuestData from './data/quests.js'



function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
  }


const firebaseConfig = {
  apiKey: "AIzaSyBXgiatu0PckCY4ulUDmSql291lhEjtSho",
  authDomain: "questhub-6dfb0.firebaseapp.com",
  projectId: "questhub-6dfb0",
  storageBucket: "questhub-6dfb0.appspot.com",
  messagingSenderId: "941843742603",
  appId: "1:941843742603:web:21d5edc6bdc161fc5bf98e",
  measurementId: "G-794EV992ZL"
};
const cong = initializeApp(firebaseConfig);
  

function App() {
  const analytics = getAnalytics(cong);
  //(async () => await GetData(0, 'quest'))();
//   var quest_data = GetData(0, 'quest');
//   sleep(5000);
  console.log('AAAAAAAAAAAAAA');
//   console.log(quest_data);
//   quest_data = quest_data.getElementById("cat").querySelectorAll('li');
  console.log('BBBBBB');
//   console.log(quest_data);
//   var user_data = GetData(0, 'user');
//   console.log(user_data);
//   var reward_data = GetData(0, 'reward');
//   console.log(reward_data);


  //fetch from test data
  console.log("TEST USER DATA")
  console.log(sampleUserData)
  
  return (
    <>
      <div >
        <Navbar userData = {sampleUserData}/>
        <Main rewardData = {1} questData = {1}/>
      </div>
    </>
  )
}

export default App
// export cong

