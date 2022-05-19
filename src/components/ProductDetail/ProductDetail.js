import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import Chat from "../SendMessage/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./ProductDetail.css";

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
  // console.log(productDetail);
  // console.log(productDetail.title);

  return (
    <div className="ProductDetail__page">
      {user ? (
        <div>
          <div className="ProductDetail__detail">
            <div className="ProductDetail__image">
              <img src={productDetail.imageURL} />
            </div>
            <div>
              {/* <div>profile</div> */}
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
            </div>
          </div>
          <div className="ProductDetail__description">
            <p>{productDetail.description}</p>
          </div>
          <div className="ProductDetail__chat">Chat</div>
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

// {user ? (
//   <div className="card">
//     <div className="row">
//       <div className="col-md-6">
//         <div className="card-body">
//           <h3 className="card-title">{productDetail.title}</h3>
//           <h4 className="card-title">{productDetail.price}</h4>
//           <p className="card-text">
//             <strong>{productDetail.description}</strong>
//             <strong> {productDetail.place}</strong>
//           </p>
//           <p className="card-text">{productDetail.description}</p>
//           <Link to="/" className="btn btn-sm btn-outline-success mt-5 ">
//             Anasayfaya git
//           </Link>
//         </div>
//       </div>
//     </div>
//     <div>
//       <Chat />
//     </div>
//   </div>
