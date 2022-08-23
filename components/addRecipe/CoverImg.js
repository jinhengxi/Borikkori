import { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

function CoverImg({handleLoadCoverImg,coverImg}) {
  const imgRef = useRef();

  const handleFileUpload = () => {
    imgRef.current.click();
  };

  // 파일 삭제
  // const handleRemoveImg = () => {
  //   URL.revokeObjectURL(imgFile);
  //   setImgFile('');
  // };

  return (
    <Container>
      {coverImg ? (
        <Image
          src={coverImg}
          alt="RecipeCoverImg"
          width={970}
          height={440}
        />
      ) : (
        <>
          <Explanation>
            추가하기 버튼으로 커버사진을
            <br />
            업로드 해주세요.
          </Explanation>
          <AddImg onClick={handleFileUpload}>커버 사진 추가</AddImg>
        </>
      )}
      <FileInput
        onChange={handleLoadCoverImg}
        type="file"
        accept="img/*"
        ref={imgRef}
      />
    </Container>
  );
}

export default CoverImg;

const Container = styled.div`
  width: 100%;
  height: 440px;
  margin-top: 10px;
  ${props => props.theme.flex.flexBox('column')};
  background-color: #f4f3f2;
`;

const Explanation = styled.div`
  text-align: center;
  color: #969696;
  font-size: ${props => props.theme.fontSizes.small};
`;

const AddImg = styled.div`
  width: 168px;
  height: 55px;
  margin-top: 15px;
  background-color: gray;
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};
  ${props => props.theme.flex.flexBox()};
  cursor: pointer;

  &:active {
    background-color: #969696;
  }
`;

const FileInput = styled.input`
  display: none;
`;
