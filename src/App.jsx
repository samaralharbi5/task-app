import { useState } from "react";
import "./App.css"; // تأكد من استيراد ملف CSS

function App() {
const [tasks, setTasks] = useState([]);
const [task, setTask] = useState("");

const addTask = () => {
if (task.trim() === "") return;
setTasks([...tasks, { text: task, completed: false }]);
setTask("");
};

const deleteTask = (index) => {
setTasks(tasks.filter((_, i) => i !== index));
};

const toggleTask = (index) => {
setTasks(
tasks.map((t, i) =>
i === index ? { ...t, completed: !t.completed } : t
)
);
};

return (
<div className="container">
<h1>📋 قائمة المهام</h1>
<input
type="text"
placeholder="أضف مهمة جديدة..."
value={task}
onChange={(e) => setTask(e.target.value)}
/>
<button onClick={addTask} className="add-btn">إضافة</button>

<ul className="task-list">
{tasks.map((t, index) => (
<li key={index} className="task-item">
<span
onClick={() => toggleTask(index)}
className={t.completed ? "completed" : ""}
>
{t.text}
</span>
<button onClick={() => deleteTask(index)} className="delete-btn">❌</button>
</li>
))}
</ul>
</div>
);
}

export default App;
