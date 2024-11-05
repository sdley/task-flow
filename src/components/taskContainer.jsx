import { useState } from "react"
import { Footer } from "./footer/footer"
import Header from "./header/header"
import TaskInput from "./taskInput/taskInput"
import TaskList from "./taskList/taskList"



// Implementation du composant que nous utiliserons pour afficher l'integralite de notre contenu
const TaskContainer = () => {

  // creation d'un etat de la liste des taches
  const [tasksList, setTasksList] = useState([]);

  // fonction d'ajout de tache
  const addTask = (title) => {
    const newTask = {
      id: tasksList.length + 1,
      title,
      // title: title,
      completed: false
    };
    // On utilise le spread operator ... pour mettre a jour notre liste de taches
    setTasksList([...tasksList, newTask]);
  };

  // fonction edition tache
  const editTask = (id, completedValue) =>{
    setTasksList(
      tasksList.map((task) => 
      task.id === id ? {...task, completed: completedValue} : task
      )
    );
  };

  // fonction supprimer tache
  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  // fonction compter le nombre de tache complete
  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const incompletedTasks = tasksList.length - completedTasks;
    return {
      completedTasks,
      incompletedTasks
    };
  }

  // recuperation du nombre de taches
  const { completedTasks, incompletedTasks } = getTaskCounts();
  // console.log(completedTasks, incompletedTasks);

  // console.log('taskList: ' ,tasksList);

  return (
    <main>
      <Header />
      {/* passons la methode au composant */}
      <TaskInput addTask={addTask} />
      <TaskList 
        tasksList = {tasksList}
        editTask = {editTask}
        deleteTask = {deleteTask}
        incompletedTasks = {incompletedTasks}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  )
}

export default TaskContainer

