import styled from 'styled-components';

import useFetch from '../../hooks/useFetch';
import LoversCard from "./LoversCard"

function Lovers() {
  const [lovers] = useFetch('http://10.58.5.197:8000/user/list?sort=3');

  return (
    <Container>
    {lovers?.map(lover => (
        <LoversCard key={lover.id} lover={lover} />
    ))}
  </Container>
  )
}

export default Lovers

const Container = styled.div`
  ${props => props.theme.flex.flexBox()};
`