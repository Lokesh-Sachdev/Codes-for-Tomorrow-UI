import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { SiPostgresql } from 'react-icons/si';

const Card = ({ id, title, body, onRemove }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-icon">
          <SiPostgresql size={45} />
        </div>
        <div>
          <p>{title}</p>
          <p>{body}</p>
          <p>Mon, 21 Dec 2020 14:57 GMT</p>
        </div>
      </div>
      <button onClick={() => onRemove(id)}>
        <RxCross2 size={50} />
      </button>
    </div>
  );
};

export default Card;
