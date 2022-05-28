import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "./ProductItem.css";



const ProductItem = (props) => {

  return (
    <div>
      <Card className="ProductItem__card" body outline>
        <CardBody className="ProductItem__cardBody">
          <img
            className="ProductItem__image"
            src={props.imageURL}
            alt="Card image cap"
          />
          <div className="ProductItem__div1">
            <CardTitle tag="h4">{props.title}</CardTitle>
          </div>
          <div className="ProductItem__div2">
            <CardText className="mb-2 text-muted" tag="h4">
              {props.price} TL
            </CardText>
            <CardText className="mb-2 text-muted" tag="h6">
              {props.place}
            </CardText>
          </div>
          <Button color="success">
            <Link className="ProductItem__button" to={`/${props.id}`}>
              Detay
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductItem;
