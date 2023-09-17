import React, { useEffect, useState } from "react";
import { Navbar } from "../../../widgets/Navbar";
import { Product } from "../../../entities/Product";
import "./Barbershop.scss";
import { firestore } from "../../../shared/providers/firebase";
import { collection, getDocs, where,query } from "@firebase/firestore";

const Barbershop = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const servicesDoc = await getDocs(query(collection(firestore, "servicii"), where("type", "==", "barbershop")));
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
    <div className="barbershop-wrapper">
      <Navbar />
      <div className="bcolumn-wrapper">
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

export default Barbershop;
