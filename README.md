# Psycho Santé 74 — Site Astro

Migration du site psycho-sante74.com depuis un miroir HTTrack vers Astro + Tailwind CSS.

## Stack

- **Framework** : [Astro](https://astro.build) (Static Site Generation)
- **CSS** : [Tailwind CSS](https://tailwindcss.com)
- **Déploiement** : [Cloudflare Pages](https://pages.cloudflare.com)
- **Repository** : GitHub (privé)

---

## Structure du projet

```
psycho-sante74/
├── public/
│   ├── images/          ← toutes les images du miroir
│   ├── robots.txt
│   └── _redirects       ← redirections Cloudflare Pages
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── emdr.astro
│   │   ├── tcc.astro
│   │   ├── pnl.astro
│   │   ├── sexologie.astro
│   │   ├── dietetique.astro
│   │   ├── kinesiologie.astro
│   │   ├── sabine-accorsini.astro
│   │   ├── marie-koeberle.astro
│   │   ├── sophie-durand.astro
│   │   ├── anne-berthion.astro
│   │   ├── mentions-legales.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## ① Copier les images depuis le miroir HTTrack

Depuis le dossier racine du miroir HTTrack, exécutez ce script :

```bash
# Adapter MIRROR_PATH au chemin de votre miroir HTTrack local
MIRROR_PATH="./www.psycho-sante74.com"
DEST="./public/images"

mkdir -p "$DEST"

# Images cabinet (slider)
for i in 1 2 3 4 5 6 7; do
  cp "$MIRROR_PATH/wp-content/uploads/2016/08/images-cabinet-${i}.jpg" "$DEST/" 2>/dev/null
done

# Logo SVG
cp "$MIRROR_PATH/wp-content/uploads/2019/10/logo-6-copie-copie.svg" "$DEST/"

# Sabine Accorsini
cp "$MIRROR_PATH/wp-content/uploads/2022/02/Portrait-Sabine-Accorsini-1.jpg" "$DEST/"
cp "$MIRROR_PATH/wp-content/uploads/2022/03/CARTE-SABINE-ACCORSINI-2.jpg" "$DEST/"

# Marie Koeberle
cp "$MIRROR_PATH/wp-content/uploads/2023/05/PHOTO-PROFIL-1.jpg" "$DEST/"
cp "$MIRROR_PATH/wp-content/uploads/2023/05/marie-320-240.jpg" "$DEST/"
cp "$MIRROR_PATH/wp-content/uploads/2023/06/IMG-0762-2.jpg" "$DEST/"
cp "$MIRROR_PATH/wp-content/uploads/2023/05/carte-2-1.jpg" "$DEST/"

# Sophie Durand
cp "$MIRROR_PATH/wp-content/uploads/2023/11/sophie-320-240.jpg" "$DEST/"

# Anne Berthion
# Note : la photo profil d'Anne Berthion est dans 2025/02/
# et porte le même nom que celle de Marie — renommer à la copie :
cp "$MIRROR_PATH/wp-content/uploads/2025/02/PHOTO-PROFIL-1.jpg" "$DEST/anne-PHOTO-PROFIL-1.jpg"
cp "$MIRROR_PATH/wp-content/uploads/2025/02/anne-320-240.jpg" "$DEST/"

echo "✅ Images copiées dans $DEST"
```

---

## ② Installation locale

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:4321

---

## ③ Build de production

```bash
npm run build
# Les fichiers statiques sont dans ./dist/
```

---

## ④ Déploiement Cloudflare Pages

### Connexion du repository

1. Aller sur https://dash.cloudflare.com → **Pages** → **Create a project**
2. Connecter votre compte GitHub et sélectionner le repo `psycho-sante74`
3. Configurer le build :

| Paramètre | Valeur |
|-----------|--------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `18` (ou supérieure) |

4. Cliquer sur **Save and Deploy**

### Domaine personnalisé

1. Dans Cloudflare Pages → votre projet → **Custom domains**
2. Ajouter `psycho-sante74.com` et `www.psycho-sante74.com`
3. Cloudflare mettra à jour automatiquement les DNS si le domaine est géré sur Cloudflare
4. Si le domaine est chez un autre registrar, pointer les nameservers vers Cloudflare

---

## ⑤ Pages et URLs

| Page | URL |
|------|-----|
| Accueil | `/` |
| EMDR | `/emdr/` |
| TCC | `/tcc/` |
| PNL | `/pnl/` |
| Sexologie | `/sexologie/` |
| Diététique | `/dietetique/` |
| Kinésiologie | `/kinesiologie/` |
| Sabine Accorsini | `/sabine-accorsini/` |
| Marie Koeberle | `/marie-koeberle/` |
| Sophie Durand | `/sophie-durand/` |
| Anne Berthion | `/anne-berthion/` |
| Mentions légales | `/mentions-legales/` |

---

## ⑥ SEO

- `title` et `meta description` conformes au miroir original
- `canonical` automatique sur chaque page
- `Open Graph` configuré
- `robots.txt` présent
- `sitemap.xml` généré automatiquement par `@astrojs/sitemap`
- Redirections des anciennes URLs WordPress dans `public/_redirects`

---

## Couleurs et typographie

| Élément | Valeur |
|---------|--------|
| Couleur principale | `#7EBEC5` |
| Police | Open Sans (Google Fonts) |
| Breakpoints | Tailwind par défaut (sm: 640px, md: 768px, lg: 1024px) |
