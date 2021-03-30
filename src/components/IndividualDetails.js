import React, { useState } from 'react';
import kanin from './assets/kanin.png';

const IndividualDetails = ({ nodes, rootId }) => {
  const individualIndex = nodes.findIndex((node) => node.id === rootId);
  const individual = nodes[individualIndex];
  return (
    <article>
      <section className="flex items-center">
        <img src={kanin} alt="Bildet av individet" />
        <dl>
          <dt className="inline-block">Øremerke</dt>
          <dd className="inline-block text-neutralDarkBrown">
            {individual.earmark}
          </dd>
        </dl>
      </section>
    </article>
  );
};

export default IndividualDetails;
