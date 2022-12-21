## LE TEST

### Les libs 

- https://chakra-ui.com/getting-started
  
### A faire

- clean de l'application (fait ce qui te parait nécessaire pour optimiser l'application et la lisibilité du code)
	- Pour nettoyer le code, j'ai réalisé une fonction **returnGens** afin de supprimer la redondance des balises **Box**. De plus cela permet à l'ajout d'une personne dans la liste, d'ajouter automatiquement sa balise. 
	- On pourrait également réduire la taille de la liste dans le code mais je n'ai pas trouvé de solution intéressante 

- Implémenter un tri par âge (croissant/décroissant)
	- Le tri par age se fait donc via un bouton qui appel la fonction **sortsByAge**. Cette fonction utilise la variable **sortedAscending** (pour connaitre l'état actuel du tri), mis à jour avec à l'aide de **useState()**, ainsi que la liste des personnes afin de récupérer leurs âges. 

- Implémenter un background color différent entre les ages : plus c'est vieux plus c'est sombre
	- Le changement se fait dans la fonction **returnGens** expliqué précédemment. En plus de récupérer le nom de la personne, on récupère son âge. On arrondi son âge à la dizaine, et on joue avec le dégradé de couleur proposé par chakra (pour l'exemple j'ai utilisé la couleur Teal). Par exemple pour une personne de 43 ans, on appellera la couleur teal.400. Pour les personnes de moins de 5 ans, on affiche la couleur teal.50 .

- Fait un truc qui te parait agréable à l'oeil (tu as carte blanche, mais te prends pas trop la tête non plus)
	- J'ai fais un affichage assez simple. L'objectif était que tout le contenu s'affiche sans avoir le besoin de scroller. Pour cela, j'ai simplement utilisé la balise **Grid** de chakra en précisant un léger gap entre les cellules. Dans chaque cellule, après le nom de la personnes j'ai mis un **spacer** pour faire un retour à la ligne et ainsi aligner les boutons **Afficher** entre eux.  J'ai également mis des marges à chaque objet pour libérer un peu le tout. Et enfin, j'ai fais transformer en liste les Laures & Edmond à l'aide de **UnorderedList** et **ListItem**. 
	
- Intégrer cette api https://api.genderize.io pour obtenir des infos sup de la personne en fonction de son prénom (on est d'accord que c'est un peu sexiste c'est pas fou... mais j'ai pas trouvé mieux en rapport avec le prénom, don't judge me)
	- J'ai intégré l'API dans la fonction **displayProfile()**. Ainsi lors du clic sur le bouton afficher du personnage, on fais une requête GET à l'API avec en paramètre le prénom de la personne, et on affiche le résultat que l'on stock dans la variable **genderProfileDisplayed** qui se met à jour automatiquement grâce à **useState()** et **setGenderProfileDisplayed()**

- le titre de la page (document.title) doit prendre le nom de la personne sélectionnée (tips : useEffect)
	- Le titre de la page se met à jour à chaque modification de **profileDisplayed**. On le fait avec **useEffect()** qui est appelé après chaque modification du DOM.

- Afficher la moyenne d'âge de toutes les personnes en haut de la page
	- Pour afficher la moyenne d'age, j'ai simplement créer une fonction **meanAge()** qui récupère additionne l'age de toutes les personnes et qui divise la somme par le nombres de total de personnes.
  

- Choses que je veux voir absolument dans le code :

	- un Context (https://reactjs.org/docs/context.html) (tips: ça implique de découper ton code en plusieurs fichiers/composants)
		- Malheureusement je n'ai pas réussi à réaliser les context en TypeScript. Après de nombreuses recherches, aucune solution ne fonctionnait, notamment avec l'erreur lors de la création du contexte ( React.createContext() ) qui demandait un argument. J'ai déjà réalisé des context en JavaScript auparavant mais cela ne m'a pas aidé. Cependant, si vous avez du temps, je serai très intéressé de savoir ce qu'il fallait faire pour que cela fonctionne.   

	- un peu de typage avec Typescript
		- J'ai réaliser le typage le plus pertinent possible, il est possible de pouvoir l'améliorer sur certains points. 


### Temps de Réalisation : une après-midi (4-5 heures)