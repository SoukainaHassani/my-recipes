import Link from 'next/link';
import Image from 'next/image';

export default function Pat() {
  return (
    <div>
      <div className='title-explore'>
        <h1>Explorez</h1>
      </div>
        <ul className='food-list'>
          <li><a href='/1'>Gâteau au chocolat</a></li>
          <li><a href='/2'>Brownie au chocolat</a></li>
          <li><a href='/3'>Cookies</a></li>
          <li><a href='/4'>Muffins</a></li>
          <li><a href='/recipes'>Retour</a></li>
        </ul>
    </div>
  );
}
