import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

function LoversCard({ lover }) {
  return (
    <Link href="/[id]" as={`/${lover.id}`}>
      <Container>
        <LoversCards>
          <CardContent>
            <Image
              src={lover.thumbnail}
              alt="ProfileImg"
              width={73}
              height={73}
            />
            <CardNickName>
              <Nickname>{lover.name}</Nickname>
              <Image
                src={lover.rating_mark_image}
                alt="Grade"
                width={10}
                height={10}
              />
            </CardNickName>
          </CardContent>
        </LoversCards>
      </Container>
    </Link>
  );
}

export default LoversCard;

const Container = styled.div`
  margin-bottom: 50px;
`;

const LoversCards = styled.div`
  width: 99px;
  height: 130px;
  margin: 0 25px;
  background-color: #fbfbfb;
  box-shadow: 1px 1px 5px 1px ${props => props.theme.colors.lightGray};
  border-radius: 15%;
`;

const CardContent = styled.div`
  padding: 15px 0;
  cursor: pointer;

  img {
    border-radius: 50%;
  }
`;

const CardNickName = styled.div`
  margin-top: 10px;
  ${props => props.theme.flex.flexBox()};
`;

const Nickname = styled.div`
  margin: 0 3px;
  font-size: ${props => props.theme.fontSizes.xs};
`;
