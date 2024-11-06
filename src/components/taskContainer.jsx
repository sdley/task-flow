import { useEffect, useState } from "react"
import { Footer } from "./footer/footer"
import Header from "./header/header"
import TaskInput from "./taskInput/taskInput"
import TaskList from "./taskList/taskList"



// Implementation du composant que nous utiliserons pour afficher l'integralite de notre contenu
const TaskContainer = () => {

  // creation d'un etat de la liste des taches
  // const [tasksList, setTasksList] = useState([]);

  /*
    Nous allons utiliser l'API localStorage du navigateur 
    pour stocker les tâches dans le stockage local.
  */

  // Récupérer les tâches du stockage local lors du chargement initial
  const [tasksList, setTasksList] = useState(() => {
    const storedTasks = localStorage.getItem('my-tasksList');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Mettre à jour le stockage local chaque fois que la liste des tâches change
  useEffect(() => {
    localStorage.setItem('my-tasksList', JSON.stringify(tasksList));
  }, [tasksList]);


  // fonction d'ajout de tache
  const addTask = (title) => {
    const newTask = {
      // id: tasksList.length + 1,
      id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
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

  // Utilisation du localStorage pour sauvegarder l'etat de nos taches/states

  /*
    2. Ensuite nous rechargeons les donnees du localStorage dans le state au chargement/rechargement de la page.
    En effet useEffect 2 doit s'executer avant le premier pour ne pas ecraser les donnees.
  */
  // useEffect(() => {
  //   const data = localStorage.getItem('my-tasks-list');
  //   // Nous verifions s'il y a reellement des donnees
  //   if (data){
  //     setTasksList(JSON.parse(data));
  //   }
  //   console.log('my-tasks-list data: ', data);
  //   console.log('my-tasks-list JSON.parse(data): ', JSON.parse(data));
  // }, []);
  
  // // 1. sauvegarde de l'etat
  // useEffect(() => {
  //   localStorage.setItem('my-tasks-list', JSON.stringify(tasksList));
  //   console.log('my-tasks-list 1: ', JSON.stringify(tasksList));
  // });

  
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

