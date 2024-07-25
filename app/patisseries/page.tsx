import Link from 'next/link';
import Image from 'next/image';

export default function One() {
  return (
    <div>
      <h1>Chocolate Brownie</h1>
      <Image
        src="/alsa.png"
        alt="Alsa Chocolat Brownie"
        width={500}
        height={300}
        layout='responsive'
        />
      <p>Recette impossible à rater.</p>
      <p>Ingrédients:</p>
      <p>2 oeufs and 125g de beurre</p>
      <p>1. Verser le contenu du sachet dans un saladier</p>
      <p>y rajouter 125g de beurre fondu et 2 oeufs.</p>
      <p>2. Battre pendant 30 secondes jusqu'à homogénéité.</p>
      <p>3.Verser dans le moule inclus dans la boîte.</p>
      <p>Cuire pendant 40m à 160 degrès, laissez refroidir puis</p>
      <p>Dégustez!</p>
      <Link href="/recipes">Retour </Link>
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
