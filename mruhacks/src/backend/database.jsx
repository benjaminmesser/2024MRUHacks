import  {createClient} from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { doc, setDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';


// const supabase = createClient("https://ifzgmtvnlimxhzupprfz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmemdtdHZubGlteGh6dXBwcmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwOTk4MjQsImV4cCI6MjA0MzY3NTgyNH0.PQlh_1OPwPulJsrDmu5UogQIZPtwJTrTxAuuGcnYA_w");

const firebaseConfig = {
    apiKey: "AIzaSyBXgiatu0PckCY4ulUDmSql291lhEjtSho",
    authDomain: "questhub-6dfb0.firebaseapp.com",
    projectId: "questhub-6dfb0",
    storageBucket: "questhub-6dfb0.appspot.com",
    messagingSenderId: "941843742603",
    appId: "1:941843742603:web:21d5edc6bdc161fc5bf98e",
    measurementId: "G-794EV992ZL"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// await setDoc(doc(db, "user", "0")) {}
//  
function GetData(userId, tableName) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        // const { data } = (async () => await supabase)();
        
        // const { data } = await supabase
        // .from(tableName)
        // .select()
        // .eq('userId', userId);

        // setData(data);
        // console.log("Printing data?");
        // console.log(data);
    // function getData() {
    //     supabase
    //     .from(tableName)
    //     .select()
    //     .eq('userId', userId)
    //     .then(response => {
    //         setData(response.data); // Handle the returned data
    //         console.log("Printing data?");
    //         console.log(response.data); // Log the data to check
    //     });
    // }

    }

    return data;
    // return (
    //     quest.map((questr) => (
    //         key=quest.questName,questr.questName
    //     ))
    // );
}

function InsertUser(userRow) {
    const [data, setUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    async function Users() {
        const { data } = await supabase
        .from('user')
        .insert({ username: userRow['username'], firstName: userRow['firstName'], lastName: userRow['lastName'], xp: userRow['xp'], points: userRow['points'] })
        
        setUser(data);

    }
    return (
    <ul>
        {user.map((users) => (
            <li key={user.firstName}>{users.firstName}</li>
        ))}
    </ul>
    );
}

function InsertQuest(questRow) {
    const [data, setQuest] = useState([]);

    useEffect(() => {
        getQuests();
    }, []);

    async function getQuests() {
        const { data } = await supabase
        .from('quest')
        .insert({ questUser: questRow['questUser'], completed: questRow['completed'], difficulty: questRow['difficulty'], date: questRow['date'] })
        
        setQuest(data);

    }
    return (
    <ul>
        {quests.map((quest) => (
            <li key={quest.questName}>{quest.questName}</li>
        ))}
    </ul>
    );
}

function InsertReward(rewardRow) {
    const [data, setReward] = useState([]);

    useEffect(() => {
        getRewards();
    }, []);

    async function getRewards() {
        const { data } = await supabase
        .from('reward')
        .insert({ rewardName: rewardRow['rewardName'],
            rewardDescription: rewardRow['rewardDescription'],
            cost: rewardRow['cost'] })
        
        setReward(data);

    }
    return (
    <ul>
        {reward.map((rewards) => (
            <li key={reward.rewardName}>{rewards.questName}</li>
        ))}
    </ul>
    );
}
function UpdateQuest(questRow) {
    const [data, setQuest] = useState([]);

    useEffect(() => {
        updateQuests();
    }, []);

    async function updateQuests() {
        const { data } = await supabase
        .from('quest')
        .update({ questUser: questRow['questUser'], 
            completed: questRow['completed'], 
            difficulty: questRow['difficulty'], 
            date: questRow['date'] })
        .eq('taskId', questRow['taskId'])

        setQuest(data);

    }
}

function UpdateReward(rewardRow) {
    const [data, setReward] = useState([]);

    useEffect(() => {
        updateReward();
    }, []);

    async function updateReward() {
        const { data } = await supabase
        .from('reward')
        .update({ rewardName: rewardRow['rewardName'], 
                rewardDescription: rewardRow['rewardDescription'], 
                cost: rewardRow['cost'] })
        .eq('rewardId', rewardRow['rewardId'])

        setReward(data);

    }
}

function UpdateUser(userRow) {
    const [data, setUser] = useState([]);

    useEffect(() => {
        updateUser();
    }, []);

    async function updateUser() {
        const { data } = await supabase
        .from('user')
        .update({ username: userRow['username'], //
                firstName: userRow['firstName'], // dont think we need to update these values, thoughts?
                lastName: userRow['lastName'], // 
                xp: userRow['xp'],
                points: userRow['points']  })
        .eq('userId', userRow['userId'])
        
        setReward(data);

    }
    
}

function DeleteData(userId,tableName) {
    const [data, setData] = useState([]);

    useEffect(() => {
        deleteData();
    }, []);

    async function deleteData() {
        const { data } = await supabase
        .from(tableName)
        .delete()
        .eq('userId', userId)
        
        setData(data);

    }
    
}



export default GetData
