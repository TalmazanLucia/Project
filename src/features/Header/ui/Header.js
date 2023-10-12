import React, { useEffect, useState } from "react";
import { SearchInput } from "../../../shared/ui/SearchInput";
import { Button } from "../../../shared/ui/Button";
import { firestore } from "../../../shared/providers/firebase";
import { collection, getDocs } from "@firebase/firestore";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [typeOpen, setTypeOpen] = useState(false);
  const [type, setType] = useState("");
  const [data, setData] = useState([]);

  const handleName = (value) => {
    setName(value);
  };

  const handleType = (value) => {
    setType(value);
    setTypeOpen(false);
  };

  const handleTypeOpen = () => {
    setTypeOpen(!typeOpen);
  };

  const handleSearch = async () => {
    if (!name && !type) {
      setData([]);
      return;
    }

    const servicesDoc = await getDocs(collection(firestore, "servicii"));
    const data = servicesDoc.docs.map((doc) => {
      const serviceData = doc.data();
      return serviceData;
    });

    const filteredData = data.filter((item) => {
      const nameMatch =
        !name || item.name.toLowerCase().startsWith(name.toLowerCase());
      const typeMatch =
        !type || item.type.toLowerCase().includes(type.toLowerCase());
      return nameMatch && typeMatch;
    });

    setData(filteredData);
  };

  useEffect(() => {
    handleSearch();
  }, [name, type]);

  return (
    <div className="header-wrapper">
      <p className="title">Reserve Your Time</p>
      <div className="style">
        {/* <SearchInput
          placeholder={"Service Type"}
          value={type}
          onChange={handleType}
        /> */}
        <div className='select'>
          <p onClick={handleTypeOpen}>{type ? type : 'Select Type'}</p>
          {typeOpen && (
            <div className="typePopup">
              <p onClick={() => handleType("barbershop")}>Barbershop</p>
              <p onClick={() => handleType("gym")}>Gym</p>
              <p onClick={() => handleType("medicine")}>Medicine</p>
              <p onClick={() => handleType("restaurants")}>Restaurants</p>
              <p onClick={() => handleType("spa")}>Spa</p>
            </div>
          )}
        </div>
        <SearchInput
          placeholder={"Service Name"}
          value={name}
          onChange={handleName}
        />
        <Button text={"Search"} onClick={handleSearch}></Button>
      </div>
      {data.length ? (
        <div className="popup-wrapper">
          {data.map((item) => (
            <div onClick={() => navigate(`/productdetails/${item.id}`)}>{item.name}</div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
