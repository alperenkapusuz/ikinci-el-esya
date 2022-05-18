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
      <Card className="ProductItem__card" color="secondary" body outline>
        <CardBody className="ProductItem__cardBody">
          <CardImg
            className="ProductItem__image"
            height="200%"
            src={props.imageURL}
            alt="Card image cap"
          />

          <div className="ProductItem__div1">
            <CardTitle tag="h5">{props.title}</CardTitle>
            <hr />
            <CardSubtitle tag="h6">
              {readMore
                ? props.description
                : `${props.description.substring(0, 20)}...`}
              <button
                style={{ border: "none" }}
                className="btn btn-sm"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Daha az göster" : "Daha fazla oku"}
              </button>
            </CardSubtitle>
          </div>
          <div className="ProductItem__div2">
            <CardText className="mb-2 text-muted" tag="h4">
              {props.price} TL
            </CardText>
            <CardText className="mb-2 text-muted" tag="h4">
              {props.place}
            </CardText>
          </div>
          {/* <Button color="secondary">
            <Link className="ProductItem__button" to={`/chat`}>
              Mesaj Gönder
            </Link>
          </Button> */}
          <Button color="secondary">
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
