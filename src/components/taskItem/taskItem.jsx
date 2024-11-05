// Nous utilisons ce composant pour afficher une tache

import styles from './TaskItem.module.css';

function TaskItem({task, editTask, deleteTask}) {
    return (
        <li 
            className={`${styles.container} 
            ${task?.completed ? styles.success : styles.default}`}
            onClick={() => editTask(task.id, !task.completed)}
            /*
                task?.completed nous permet d'ajouter une mesure de securite dans 
                notre app pour eviter des bugs pour des taches
                pour lesquelles le status completed n'existe pas
            */
        >
            <div className={styles.item}>
                <div className={`${styles.id} 
                ${task?.completed ? styles.idSuccess : styles.idDefault}`}>{task.id}</div>
                <div className={task?.completed ?styles.contentSuccess : styles.contentDefault}>{task.title}</div>
            </div>
            <button className='button-primary'>x</button>
        </li>
    );

};

export default TaskItem ;