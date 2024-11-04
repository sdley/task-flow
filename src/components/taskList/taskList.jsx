 
// Nous utilisons ce composant pour afficher la liste des taches


import  TaskItem  from "../taskItem/taskItem";
import styles from "./TaskList.module.css";

function TaskList()  {
    return (
        <div className="box">
            <h2 className={styles.title}>
                📝 Il vous reste encore x taches a accomplir !
            </h2>
            <ul className={styles.container}>
                <TaskItem />
            </ul>
        </div>
    );
};

export default TaskList;