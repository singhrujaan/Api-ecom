import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
const Footer = () => {
  const [footer, setFooter] = useState(true);
  const { t } = useTranslation();

  const myFavitems = useSelector((state) => state.Fav.favItems);
  return (
    <div className="bg-slate-200 text-orange-800 h-auto">
      <h1 className="text-orange-700 font-semibold text-4xl pt-10 ">
      {t("topFavouriteItems")}
      </h1>
      <div className="flex flex-wrap">
        {myFavitems.length > 0 ? (
          myFavitems.length < 5 ? (
         myFavitems.map((item, index) => {
            
              return (
             
                <div key={index} className="flex space-y-7">
                  <ProductCard item={item} footer={footer} />                
                </div>
              );
            })
          ) : (
            <>
           {myFavitems.map((item, index) => {
             if(index <=3){     
               return (
              <div key={index} className="flex space-y-7">
                <ProductCard item={item} footer={footer} />                
              </div>
            );}
            
          
            })}
            <Link to="favItems"><p className="w-screen m-auto -mt-28 text-2xl hover:cursor-pointer">{t("ViewMore")}</p></Link>
            </>
          )
        ) : (
          <p className="w-screen m-auto mt-10 font-semibold text-3xl">
            {t("noFavItems")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Footer;
