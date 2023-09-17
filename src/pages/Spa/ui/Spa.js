import React, { useEffect, useState } from "react";
import { Navbar } from "../../../widgets/Navbar";
import { Product } from "../../../entities/Product";
import "./Spa.scss";
import { firestore } from "../../../shared/providers/firebase";
import { collection, getDocs, where,query } from "@firebase/firestore";

const Spa = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const servicesDoc = await getDocs(query(collection(firestore, "servicii"), where("type", "==", "spa")));
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
    <div className="spa-wrapper">
      <Navbar />
      <div className="scolumn-wrapper">
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

export default Spa;
