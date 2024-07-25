import Link from 'next/link';

export default function Two() {
  return (
    <div>
      <h1>Chocolate cake</h1>

      <p>Recette que je fais depuis plus de 7 ans</p>
      <p>Recette de 750g</p>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/9ZOEZ-iC6z4?si=3UmvAFGYMyvcw9DB" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <p>Ingrédients:</p>
      <p>200g de chocolat
        125g de farine
        125g de beurre
        100g de sucre
        5 œufs
        1/2 sachet de levure chimique</p>
        <p>Attention: La recette originelle propose 250 grammes de sucre, mais c'est beaucoup trop</p>
        <p>donc je mets seulement 100 grammes.</p>
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
