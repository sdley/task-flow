 
// Nous utilisons ce composant pour afficher la liste des taches



// import { TaskItem } from "../taskItem/taskItem";
import styles from "./TaskList.module.css";
// import { TaskItem } from "../taskItem/taskItem";

export const TaskList = () =>  {
    return (
        <div className="box">
            <h2 className={styles.title}>
                📝 Il vous reste encore x taches a accomplir !
            </h2>
            <ul className={styles.container}>
                taskList ici...
                {/* <TaskItem /> */}
                {/* <TaskItem /> */}
            </ul>
        </div>
    );
};

// export default TaskList;