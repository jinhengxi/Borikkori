import React from 'react';


const SimilarCarouselCard = ({itemImg}) => {
    return (
        <div>
        <img
          src={itemImg}
          alt="simillars"
          width={233}
          height={307}
        />
      </div>
    );
};


export default SimilarCarouselCard;