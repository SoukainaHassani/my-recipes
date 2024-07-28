import React from "react";
import Tooltip from "../../Tooltip"
import '../../styles.css'

export default function Pat() {
    return (
      <div>
        <div className="recipes">
            <p>Ingrédients:</p>
            <p>200g de chocolat</p>
            <p>125g de farine</p>
            <p>125g de beurre</p>
            <p>100g de sucre</p>
            <p>5 œufs</p>
            <p>1/2 sachet de levure chimique</p>
            <br></br>
            <p>1. Séparer les blancs des jaunes d'oeufs dans deux saladiers distincts.</p>
            <p>
              2. Battre les blancs d'oeufs jusqu'à avoir une texture nuageuse.
              <Tooltip
                text=""
                tooltipText="Le mieux est de battre avec un batteur éléctrique ou un robot patissier pour obtenir une texture idéale."
                />
            </p>
            <p>
              3. Faire cuire le beurre et le chocolat dans une casserole à feu doux.
              <Tooltip
                text=""
                tooltipText="Surveillez bien la cuisson! Le chocolat ne doit pas brûler."
              />
            </p>
            <p>4. Verser le sucre à l'intérieur des jaunes d'oeufs et mélanger jusqu'à obtenir une couleur jaunâtre claire et une texture homogène.</p>
            <p>5. Incorporer le mélange beurre-chocolat fondu dans le mélange jaune d'oeufs-sucre, et bien mélanger.</p>
            <p>6. Verser la farine et la levure dans le mélange chocolaté.</p>
            <p>
              7. Verser les blancs d'oeufs dans le melange chocolaté et mélanger tout doucement.
              <Tooltip
                text=""
                tooltipText="Mélanger trop rapidement fait retomber les blancs et empêche une texture aérée."
              />
            </p><br></br>
            <p>Note:</p>
            <p>Un gâteau que je fais depuis plus de 8 ans maintenant!</p>
            <p>Si vous aimez les gâteaux à la texture "éponge", rajoutez un peu plus de farine.
            Sinon, faites comme moi et diminuez la quantité de farine. Cette dernière joue un rôle dans la texture du gâteau.
            Même chose pour la cuisson, plus il reste au four, plus la texture sera épongeuse, et étant donné que je déteste ça,</p>
            <p>je fais tout mon possible pour le retirer le plus rapidement possible, tout en vérifiant bien sûr que l'intérieur est cuit.</p>
            <br></br>
            <p>La recette originelle propose 250 grammes de sucre, c'est, à mon avis, beaucoup trop. Je vous conseille donc de réduire la quantité de sucre! C'est toujours mieux.</p>
            <br></br><br></br>
            <li><a href='/patisseries'>Retour</a></li>
            <br></br><br></br>
        </div>
      </div>
    );
  }
