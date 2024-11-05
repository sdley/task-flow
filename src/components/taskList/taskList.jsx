 
// Nous utilisons ce composant pour afficher la liste des taches


import  TaskItem  from "../taskItem/taskItem";
import styles from "./TaskList.module.css";

function TaskList({
    tasksList,
    incompletedTasks,
    editTask, 
    deleteTask
}){
    
    const taskList = tasksList.map((task) => (
        /*
            Renseignons les proprietes de notre TaskItem
            notemment: task, editTask et deleteTask
        */
        <TaskItem 
            // definition de la clef pour react
            key={task.id} 
            task={task}
            editTask={editTask}
            deleteTask={deleteTask} 
        />
    ));
    /*
        Note: on aurait du mettre ce bout de code ci-dessus directement dans le jsx
        - Nous le faisons ainsi pour juste rendre le jsx plus propre, pour ne pas le surcharger trop !
    */
    
    
    return (
        <div className="box">
            <h2 className={styles.title}>
                📝 Il vous reste encore {incompletedTasks} taches a accomplir !
            </h2>
            {
                taskList && taskList.length > 0 && (<ul className={styles.container}>
                    {/* <TaskItem /> */}
                    {taskList}
                </ul>)
            }
            
        </div>
    );
};

export default TaskList;