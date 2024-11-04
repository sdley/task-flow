// Nous utilisons ce composant pour afficher une tache

import styles from './TaskItem.module.css';

function TaskItem() {
    return (
        <li className={`${styles.container} ${styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>1</div>
                <div className={styles.contentDefault}>
                    Checker les nouveautes de React.js
                </div>
            </div>
            <button className='button-primary'>x</button>
        </li>
    );

};

export default TaskItem ;