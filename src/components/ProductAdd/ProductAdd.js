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
    imageURL: "",
    description: "",
    price: "",
    place: "",
  });

  const saveItem = () => {
    if (
      form.title === "" ||
      form.category === "" ||
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
            <FormGroup className="ProductAdd__image">
              <Label>Image</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter image URL"
                onChange={(event) =>
                  setForm({ ...form, imageURL: event.target.value })
                }
                value={form.imageURL}
              />
            </FormGroup>
            <FormGroup className="ProductAdd__description">
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Enter description"
                onChange={(event) =>
                  setForm({ ...form, description: event.target.value })
                }
                value={form.description}
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
            <Button
              className="ProductAdd__button"
              color="primary"
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
