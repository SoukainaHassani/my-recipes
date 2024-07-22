import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <h1>Bienvenue dans My Recipes</h1>
      <p>Page d'accueil.</p>
      <nav>
      <Link href="/recipes">Recettes </Link>
      <Link href="/about">About</Link>
      </nav>
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
