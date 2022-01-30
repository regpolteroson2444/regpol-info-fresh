import React from "react";
import Layout from "../components/Layouts";
import styles from "styled-components";
const StyledErrorPage = styles.div`
height: 82vh;
display:flex;
justify-content: center;
align-items: center;`;
const ErrorPage = () => {
  return (
    <Layout>
      <StyledErrorPage>
        <h1>Ooops Coś poszło nie tak.. Taka Strona Nie istnieje...</h1>
      </StyledErrorPage>
    </Layout>
  );
};

export default ErrorPage;
