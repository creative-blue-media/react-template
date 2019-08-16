import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      <header className="Card-header">
        <p>
           {props.name}
        </p>
      </header>
      <section className="Card-body">
          <p>Let's put some information here.</p>
      </section>
      <footer>
          <p>We can close the card with this.</p>
      </footer>
    </div>
  );
}

export default Card;
