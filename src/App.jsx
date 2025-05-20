import AddTask from "./components/Adding Interactivity/AddTask";
import TaskList from "./components/Adding Interactivity/TaskList";

import TaskProvider from "./Provider/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList
     
      // onChangeTask={handleChangeTask}
      // onDeleteTask={handleDeleteTask}
      />
    </TaskProvider>
  );
}

export default App;
