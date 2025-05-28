# Instructions de déploiement

## Déploiement sur GitHub Pages

1. Créez un nouveau repository sur GitHub
2. Uploadez tous les fichiers de ce ZIP dans le repository
3. Allez dans Settings > Pages
4. Dans 'Source', sélectionnez la branche 'main' et le dossier '/ (root)'
5. Cliquez sur 'Save'

Votre outil sera accessible à l'adresse: https://[votre-username].github.io/[nom-repo]/

## Personnalisation

Pour modifier les couleurs, cherchez les codes suivants dans style.css:
- Jaune: #fce552
- Orange: #fc7862
- Bleu: #829aff
- Vert: #c6fbcf

## Structure des fichiers

- index.html: Structure principale de l'application
- style.css: Tous les styles visuels
- script.js: Logique de l'application
- README.md: Documentation du projet
- LICENSE: Licence MIT
- .gitignore: Fichiers à ignorer dans Git

## Lien newsletter

Le lien vers la newsletter est configuré dans index.html:
```html
<a href="https://bustercall.substack.com/" class="newsletter-button">S'abonner à la newsletter</a>
```
