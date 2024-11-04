// Ce composant sera utilise pour afficher le champ de saisie de nos taches
import styles from "./taskInput.module.css"

function TaskInput() {
  return (
    <div className={`box ${styles.element}`}>
        <h2 className={styles.title}>🎯 Ajouter une tâche</h2>
        <form action="" className={styles.container}>
          <input 
            type="text" 
            name="" 
            id="" 
            className={styles.input}
            placeholder="Indiquer une nouvelle tache"
          />
          <button type="submit" className="button-primary">Ajouter</button>
        </form>
    </div>
  )
}

export default TaskInput