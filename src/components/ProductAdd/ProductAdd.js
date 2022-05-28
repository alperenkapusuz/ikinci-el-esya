import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
import DUMMY_PRODUCTS from "../Data/Data";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./ProductAdd.css";

const ProductAdd = () => {
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);
  const [form, setForm] = useState({
    id: Math.random().toString(),
    title: "",
    category: "",
    profile:"",
    imageURL: "",
    description: "",
    price: "",
    place: "",
  });

  console.log(form.imageURL)
  const saveItem = () => {
    if (
      form.title === "" ||
      form.category === "" ||
      form.profile === "" ||
      form.imageURL === "" ||
      form.description === "" ||
      form.price === "" ||
      form.place === ""
    ) {
      alert("Tum alanlari doldurunuz");
      return;
    }

    data.push({
      ...form,
    });

    localStorage.setItem("data", JSON.stringify(data));

    setForm({
      title: "",
      category: "",
      profile: "",
      imageURL: "",
      description: "",
      price: "",
      place: "",
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if (localData.length === 0) {
      localData.push(...DUMMY_PRODUCTS);
      setData(localData);
    } else {
      setData(JSON.parse(localData));
    }
  };

  return (
    <div>
      {user ? (
        <Card className="ProductAdd__page">
          <Form>
            <FormGroup className="ProductAdd__title">
              <Label>Title</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter title"
                onChange={(event) =>
                  setForm({ ...form, title: event.target.value })
                }
                value={form.title}
              />
            </FormGroup>
            <FormGroup className="ProductAdd__category">
              <Label>Category</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter title"
                onChange={(event) =>
                  setForm({ ...form, category: event.target.value })
                }
                value={form.category}
              />
            </FormGroup>
            <FormGroup className="ProductAdd__profile">
              <Label>Profile</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter profile"
                onChange={(event) =>
                  setForm({ ...form, profile: event.target.value })
                }
                value={form.profile}
              />
            </FormGroup>
            <FormGroup className="ProductAdd__price">
              <Label>Price</Label>
              <Input
                type="text"
                name="price"
                id="price"
                placeholder="Enter price"
                onChange={(event) =>
                  setForm({ ...form, price: event.target.value })
                }
                value={form.price}
              />
            </FormGroup>
            <FormGroup className="ProductAdd__place">
              <Label>Place</Label>
              <Input
                type="text"
                name="place"
                id="place"
                placeholder="Enter place"
                onChange={(event) =>
                  setForm({ ...form, place: event.target.value })
                }
                value={form.place}
              />
            </FormGroup>
            <div className="image_div">
            <FormGroup className="ProductAdd__image">
              <Label>Image 1</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter image URL"
                onChange={(event) =>
                  setForm({ ...form, imageURL: event.target.value })
                }
                value={form.imageURL.img1}
              />
            </FormGroup>
            {/* <FormGroup className="ProductAdd__image">
              <Label>Image 2</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter image URL"
                onChange={(event) =>
                  setForm({ ...form, imageURL:{...form.imageURL, img2:event.target.value}})
                }
                value={form.imageURL.img2}
              />
            </FormGroup>
            <FormGroup className="ProductAdd__image">
              <Label>Image 3</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter image URL"
                onChange={(event) =>
                  setForm({ ...form, imageURL: {...form.imageURL, img3:event.target.value}})
                }
                value={form.imageURL.img3}
              />
            </FormGroup> */}
            </div>
            <FormGroup className="ProductAdd__description">
              <Label>Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Enter description"
                onChange={(event) =>
                  setForm({ ...form, description: event.target.value })
                }
                value={form.description}
                style={{ height: 220 , width: 505}}
              />
            </FormGroup>
            <Button
              className="ProductAdd__button"
              color="success"
              onClick={saveItem}
            >
              EKLE
            </Button>
          </Form>
        </Card>
      ) : (
        <div className="ProductAdd__signIn">
          <p>Lütfen Giriş yapınız</p>
        </div>
      )}
    </div>
  );
};

export default ProductAdd;




