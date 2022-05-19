import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import Chat from "../SendMessage/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const ProductDetail = (props) => {
  const { p_id } = useParams();
  const [productDetail, setProductDetail] = useState("");
  const [user] = useAuthState(auth);
  //const apiUrl = `http://localhost:3000/${p_id}`;

  useEffect(() => {
    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i].id === p_id) {
        setProductDetail(props.items[i]);
      }
    }
  }, []);
  console.log(productDetail);
  console.log(productDetail.title);

  return (
    <div className="ProductDetail_page">
      {user ? (
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <h3 className="card-title">{productDetail.title}</h3>
                <h4 className="card-title">{productDetail.price}</h4>
                <p className="card-text">
                  <strong>{productDetail.description}</strong>
                  <strong> {productDetail.place}</strong>
                </p>
                <p className="card-text">{productDetail.description}</p>
                <Link to="/" className="btn btn-sm btn-outline-success mt-5 ">
                  Anasayfaya git
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Chat />
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
