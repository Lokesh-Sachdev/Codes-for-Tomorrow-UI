import React from 'react';
import Card from './Card';

const CardList = ({ data, onRemove, grid }) => {
  const container = grid ? 'card-grid' : 'card-list';

  return (
    <div className={`cards__container ${container}`}>
      {data.map((card) => (
        <Card key={card.id} {...card} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default CardList;
