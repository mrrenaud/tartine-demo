# tartine-demo

Démo de l'utilisation de React pour créer de simples composants, indépendants. 
Sans nécessairement passer par une SPA complète avec [Create React App](https://github.com/facebook/create-react-app)

La config permet de builder une librairie, avec du code splitting, qui peut être hostée sur un CDN. Les chunks sont loadés dynamiquement 
au runtime sur base de l'url d'origine du script grâce à la mise à jour de *__webpack_public_path__*.

Pour intégrer un composant dans un site quelconque, il suffit de :
- référencer le point d'entrée principal de la librairie (app.min.js)
- ajouter un élément dans le DOM avec un id particulier

Il est possible de passer des paramètres au composant qui va être initialisé, en ajoutant des attributes data-* sur l'élément du DOM.

Ce genre de structure laisse la liberté au développeur de bootstraper un projet web facilement, avec des technos classiques comme ASP.NET Core et Razor, 
et utiliser React pour certains composants très dynamiques. 

Cela permet également de mélanger différentes technos, et d'intégrer des composants en React, en Angular, en VueJS, dans un site legacy qui serait déjà fait en HTML / JS. 
