import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../recettes.css'


function ImageGallery() {
  return (
    <div className="image-gallery">
      <Link href='/patisseries'>
        <Image
          src="/patisseries.png"
          alt="Pâtisseries"
          width={400}
          height={300}
        />
      </Link>
      <Link href='/plats'>
      <Image
        src="/plats.png"
        alt="Plats"
        width={400}
        height={300}
      />
      </Link>
      <Link href='/fastfood'>
      <Image
        src="/fastfood.png"
        alt="Fast-food"
        width={400}
        height={300}
      />
      </Link>
    </div>
  );
}

export default function Recipes() {
  return (
    <div>
      <h1 className='title-recettes'>Qu'est-ce qu'on mange?</h1>
      <ImageGallery />
      <Link href="/" className='page-accueil'>Page d'accueil</Link>
    </div>
  );
}
