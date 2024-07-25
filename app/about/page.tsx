import Link from 'next/link';
import '../styles.css'
import { aboutText } from '../content';
import Navbar from '../page'

export default function About() {
  return (
    <div>
      <h1 className='about-recipes'>À propos de My Recipes</h1>
      <div className='about-text' dangerouslySetInnerHTML={{__html: aboutText}} />
      <Link href="/" className='go-homepage'>
      Page d'accueil
      </Link>
    </div>
  );
}