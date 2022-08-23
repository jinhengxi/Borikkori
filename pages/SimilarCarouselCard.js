import React from 'react';
import Image from 'next/image';


const SimilarCarouselCard = ({itemImg}) => {
    return (
        <div>
        <Image
          src={itemImg}
          alt="simillars"
          width={233}
          height={307}
        />
      </div>
    );
};


export default SimilarCarouselCard;