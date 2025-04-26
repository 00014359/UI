import React, { useEffect, useState } from "react";
import axios from "axios";
import c from "./Shop.module.scss";

const Shop = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [gender, setGender] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPerfumeId, setSelectedPerfumeId] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/parfume", {
          params: gender ? { gender } : {},
        });
        setPerfumes(res.data);
      } catch (error) {
        console.error("Error fetching perfumes:", error);
      }
    };

    fetchPerfumes();
  }, [gender]);

  const handleOrderClick = (id) => {
    setSelectedPerfumeId(id);
    setShowModal(true);
  };

  const handleSubmitOrder = async () => {
    try {
      await axios.post("http://localhost:9000/api/order", {
        customerName,
        phone,
        perfumeId: selectedPerfumeId,
      });
      alert("Order placed successfully! We will contact you soon.");
      setShowModal(false);
      setCustomerName("");
      setPhone("");
    } catch (err) {
      alert("Error placing order");
      console.error(err);
    }
  };

  return (
    <div className={c.shop}>
      <div className={c.filters}>
        <button onClick={() => setGender("")}>All</button>
        <button onClick={() => setGender("MALE")}>Male</button>
        <button onClick={() => setGender("FEMALE")}>Female</button>
      </div>

      <div className={c.grid}>
        {perfumes.map((perfume) => (
          <div key={perfume.id} className={c.card}>
            <img src={perfume.image} alt={perfume.name} />
            <h4>{perfume.name}</h4>
            <p>{perfume.brand}</p>
            <span
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <p>${perfume.price}</p>
              <p>{perfume.size}ml</p>
            </span>
            <button
              className={c.orderBtn}
              onClick={() => handleOrderClick(perfume.id)}
            >
              Order
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className={c.modalOverlay}>
          <div className={c.modal}>
            <h3>Order Perfume</h3>
            <input
              type="text"
              placeholder="Your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className={c.modalActions}>
              <button onClick={handleSubmitOrder}>Submit</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
