import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";
import "./ProductItem.css";

const ProductItem = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <Card className="ProductItem__card" body color="primary" outline>
        <CardBody>
          <CardImg
            className="ProductItem__image"
            height="200%"
            src={props.imageURL}
            alt="Card image cap"
          />
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle>{props.category}</CardSubtitle>
          <CardSubtitle>
            {readMore
              ? props.description
              : `${props.description.substring(0, 10)}...`}
            <button
              style={{ border: "none" }}
              className="btn btn-outline-success btn-sm"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Daha az göster" : "Daha fazla oku"}
            </button>
          </CardSubtitle>
          <CardText className="mb-2 text-muted" tag="h6">
            {props.price}
          </CardText>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.place}
          </CardSubtitle>
          <Button>
            <Link to={`/chat`}>Mesaj Gönder</Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductItem;
