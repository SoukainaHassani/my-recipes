import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About My Recipes</h1>
      <p>Dans ce site, je vais vous partager mes recettes et pâtisseries préférées.</p>
      <Link href="/">Page d'accueil</Link>
      <footer className='footer'> 
        <p>Crée par
        <a href="https://github.com/SoukainaHassani"
        target="_blank" rel="noopener noreferrer"> Soukaina
        </a>
        </p>
      </footer>
    </div>
  );
}
 // ajouter mon nom + image gateau idealement et recette dans une autre page