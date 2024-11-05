// Ce composant sera utilise pour afficher le champ de saisie de nos taches
import { useState } from "react";
import styles from "./taskInput.module.css"

function TaskInput({addTask}) {
  const [taskTitle, setTaskTitle] = useState("")

  // console.log(addTask);

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };
  // console.log(taskTitle);

  const handleAddtask = (e) => {
    // Empecher le rechargement de la page a l'envoie des donnees
    e.preventDefault();
    /*
      Pour eviter d'ajouter des taches vides dans notre application,
      nous utilisons la methode trim() de JS pour supprimer les espaces en debut et fin chaines
    */
    if(taskTitle.trim()){
      addTask(taskTitle);
      setTaskTitle("");
      // console.log("envoie de la tache", taskTitle);
    }
    // else {
    //   console.log("Impossible une tache sans titre!");
    // }
  };

  return (
    <div className={`box ${styles.element}`}>
        <h2 className={styles.title}>🎯 Ajouter une tâche</h2>
        <form action="" className={styles.container} onSubmit={handleAddtask}>
          <input 
            required
            type="text" 
            name="" 
            id="" 
            className={styles.input}
            placeholder="Indiquer une nouvelle tache"
            onChange={handleInputChange}
            // l'attribut value nous permettra de reinitialiser le champ de saisie avec la methode setTaskTitle
            value={taskTitle}
          />
          {/* handle input change: gérer le changement de saisie */}
          <button type="submit" className="button-primary">Ajouter</button>
        </form>
    </div>
  )
}

export default TaskInput;