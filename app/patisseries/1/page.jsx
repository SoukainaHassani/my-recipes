import React from "react";
import Tooltip from "../../Tooltip"

export default function Pat() {
    return (
      <div>
        <div className="ingredients">
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
            </p>
        </div>
      </div>
    );
  }
