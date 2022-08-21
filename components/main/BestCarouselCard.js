import styled from 'styled-components';
import Image from 'next/image';

function BestCarouselCard({ bestRecipe }) {
  return (
    <BestCard>
      <Image
        src="/images/음식.jpg"
        alt="bestRecipeImg"
        width={233}
        height={307}
      />
    </BestCard>
  );
}

export default BestCarouselCard;

const BestCard = styled.div`
  .img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 30rem;
    object-fit: contain;
  }
`;
