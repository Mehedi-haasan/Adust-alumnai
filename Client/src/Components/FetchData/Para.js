import React, { useState } from 'react';

const Paragraph = () => {
  const text="Hekuhf dchsagbdfua uhdcuwadfcw iuhduwagfdwhdf hduwagdugwdhn dgdwoi8ep09 edwgdwdsuad sygdwadw ugd76waedfw uyg8owefwhe uygfowef ughd8owef";
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {showMore ? (
        <p>{text}</p>
      ) : (
        <p>{text.slice(0, 20)}...</p>
      )}
      <button onClick={toggleText}>
        {showMore ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Paragraph;