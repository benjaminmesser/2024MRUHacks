import  {createClient} from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient("https://ifzgmtvnlimxhzupprfz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmemdtdHZubGlteGh6dXBwcmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwOTk4MjQsImV4cCI6MjA0MzY3NTgyNH0.PQlh_1OPwPulJsrDmu5UogQIZPtwJTrTxAuuGcnYA_w");

function GetData(userId, tableName) {
    const [quest, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data } = await supabase
        .from(tableName)
        .select()
        .eq('userId', userId);
        
        setData(data);

    }
    return (
    <ul>
        {quest.map((questr) => (
            <li key={quest.questName}>{questr.questName}</li>
        ))}
    </ul>
    );
}

function InsertUser(userRow) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    async function Quests() {
        const { data } = await supabase
        .from('user')
        .insert({ id: 1, name: 'Denmark' })
        
        setQuest(data);

    }
    return (
    <ul>
        {user.map((users) => (
            <li key={user.questName}>{users.questName}</li>
        ))}
    </ul>
    );
}

function InsertQuest(questRow) {
    const [quests, setQuest] = useState([]);

    useEffect(() => {
        getQuests();
    }, []);

    async function getQuests() {
        const { data } = await supabase
        .from('quest')
        .insert({ id: 1, name: 'Denmark' })
        
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
    const [reward, setReward] = useState([]);

    useEffect(() => {
        getQuests();
    }, []);

    async function getQuests() {
        const { data } = await supabase
        .from('reward')
        .insert({ id: 1, name: 'Denmark' })
        
        setReward(data);

    }
    return (
    <ul>
        {quest.map((questr) => (
            <li key={quest.questName}>{questr.questName}</li>
        ))}
    </ul>
    );
}
