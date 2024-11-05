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
            <button 
                className='button-primary'
                onClick={(e) => {
                    /*
                        stopPropagation nous permet la propagation du clic sur le simple bouton delete 
                        afin de ne pas enclencher l'edition de l'item en question ! 
                    */
                    e.stopPropagation();
                deleteTask(task.id);
                }}
            >
                <>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        // fill="currentColor" 
                        fill="#2870ff" 
                        style={{width: "20px", height:"20px"}}>
                    <path 
                        fillRule="evenodd" 
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" 
                        clipRule="evenodd" />
                    </svg>
                </>
            </button>
        </li>
    );

};

export default TaskItem ;