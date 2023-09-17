import React, { useEffect, useState } from "react";
import { Navbar } from "../../../widgets/Navbar";
import { Product } from "../../../entities/Product";
import "./Medicine.scss";
import { firestore } from "../../../shared/providers/firebase";
import { collection, getDocs, where,query } from "@firebase/firestore";

const Medicine = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const servicesDoc = await getDocs(query(collection(firestore, "servicii"), where("type", "==", "medicine")));
    const data = servicesDoc.docs.map((doc) => {
      const serviceData = doc.data();
      return serviceData;
    });

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="medicine-wrapper">
      <Navbar />
      <div className="mcolumn-wrapper">
        {data && data.map((item, index) => (
          <Product
            key={index}
            image={item.image}
            title={item.name}
            description={item.street}
            phone={item.phone}
            gmail={item.gmail}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Medicine;
