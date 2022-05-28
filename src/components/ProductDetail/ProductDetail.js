import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./ProductDetail.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const ProductDetail = (props) => {
  const { p_id } = useParams();
  const [productDetail, setProductDetail] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i].id === p_id) {
        setProductDetail(props.items[i]);
      }
    }
  }, []);
 

  return (
    <div className="ProductDetail__page">
      {user ? (
        <div>
          <div className="ProductDetail__detail">
            <div className="ProductDetail__image">
              <img src={productDetail.imageURL} alt="img"/>
            </div>
            <div>
              <div className="ProductDetail__title">
                <p>{productDetail.title}</p>
                <p>{productDetail.profile}</p>
              </div>
              <div className="ProductDetail__cp">
                <p>{productDetail.category}</p>
                <p>{productDetail.place}</p>
              </div>
              <div className="ProductDetail__price">
                <p>Price: ₺{productDetail.price} </p>
              </div>
              <Button className="ProductDetail__button"  color="success">
                <Link className="ProductDetail__link" to="/chat">Mesaj Gönder</Link>
              </Button>
              <Button className="ProductDetail__button"  color="secondary">
                <Link className="ProductDetail__link" to="/">Anasayfaya dön</Link>
              </Button>
            </div>
          </div>
          <div className="ProductDetail__description">
            <p>{productDetail.description}</p>
          </div>
        </div>
      ) : (
        <div className="Chat__signIn">
          <p>Lütfen Giriş yapınız</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
