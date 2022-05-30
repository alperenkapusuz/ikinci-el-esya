import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, UncontrolledCarousel } from "reactstrap";
import { auth } from "../../firebase";
import "./ProductDetail.css";
import { useAuthState } from "react-firebase-hooks/auth";

const ProductDetail = (props) => {
  const { p_id } = useParams();
  const [productDetail, setProductDetail] = useState("");
  const [productDetailImage, setProductDetailImage] = useState([]);
  const [username, setUsername] = useState("");
  const [userGmail, setUserGmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [user] = useAuthState(auth);

  const items = [
    {
      src: productDetailImage[0],
    },
    {
      src: productDetailImage[1],
    },
    {
      src: productDetailImage[2],
    },
  ];

  useEffect(() => {
    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i].id === p_id) {
        setProductDetail(props.items[i]);
      }
    }

    for (let j = 0; j < props.items.length; j++) {
      if (props.items[j].id === p_id) {
        setProductDetailImage(props.items[j].imageURL);
      }
    }

    const userInfo = auth.currentUser;
    if (userInfo != null) {
      const displayName = userInfo.displayName;
      const email = userInfo.email;
      const photoURL = userInfo.photoURL;
      setUsername(displayName);
      setUserGmail(email);
      setUserPhoto(photoURL);
    }
  }, []);
  return (
    <div className="ProductDetail__page">
      {user ? (
        <div>
          <div className="ProductDetail__detail">
            <div>
              <UncontrolledCarousel
                indicators={false}
                className="ProductDetail__image"
                items={items}
              />
            </div>
            <div>
              <div className="ProductDetail__userInfo">
                <div className="ProductDetail__userPhoto">
                  <img src={userPhoto} alt="user photo" />
                </div>
                <div className="ProductDetail__username-gmail">
                  <p>{username}</p>
                  <p>{userGmail}</p>
                </div>
                <div>
                  <Button className="ProductDetail__chat-button" color="success">
                    <Link className="ProductDetail__link" to="/chat">
                      Mesaj Gönder
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="ProductDetail__title">
                <p>{productDetail.title}</p>
              </div>
              <div className="ProductDetail__cp">
                <p>{productDetail.category}</p>
                <p>{productDetail.place}</p>
              </div>
              <div className="ProductDetail__price">
                <p>Price: ₺{productDetail.price} </p>
              </div>
              <Button className="ProductDetail__button" color="secondary">
                <Link className="ProductDetail__link" to="/">
                  Anasayfaya dön
                </Link>
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
