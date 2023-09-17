import React, { useEffect, useState } from "react";
import { Navbar } from "../../../widgets/Navbar";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import { firestore } from "../../../shared/providers/firebase";
import { collection, getDocs,addDoc } from "@firebase/firestore";
import Calendar from "react-calendar";
import { Button } from "../../../shared/Button";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState();
  const [selectedPeople, setSelectedPeople] = useState();

  const getProduct = async () => {
    const servicesDoc = await getDocs(collection(firestore, "servicii"));
    const data = servicesDoc.docs.map((doc) => {
      const serviceData = doc.data();
      return serviceData;
    });

    setProduct(data.filter((item) => item.id === Number(id))[0]);
  };

  const submitData = async () => {
    console.log(selectedDate, selectedHour, selectedPeople, product.id);

    try {
      const docRef = await addDoc(collection(firestore, "reservations"), {
        numberOfPeople: selectedPeople,
        productId: product.id,
        selectedDate: selectedDate,
        selectedHour: selectedHour,
      });
      console.log("ID: ", docRef.id);
      alert("Reservation placed with success")
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="productdetails-wrapper">
      <Navbar />
      <div className="center-content">
        <div className="content-wrapper">
          <div className="left-wrapper">
            <img src={product.image} alt="" />
            <p className="name">{product.name}</p>
            <p className="street">{product.street}</p>
            <p className="phone">{product.phone}</p>
            <p className="gmail">{product.gmail}</p>
          </div>
          <div className="right-wrapper">
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e)}
              locale="en"
            />
            <div className="inputs-wrapper">
              <input placeholder="Selected Hour" value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)} />
              <input placeholder="Number of people" value={selectedPeople} onChange={(e) => setSelectedPeople(e.target.value)} />
            </div>
            <Button text={"Book"} onClick={submitData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
