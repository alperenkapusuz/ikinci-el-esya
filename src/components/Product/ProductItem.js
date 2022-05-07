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
            <Link to={`/ads/${props.id}`}>Detay</Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductItem;
