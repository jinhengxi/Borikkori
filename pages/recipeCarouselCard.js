import React from 'react';
import Image from 'next/image';

const RecipeCarouselCard = ({ itemImg }) => {
  return (
    <div>
      <Image src={itemImg} alt="recipes" width={233} height={307} />
    </div>
  );
};
export default RecipeCarouselCard;