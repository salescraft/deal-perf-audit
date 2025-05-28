# Guide de Personnalisation

## Couleurs

Les couleurs principales utilisées dans l'application:

- Jaune: `#fce552` - Utilisé pour les accents et highlights
- Orange: `#fc7862` - Utilisé pour les boutons primaires et CTAs
- Bleu: `#829aff` - Utilisé pour les informations et liens
- Vert: `#c6fbcf` - Utilisé pour les succès et validations

Pour changer ces couleurs, cherchez et remplacez ces codes hexadécimaux dans le fichier `style.css`.

## Contenu et Textes

### Modification du titre principal

Modifiez la balise `<title>` dans `index.html` et cherchez les en-têtes H1/H2 dans le corps du document.

### Modification des questions

Les questions sont définies dans l'objet `questions` dans `script.js`. Chaque question a:
- `id`: Identifiant unique
- `text`: Texte de la question
- `options`: Tableau des options de réponse
- `multiple`: Si true, permet la sélection multiple

### Modification des conseils et plans d'action

Les conseils sont générés dynamiquement en fonction des réponses dans la fonction `generateAdvice()` 
dans `script.js`.

## Liens et CTA

Le lien principal vers la newsletter se trouve dans `index.html` :
```html
<a href="https://bustercall.substack.com/" class="newsletter-button">S'abonner à la newsletter</a>
```

## Animations et Interactions

Pour modifier les animations:
1. Cherchez les classes CSS avec `transition` ou `animation`
2. Ajustez les durées ou courbes d'accélération selon vos préférences

## Responsive Design

L'application utilise des media queries pour s'adapter aux différents écrans:
```css
@media (max-width: 768px) {
  /* Styles pour tablettes */
}

@media (max-width: 480px) {
  /* Styles pour mobiles */
}
```

## Ajout de fonctionnalités

Pour ajouter de nouvelles fonctionnalités:
1. Définissez la structure HTML dans `index.html`
2. Ajoutez les styles dans `style.css`
3. Implémentez la logique dans `script.js`

## Tracking et Analytics

Pour ajouter Google Analytics ou autre outil de tracking:
1. Ajoutez le code de tracking dans `<head>` de `index.html`
2. Considérez l'ajout d'événements personnalisés pour suivre les interactions clés
