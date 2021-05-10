import React, { useState } from "react";
import { classes } from "./../data/classes";

// nutno zkopirovat array - sort je na místě!
const orderedClasses = classes.slice().sort((a, b) => a.order - b.order);

const TridyBox = () => {
  const [displayed, setDisplayed] = useState(0);
  return (
    <>
      <div className="tridy-buttons">
        {orderedClasses.map((cls, idx) => (
          <button
            type="button"
            id={idx}
            key={cls.id}
            className={`tridy-button ${
              Number(displayed) === Number(idx) && "tridy-button-selected"
            }`}
            onClick={(e) => setDisplayed(e.target.id)}
          >
            {cls.name}
          </button>
        ))}
      </div>
      <div className="tridy-content">
        <h3>{orderedClasses[displayed].name}</h3>
        <div className="tridy-img">
          <img src={orderedClasses[displayed].img} alt={orderedClasses[displayed].name} />
        </div>
        <div className="tridy-desc">
          <ul className="snowfall">
            {orderedClasses[displayed].longDesc.map((el, i) => (
              <li dangerouslySetInnerHTML={{ __html: el }} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TridyBox;
