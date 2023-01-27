import styled, { css } from "styled-components";

const Title = ({ title }) => {
  const Title = styled.h1`
    color: darkblue;
    font-size: 35px;
  `;

  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default Title;
