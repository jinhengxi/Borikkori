import React from 'react';
import Image from 'next/image';


const similarCarouselCard = ({itemImg}) => {
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


export default similarCarouselCard;