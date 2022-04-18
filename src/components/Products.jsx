import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../features/EcomSlice";
import Footer from "./Footer";
import { useTranslation, initReactI18next, Trans } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const categories = [
    { name: "All", actualName: "All" },
    { name: "mensClothing", actualName: "men's clothing" },
    { name: "womensClothing", actualName: "women's clothing" },
    { name: "jewellery", actualName: "jewelery" },
    { name: "electronics", actualName: "electronics" },
  ];
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const filterHandler = (item) => {
    if (filteredData && filteredData.length > 0) {
      if (item !== "All") {
        const result = data.filter((value) => value.category === item);
        setFilteredData(result);
      } else {
        setFilteredData(data);
      }
    }
  };
  useEffect(() => {}, []);

  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      const response = await fetch("http://fakestoreapi.com/products/")
        .then((result1) => result1.json())
        .then((result) => {
            console.log(result)
          return result;
        })
        .catch((error) => {});
      setLoading(false);
      setData(response);
      setFilteredData(response);
      dispatch(storeProducts(data));
    };
    fetchedData();
  }, []);

  return (
    <>
      {loading === true ? (
        <p>Loading</p>
      ) : (
        <div>
          <div className="flex space-x-10 mt-10 justify-center">
            {categories.length > 0 &&
              categories.map((item, index) => {
                return (
                  <div key={index}>
                    <button
                      className="border-2 p-2 font-semibold rounded-md hover:bg-slate-100"
                      onClick={() => filterHandler(item.actualName)}
                    >
                      {t(item.name)}
                    </button>
                  </div>
                );
              })}
          </div>
          <hr className="w-screen mt-5" />
          <div className="flex flex-wrap ">
            {filteredData.length > 0 &&
              filteredData.map((item, index) => {
                return (
                  <div key={index}>
                    <ProductCard item={item} />
                  </div>
                );
              })}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Products;
