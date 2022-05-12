import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";


const ProductDetail = (props) => {
    const { p_id } = useParams();
    const [productDetail, setProductDetail] = useState("");
    const apiUrl =`http://localhost:3000/ads/${p_id}`;

    useEffect(() => {
        for(let i = 0; i<props.items.length; i++){
          if(props.items[i].id === p_id){
            setProductDetail(props.items[i])
          }
        }
    }, []);
    console.log(productDetail)
    console.log(productDetail.title)
  

  return (
    <div className="container-fluid">
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
