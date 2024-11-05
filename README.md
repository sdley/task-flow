# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

[French] 
## Notes & Perspectives
- Les donnees de notre application ne sont pas persistantes ; Au rafraichissement de la page, on les perd toutes parce que simplement elles sont stockees dans un etat (state)
- Nous envisageons pour la suite de les stocker dans un localStorage pour pallier ce probleme.
Cela nous permet de retrouver nos taches au prochain redemarrage de l'app sans forcemment avoir besoin de les stocker dans une base de donnees ! 