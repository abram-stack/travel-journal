import React from 'react';
import Card from './components/Card';
import places from './data';

export default function App() {
  const cardEl = places.map((place) => {
    return <Card key={place.id} place={place} />;
  });

  return (
    <>
      <header>
        <div className='logo-container'>
          <p>🌏</p>
          <p className='logo'>my travel journal</p>
          <p>🥘</p>
        </div>
      </header>
      <main>{cardEl}</main>
    </>
  );
}
