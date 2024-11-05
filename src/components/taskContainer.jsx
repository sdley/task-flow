import { useState } from "react"
import { Footer } from "./footer/footer"
import Header from "./header/header"
import TaskInput from "./taskInput/taskInput"
import TaskList from "./taskList/taskList"



// Implementation du composant que nous utiliserons pour afficher l'integralite de notre contenu
const TaskContainer = () => {

  // creation d'un etat de la liste des taches
  const [tasksList, setTasksList] = useState(
    [
      // {
      //   id: 1,
      //   title: "Faire mon TP d'entrepot de donnees",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "Faire mon Lab CI/CD",
      //   completed: true
      // },

    ]
  );

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

  console.log('taskList: ' ,tasksList);

  return (
    <main>
      <Header />
      {/* passons la methode au composant */}
      <TaskInput addTask={addTask} />
      <TaskList />
      <Footer />
    </main>
  )
}

export default TaskContainer

