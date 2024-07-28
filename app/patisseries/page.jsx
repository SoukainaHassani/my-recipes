import Link from 'next/link';
import Image from 'next/image';
import "../recettes.css"

export default function Pat() {
  return (
    <div>
        <ul className='food-list'>
          <li><a href='patisseries/1'>Gâteau au chocolat</a></li>
          <li><a href='patisseries/2'>Brownie au chocolat</a></li>
          <li><a href='patisseries/3'>Cookies</a></li>
          <li><a href='patisseries/4'>Muffins</a></li>
          <li><a href='/'>Retour</a></li>
        </ul>
    </div>
  );
}
