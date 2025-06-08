import React, { useEffect, useState } from "react";
import axios from "axios";
import c from "../Shop/Shop.module.scss";
import { Link, useNavigate } from "react-router-dom";

const ForYouPage = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPerfumeId, setSelectedPerfumeId] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [orderMessage, setOrderMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerfumes = async () => {
      setIsLoading(true);
      try {
        const url = `https://server-production-45af.up.railway.app/api/parfume/for-you/recommendations`;

        const res = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.hasCompletedQuiz === false) {
          setHasCompletedQuiz(false);
          setPerfumes([]);
        } else {
          setHasCompletedQuiz(true);
          setPerfumes(res.data.perfumes);
        }
      } catch (error) {
        console.error("Error fetching perfumes:", error);
        if (error.response && error.response.status === 401) {
          alert("Please log in to view personalized recommendations.");
          navigate("/login");
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchPerfumes();
    } else {
      setIsLoading(false);
      alert("Please log in to view personalized recommendations.");
      navigate("/login");
    }
  }, [token, navigate]);

  const handleOrderClick = (id) => {
    if (!token) {
      alert("Please log in to place an order.");
      navigate("/login");
      return;
    }
    setSelectedPerfumeId(id);
    setQuantity("");
    setOrderMessage("");
    setOrderError("");
    setShowModal(true);
  };

  const handleSubmitOrder = async () => {
    if (!quantity || parseInt(quantity) <= 0) {
      setOrderError("Quantity must be at least 1.");
      return;
    }

    setIsLoading(true);
    setOrderError("");
    try {
      await axios.post(
        "https://server-production-45af.up.railway.app/api/order",
        {
          perfumeId: selectedPerfumeId,
          quantity: parseInt(quantity),
          orderMessage,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Order placed successfully! We will contact you soon.");
      setShowModal(false);
      const fetchPerfumes = async () => {
        try {
          const url = `https://server-production-45af.up.railway.app/api/parfume/for-you/recommendations`;
          const res = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.data.hasCompletedQuiz === false) {
            setHasCompletedQuiz(false);
            setPerfumes([]);
          } else {
            setHasCompletedQuiz(true);
            setPerfumes(res.data.perfumes);
          }
        } catch (error) {
          console.error("Error fetching perfumes after order:", error);
        }
      };
      fetchPerfumes();
    } catch (err) {
      console.error(
        "Error placing order:",
        err.response ? err.response.data : err.message
      );
      setOrderError(
        err.response
          ? err.response.data.message
          : "Error placing order. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuizRedirect = () => {
    navigate("/quiz");
  };

  return (
    <div className={c.shopPage}>
      {isLoading && (
        <div className={c.loaderOverlay}>
          <div className={c.loader}></div>
        </div>
      )}

      {!hasCompletedQuiz ? (
        <div className={c.quizPrompt}>
          <p className={c.noResults}>
            Complete your preference quiz to get personalized recommendations.
          </p>
          <button className={c.quizButton} onClick={handleQuizRedirect}>
            Complete the Quiz
          </button>
        </div>
      ) : perfumes.length > 0 ? (
        <div className={c.grid}>
          {perfumes.map((perfume) => (
            <div key={perfume.id} className={c.card}>
              <Link to={`/perfume/${perfume.id}`} className={c.cardLink}>
                <div className={c.cardImageContainer}>
                  <img
                    src={
                      perfume.image ||
                      "https://via.placeholder.com/200x200?text=No+Image"
                    }
                    alt={perfume.name}
                    className={c.cardImage}
                  />
                </div>
                <div className={c.cardContent}>
                  <h4 className={c.cardName}>{perfume.name}</h4>
                  <p className={c.cardBrand}>{perfume.brand}</p>
                  <div className={c.cardDetails}>
                    <p className={c.cardPrice}>${perfume.price}</p>
                    <p className={c.cardSize}>{perfume.size}ml</p>
                  </div>
                </div>
              </Link>
              <button
                className={c.orderBtn}
                onClick={() => handleOrderClick(perfume.id)}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        !isLoading && (
          <p className={c.noResults}>
            No perfumes found matching your criteria.
          </p>
        )
      )}

      {showModal && (
        <div className={c.modalOverlay}>
          <div className={c.modal}>
            <h3>Place Your Order</h3>
            {orderError && <p className={c.error}>{orderError}</p>}{" "}
            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className={c.modalInput}
            />
            <textarea
              placeholder="Your message (optional)"
              value={orderMessage}
              onChange={(e) => setOrderMessage(e.target.value)}
              rows="4"
              className={c.modalTextarea}
            ></textarea>
            <div className={c.modalActions}>
              <button onClick={handleSubmitOrder} className={c.submitButton}>
                Submit Order
              </button>
              <button
                onClick={() => setShowModal(false)}
                className={c.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForYouPage;
