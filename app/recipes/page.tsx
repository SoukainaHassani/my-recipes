import Link from 'next/link';

export default function Recipes() {
  return (
    <div>
      <h1>Pâtisseries</h1>
      <Link href="/one">Chocolate Brownie </Link>
      <Link href="/two">Chocolate Cake </Link>
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
