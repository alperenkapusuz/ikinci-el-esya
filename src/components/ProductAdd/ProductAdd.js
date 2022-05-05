import React, { useState, useEffect } from "react";

const ProductAdd = () => {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
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
    <div>
      <div>
        <input
          onChange={(event) => setForm({ ...form, title: event.target.value })}
          value={form.title}
          placeholder="title"
        />
        <input
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
          value={form.description}
          placeholder="description"
        />
        <input
          onChange={(event) => setForm({ ...form, price: event.target.value })}
          value={form.price}
          placeholder="price"
        />
        <input
          onChange={(event) => setForm({ ...form, place: event.target.value })}
          value={form.place}
          placeholder="place"
        />
        <button onClick={saveItem}>EKLE</button>
      </div>
    </div>
  );
};

export default ProductAdd;
