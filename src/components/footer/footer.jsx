import styles from "./Footer.module.css";

export const Footer = ({ completedTasks }) => {
  const currentYear = new Date().getFullYear();

  if (completedTasks) {
    return (
      <footer>
        <code className={styles.footer}>
          Avec TaskFlow, vous avez eliminé&nbsp;{" "}
          <span className="important">{completedTasks}</span> &nbsp;tâche
          {completedTasks > 1 ? "s" : ""}
          {/* {completedTasks > 1 ? 's' : null} */}
        </code>
        <p className={styles.footer}>
          Copyright ©️&nbsp;
          <a href="https://sdley.github.io/" target="_blank">
            {" "}
            sdley{" "}
          </a>
          &nbsp;
          {currentYear}
        </p>
      </footer>
    );
  }

  /*
    Note:
        En React on se doit d'eviter d'avoir des composants qui ne retournent rien.
        Pour palier cela, nous pouvons retourner null, ou une balise vide ou encore un frangment <></>.
        Cela evite les erreurs ou d'avoir des composants qui ne retounent rien !
        return null;
    */
  return (
    <div className={styles.footer}>
      Copyright ©️&nbsp;
      <a href="https://sdley.github.io/" target="_blank">
        {" "}
        sdley{" "}
      </a>
      &nbsp;
      {currentYear}
    </div>
  );
};
