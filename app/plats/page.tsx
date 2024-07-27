import Link from 'next/link';

export default function Two() {
  return (
    <div>
      <div className='title-explore'>
        <h1>Explorez</h1>
      </div>
        <ul className='food-list'>
          <p>A venir...</p>
          <li><a href='/recipes'>Retour</a></li>
        </ul>
    </div>
  );
}
