import React, { useState, useEffect } from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Admin = (props) => {
  
  const getData = async () => {
    try {
      const c = await axios.get("/allcompanies");
      
      setCompanies(c.data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Some error occured");
      }
    }
    try {
      const v = await axios.get("/allvendors");
      
      setVendors(v.data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Some error occured");
      }
    }
    try {
      const v = await axios.get("/totaluppervalues");
      const { tpro, tsales } = v.data;
      setTotalProducts(tpro);
      setTotalSales(tsales);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Some error occured");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        Admin Page
    </>
  );
};

export default Admin;
