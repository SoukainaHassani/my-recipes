import Link from 'next/link';
import React from 'react';
import '../recettes.css'

export default function Recipes() {
    return (
      <div>
          <ul className='food-list'>
            <li><a href='/1'>French Tacos</a></li>
            <li><a href='/2'>Wrap au poulet frit</a></li>
            <li><a href='/3'>Kebab</a></li>
            <li><a href='/4'>Burger au poisson pané</a></li>
            <li><a href='/'>Retour</a></li>
          </ul>
      </div>
    );
}
