import React from 'react';
const RecipeCarouselCard = ({ itemImg }) => {
  return (
    <div>
      <img src={itemImg} alt="recipes" width={233} height={307} />
    </div>
  );
};
export default RecipeCarouselCard;