import Link from 'next/link';
import '../styles.css'
import Navbar from '../page'

export default function About() {
  return (
    <div>
      <h1 className='about-recipes'>À propos de My Recipes</h1>
      <div className='about-text'>
        <figure className='image-about'>
          <img src='notting.jpg' width="390px"></img>
        </figure>
        <p>Dans ce site, je vais partager mes recettes et pâtisseries favorites.</p>
        <br></br>
        <p>Il y aura principalement des pâtisseries, mais je partagerai également des recettes de tous les jours.</p>
        <p>Bien sûr, vous trouverez mes erreurs à ne pas reproduire et les conseils que je peux donner.</p>
        <br></br>
        <p>Ce site est en cours de développement! Pleins de recettes sont à venir.</p>
        <br></br>
        <p>
          Contactez-moi par <a href="mailto:soukaina.hassani@epitech.eu">mail</a> ou retrouvez-moi sur{' '}
          <a href="https://github.com/SoukainaHassani" target="_blank" rel="noopener noreferrer">GitHub</a>!
        </p>
      </div>
      <Link href="/" className='go-homepage'>
      Page d'accueil
      </Link>
    </div>
  );
}