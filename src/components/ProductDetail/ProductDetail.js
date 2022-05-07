import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";


const ProductDetail = (props) => {
    // const [products, setProducts] = useState([]);
    const { p_id } = useParams();
    const [productDetail, setProductDetail] = useState("");
    const apiUrl =`http://localhost:3000/ads/${p_id}`;

    useEffect(() => {

    }, []);

    console.log(props.items.length)
    console.log(p_id)
  
    // const getItem = () => {
    //   const localData = localStorage.getItem("data") ?? [];
    //   setProducts(JSON.parse(localData));
    // };


  return (
    <div className="container-fluid">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title">{props.title}</h3>
              <h4 className="card-title">{props.price}</h4>
              <p className="card-text">
                {" "}
                <strong>{props.description}</strong>
                <strong> {props.place}</strong> 
              </p>
              <p className="card-text">{props.description}</p>
              <Link to="/ads" className="btn btn-sm btn-outline-success mt-5 ">
                Anasayfaya git
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
