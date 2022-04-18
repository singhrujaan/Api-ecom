import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation, initReactI18next, Trans } from "react-i18next";

const Navbar = ({ onChange }) => {
  const { t } = useTranslation();

  const myCart = useSelector((state) => state.Ecom.cart);
  const navComponents = [{ name: "ecomStore", link: "/" }];

  const changeLang =(e)=>{
    onChange(e)
  }
  return (
    <div className="relative">
      <div className="h-20 bg-cyan-600 flex lg:space-x-20 lg:justify-center lg:items-center">
        {navComponents.map((item, index) => {
          return (
            <div
              key={index}
              className="text-amber-100 font-semibold text-3xl hover:text-cyan-900 hover:cursor-pointer"
            >
              <Link to={item.link}>{t(item.name)}</Link>
            </div>
          );
        })}
      </div>
      <div className="sm:flex sm:flex-col ">
          <Link to="/cart">
        <span className="absolute top-1 right-32 text-md md:top-7 text-2xl text-white font-semibold md:right-72 ">
          {t("gotoCart")}
        </span>
      </Link>
      <span className="absolute top-7 text-2xl text-white font-semibold sm:text-sm sm:mt-5 right-32">
        {t("cart")}({myCart.length})
      </span>
      </div>
      
      <div className="absolute top-7 text-xl  font-semibold right-5">
        <select name="language" onChange={(e)=>changeLang(e)}>
          <option value="en">English</option>
          <option value="fr">नेपाली</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
