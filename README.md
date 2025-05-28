# Legal Tajir Connect

## 📋 Description du Projet

Legal Tajir Connect est une plateforme digitale complète dédiée aux services juridiques et administratifs pour les micro-entrepreneurs et commerçants en Algérie. Cette application web moderne offre une interface bilingue (Arabe/Français) pour faciliter l'accès aux consultations juridiques, la gestion des documents administratifs et le suivi des procédures légales.

## ✨ Fonctionnalités Principales

- 🌐 Interface bilingue (Arabe/Français)
- 🔐 Système d'authentification sécurisé
- 💼 Tableau de bord personnalisé
- 📝 Gestion des consultations juridiques
- 📋 Suivi des documents administratifs
- 📊 Tableaux de bord analytiques
- 📱 Design réactif (mobile, tablette, desktop)

## 🛠️ Technologies Utilisées

- ⚛️ React 18 avec TypeScript
- 🎨 Tailwind CSS pour le style
- 🔄 React Router pour la navigation
- 🌐 i18n pour l'internationalisation
- 🔐 Gestion d'état avec React Context
- 📱 Interface utilisateur moderne avec shadcn/ui
- 🚀 Vite pour le développement rapide

## 🚀 Démarrage Rapide

1. **Cloner le dépôt**
   ```bash
   git clone [URL_DU_REPO]
   cd legal-tajir-connect
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'environnement de développement**
   ```bash
   npm run dev
   ```


## 📦 Structure du Projet

```
src/
├── components/     # Composants réutilisables
├── contexts/       # Contextes React
├── pages/          # Pages de l'application
├── assets/         # Ressources statiques
└── styles/         # Fichiers de style globaux
```

## 🌍 Internationalisation

L'application prend en charge deux langues :
- Arabe (ar) - Direction RTL
- Français (fr) - Direction LTR

Les traductions sont gérées via le contexte de langue et peuvent être facilement étendues.



## 🛠️ Comment contribuer au projet ?

### Prérequis

- Node.js (version 18 ou supérieure)
- npm (version 9 ou supérieure) ou Yarn
- Git

### Installation en local

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-utilisateur/legal-tajir-connect.git
   cd legal-tajir-connect
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir dans le navigateur**
   L'application sera disponible à l'adresse : [http://localhost:3000](http://localhost:3000)

### Workflow de développement

1. Créez une nouvelle branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```

2. Effectuez vos modifications

3. Vérifiez le code avant de le committer :
   ```bash
   npm run lint
   npm run type-check
   ```

4. Créez un commit descriptif :
   ```bash
   git add .
   git commit -m "Description claire des modifications"
   ```

5. Poussez vos modifications et créez une Pull Request


### Déploiement sur Vercel (recommandé)

1. Installez Vercel CLI :
   ```bash
   npm install -g vercel
   ```

2. Connectez-vous à votre compte Vercel :
   ```bash
   vercel login
   ```

3. Déployez l'application :
   ```bash
   vercel --prod
   ```

### Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables nécessaires :

```env
VITE_API_URL=votre_url_api
# Autres variables d'environnement
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## 📞 Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter à [votre@email.com](mailto:votre@email.com).




