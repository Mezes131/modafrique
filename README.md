# ModAfrique

Vitrine e-commerce de **mode contemporaine africaine**.

Site live : [mezes131.github.io/modafrique](https://mezes131.github.io/modafrique/)

## Produit

ModAfrique présente une boutique fictive / démo avec :

- Hero lookbook et navigation one-page
- Catégories (Homme, Femme, Enfants, Casual, Marques)
- Grille produits (prix XAF, tailles, couleurs, badges)
- Panier client-side (ajout, quantités, total)
- Nouveautés, tendances, promo mariage, newsletter
- Arguments livraison / authenticité / retours

Contenu et images dans `src/data/content.ts` et `public/images/`.

## Stack

React 19 · TypeScript · Vite · Tailwind · Framer Motion

## Démarrer

```bash
npm install
npm run dev
```

En local : [http://localhost:5173/modafrique/](http://localhost:5173/modafrique/)  
(`base` Vite = `/modafrique/` pour GitHub Pages)

```bash
npm run build    # → dist/
npm run preview  # preview du build
npm run lint
```



## Déploiement

Push sur `main` → GitHub Actions déploie sur Pages (`.github/workflows/deploy.yml`).

Settings du repo → **Pages** → Source : **GitHub Actions**.