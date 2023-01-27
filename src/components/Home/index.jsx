import styled from "styled-components";
import { useState } from "react";
import Title from "../Title";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const Main = styled.div`
    width: 100%;
    background-color: rgb(255, 255, 100);
    min-height: 300px;
    border-radius: 10px;
    padding: 20px;
    .text {
      font-size: 30px;
      color: gray;
      margin-top: 20px;
    }
  `;

  return (
    <Main>
      <Title title="Home" />
      <div className="text">
        <p>Inizia il tuo shopping!</p>
      </div>
    </Main>
  );
};

export default Home;
