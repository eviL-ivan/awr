import React from "react";
import styled from "styled-components";
import Documents from "./Documents";

const Content = ({ className, organization, directions }) => {
  return (
    <section className={className}>
      <Documents organization={organization} directions={directions} />
    </section>
  );
};

export default styled(Content)`
  transition: all 0.3s;
  padding: 20px;
  padding-top: 30px;
  width: 100%;
`;
