import  {createClient} from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient("https://ifzgmtvnlimxhzupprfz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmemdtdHZubGlteGh6dXBwcmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwOTk4MjQsImV4cCI6MjA0MzY3NTgyNH0.PQlh_1OPwPulJsrDmu5UogQIZPtwJTrTxAuuGcnYA_w");

function database() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);


    async function getTasks(userID) {
        const { data } = await supabase.from('task').select().eq('userID',userID);
        setTask(data);
    }
    return (
    <ul>
        {task.map((taskr) => (
            <li key={taskr.taskName}>{taskr.taskName}</li>
        ))}
    </ul>
    );
}
