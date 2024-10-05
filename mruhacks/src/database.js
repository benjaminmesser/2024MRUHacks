import {} from "@supabase/supabase-js";

const supabase = createClient("https://2024MRUHacks.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmemdtdHZubGlteGh6dXBwcmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwOTk4MjQsImV4cCI6MjA0MzY3NTgyNH0.PQlh_1OPwPulJsrDmu5UogQIZPtwJTrTxAuuGcnYA_w");

function database() {
    const [task, setTask] = useState([]);
}

async function getData() {
    const {data} = await supabase.from('task')
    .select(`Name, 
        Description, 
        Difficulty,
        users(userId)
    `)
    .innerJoin('user, task.userId, user.userId');
}
