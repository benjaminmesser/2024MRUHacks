import  {createClient} from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient("https://ifzgmtvnlimxhzupprfz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmemdtdHZubGlteGh6dXBwcmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwOTk4MjQsImV4cCI6MjA0MzY3NTgyNH0.PQlh_1OPwPulJsrDmu5UogQIZPtwJTrTxAuuGcnYA_w");

function GetData(userId, tableName) {
    const [quest, setQuest] = useState([]);

    useEffect(() => {
        getQuests();
    }, []);

    async function getQuests() {
        const { data } = await supabase
        .from(tableName)
        .select()
        .eq('userId', userId);
        
        setQuest(data);

    }
    return (
    <ul>
        {quest.map((questr) => (
            <li key={quest.questName}>{questr.questName}</li>
        ))}
    </ul>
    );
}

function InsertUser(questRow) {
    const [quest, setQuest] = useState([]);

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
        {quest.map((questr) => (
            <li key={quest.questName}>{questr.questName}</li>
        ))}
    </ul>
    );
}

function InsertQuest(questRow) {
    const [quest, setQuest] = useState([]);

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
        {quest.map((questr) => (
            <li key={quest.questName}>{questr.questName}</li>
        ))}
    </ul>
    );
}

function InsertReward(questRow) {
    const [quest, setQuest] = useState([]);

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
        {quest.map((questr) => (
            <li key={quest.questName}>{questr.questName}</li>
        ))}
    </ul>
    );
}
