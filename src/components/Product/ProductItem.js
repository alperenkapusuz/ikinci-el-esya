import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const ProductItem = (props) => {
  return (
    <div>
      <Card body color="primary" outline>
        <CardBody>
          <CardTitle tag="h5">
            {props.title}
          </CardTitle>
          <CardText>
            {props.description}
          </CardText>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.price} 
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.place} 
          </CardSubtitle>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
      {/* <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.place}</p>
        <button>
          button
        </button> */}
    </div>
  );
};

export default ProductItem;
