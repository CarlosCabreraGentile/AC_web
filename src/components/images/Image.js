import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const Image = (props) => {
  return (
    <Card
      title={props.item.model}
      cover={<img alt="example" src={props.item.thumbnail} />}
    >
      <AdditionalInfo>
        <p>{props.item.make}</p>
        <p>({props.item.year})</p>
         <ButtonColor color={props.item.color}>
        </ButtonColor>
      </AdditionalInfo>
    </Card>
  );
};

const AdditionalInfo = styled.div`
  display: flex;
`;

const ButtonColor = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${(p) => p.color};
`;

export default Image;
