/* eslint-disable react/no-unescaped-entities */
 
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
    
    // Adaptation de l'affichage de la liste selon son statut
    if (taskList && taskList.length > 0){
        return (
            <div className="box">
                <h2 className={styles.title}>
                    {incompletedTasks > 0 && (
                        <>📝 Il vous reste encore <span className="important">{incompletedTasks}</span> tâches à accomplir ! ✍️</>
                    )}

                    {incompletedTasks === 0 && (
                        <>🤝 Genial, vous avez accompli toutes vos tâches ! 🥳</>
                    )}
                    
                </h2>
                {
                    taskList && taskList.length > 0 && (<ul className={styles.container}>
                        {/* <TaskItem /> */}
                        {taskList}
                    </ul>)
                }
                
            </div>
        );
    }

    // Sinon on return un empty state/un element vide !
    return (
        <div className="box">
            <h2 className={styles.emptyState}>
                👋 Hey there, Vous n'avez rien a faire pour le moment ! <br />
                🎉 Profitez bien de votre temps libre ! 🥳🎊
            </h2>
        </div>
    );
};

export default TaskList;