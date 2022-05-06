import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

const ProductAdd = () => {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    id: Math.random().toString(),
    title: "",
    description: "",
    price: "",
    place: "",
  });

  const saveItem = () => {
    if (
      form.title === "" ||
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
    setData(JSON.parse(localData));
  };

  return (
    <Card>
      <Form>
        <FormGroup>
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
        <FormGroup>
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
        <FormGroup>
          <Label>Title</Label>
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
        <FormGroup>
          <Label>Title</Label>
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
        <Button color="primary" onClick={saveItem}>
          EKLE
        </Button>
      </Form>
    </Card>
    // <div>
    //   <div>
    //     <input
    //       onChange={(event) => setForm({ ...form, title: event.target.value })}
    //       value={form.title}
    //       placeholder="title"
    //     />
    //     <input
    //       onChange={(event) =>
    //         setForm({ ...form, description: event.target.value })
    //       }
    //       value={form.description}
    //       placeholder="description"
    //     />
    //     <input
    //       onChange={(event) => setForm({ ...form, price: event.target.value })}
    //       value={form.price}
    //       placeholder="price"
    //     />
    //     <input
    //       onChange={(event) => setForm({ ...form, place: event.target.value })}
    //       value={form.place}
    //       placeholder="place"
    //     />
    //     <button onClick={saveItem}>EKLE</button>
    //   </div>
    // </div>
  );
};

export default ProductAdd;
