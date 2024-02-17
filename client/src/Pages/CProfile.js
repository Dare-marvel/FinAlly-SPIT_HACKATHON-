import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { Room } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import EnhancedTable from "../components/EnhancedTable";
import img123 from "../assets/profile123.png";
import Footer from "../components/Footer";
import img1 from "../assets/badges1new.png";
import img2 from "../assets/badges2new.png";
import img3 from "../assets/badges3new.png";
import img4 from "../assets/badges4new.png";
import img5 from "../assets/badges5new.png";
import { loadStripe } from "@stripe/stripe-js";
import {
  Container,
  Grid,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
} from "@mui/material";

import image1 from "../assets/testi1.jpg";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
function CProfile() {
  const [imageSrc, setImageSrc] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: null,
    points: 0,
    walletamt: 0,
  });
  const [grade, setGrade] = useState(null);
  const [newuser, setNewUser] = useState({
    name: "",
    email: "",
    phone: null,
    points: 0,
    walletamt: 0,
  });
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    email: "",
    phone: 0,
    address: {}, // Add address
    companyGenre: "", // Add company genre
    logo: "",
    GSTNO: 0,
    Grole: "",
    dob: "",
  });
  const [companyInfoEdit, setCompanyInfoEdit] = useState({
    name: "",
    email: "",
    phone: 0,
    points: 0,
  });
  const [currviewState, setcurrViewState] = React.useState({
    currlongitude: 0,
    currlatitude: 0,
    zoom: 10,
  });
  const [viewState, setViewState] = React.useState({
    longitude: 78,
    latitude: 22,
    zoom: 3.1,
  });
  const [newviewState, setNewViewState] = React.useState({
    longitude: 78,
    latitude: 22,
    address: "",
    zoom: 10,
  });
  const [amount, setAmount] = useState("");
  const [roundUp, setRoundUp] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "FinAlly | Profile";
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    try {
      const c = await axios.get("/profile", {
        withCredentials: true,
      });
      const { name, email, phone, walletamt, points } = c.data;
      setUser({ name, email, phone, points, walletamt });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Some error occured");
      }
    }
  };

  console.log(user.points);

  // const getUserInfo = async () => {
  //   try {
  //     const c = await axios.get("/profile", {
  //       withCredentials: true,
  //     });
  //     const {
  //       name,
  //       email,
  //       phone,
  //       address,
  //       companyGenre,
  //       logo,
  //       GSTNO,
  //       Grole,
  //       dob,
  //     } = c.data;
  //     setUser({ name, email, phone });
  //     setCompanyInfo({
  //       name,
  //       email,
  //       phone,
  //       address,
  //       companyGenre,
  //       logo,
  //       GSTNO,
  //       Grole,
  //       dob,
  //     });
  //     setCompanyInfoEdit({
  //       name,
  //       email,
  //       phone,
  //       address,
  //       companyGenre,
  //       logo,
  //       GSTNO,
  //       Grole,
  //       dob,
  //     });

  //     const updatedViewState = {
  //       currlongitude: address.long!=-1?address.long:78,
  //       currlatitude: address.lat!=-1?address.lat:22,
  //       zoom: address.long!=-1 && address.lat!=-1 ? 7 : 3.1,
  //     };
  //     const updatedViewState1 = {
  //       longitude: address.long!=-1?address.long:78,
  //       latitude: address.lat!=-1?address.lat:22,
  //       zoom: address.long!=-1 && address.lat!=-1 ? 7 : 3.1,
  //     };
  //     const updatedViewState2 = {
  //       longitude: address.long!=-1?address.long:78,
  //       latitude: address.lat!=-1?address.lat:22,
  //       address: address.address,
  //       zoom: address.long!=-1 && address.lat!=-1 ? 7 : 3.1,
  //     };
  //     setViewState(updatedViewState1);
  //     setcurrViewState(updatedViewState);
  //     setNewViewState(updatedViewState2);
  //   } catch (error) {
  //     if (error.response) {
  //       toast.error(error.response.data.error);
  //     } else {
  //       toast.error("Some error occured");
  //     }
  //   }
  // };
  // Sample data for company info
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "FinAlly | Profile";
    getUserInfo();
  }, []);
  let badgeImage = new Image();
  const num = async () => {
    try {
      const points = user.points; // You can set your points here
      const response = await axios.post("/getbadgegrade", { points });
      const { grade } = response.data;
      setGrade(response.data);

      if (grade === 1) {
        badgeImage.src = img1;
      } else if (grade === 2) {
        badgeImage.src = img2;
      } else if (grade === 3) {
        badgeImage.src = img3;
      } else if (grade === 4) {
        badgeImage.src = img4;
      } else if (grade === 5) {
        badgeImage.src = img5;
      }
      console.log(grade);
      console.log(badgeImage.src);
      setImageSrc(badgeImage.src);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    num();
  }, [user]);

  // const getUserInfo = async () => {
  //   try {
  //     const c = await axios.get("/profile", {
  //       withCredentials: true,
  //     });
  //     const {
  //       name,
  //       email,
  //       phone,
  //       Grole,
  //       bank_account,
  //       walletamt,
  //       sip,
  //       points,
  //       transactions
  //     } = c.data;
  //     setUser({ name, email, phone });
  //   } catch (error) {
  //     if (error.response) {
  //       toast.error(error.response.data.error);
  //     } else {
  //       toast.error("Some error occured");
  //     }
  //   }
  // };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        console.log(base64Image);
        setCompanyInfoEdit({ ...companyInfoEdit, logo: base64Image });
      };
      reader.readAsDataURL(file);
    }
  };

  const [openModal, setOpenModal] = useState(false);
  const [openModalPay, setOpenModalPay] = useState(false);
  const [openModalLocation, setOpenModalLocation] = useState(false);
  const [openModalChoose, setOpenModalChoose] = useState(false);

  const handleOpenModal = async () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModalPay = async () => {
    setOpenModalPay(true);
  };

  const handleCloseModalPay = () => {
    setOpenModalPay(false);
  };

  const handleOpenModalLocation = async () => {
    setOpenModalLocation(true);
  };

  const handleCloseModalLocation = () => {
    setOpenModalLocation(false);
  };

  const handleOpenModalChoose = async () => {
    setOpenModalChoose(true);
  };

  const handleCloseModalChoose = () => {
    setOpenModalChoose(false);
  };

  const handleDblClick = (evt) => {
    axios
      .get(
        `https://geocode.maps.co/reverse?lat=${evt.lngLat.lat}&lon=${evt.lngLat.lng}`
      )
      .then((res) => {
        setNewViewState({
          ...newviewState,
          longitude: evt.lngLat.lat,
          latitude: evt.lngLat.lng,
          address: res.data.display_name,
          zoom: 10,
        });
        setCompanyInfoEdit({
          ...companyInfoEdit,
          address: {
            ...companyInfoEdit.address,
            long: evt.lngLat.lng,
            lat: evt.lngLat.lat,
            address: res.data.display_name,
          },
        });
      })
      .catch((error) => {
        toast.error(error);
      });
    handleCloseModalChoose();
  };

  const handleSubmit = async () => {
    try {
      const c = await axios.put(
        "/updateprofile",
        {
          name: companyInfoEdit.name,
          email: companyInfoEdit.email,
          phone: companyInfoEdit.phone,
          address: {
            lat: companyInfoEdit.address.lat,
            long: companyInfoEdit.address.long,
            address: companyInfoEdit.address.address,
          },
          companyGenre: companyInfoEdit.companyGenre,
          logo: companyInfoEdit.logo,
          GSTNO: companyInfoEdit.GSTNO,
          Grole: companyInfoEdit.Grole,
          dob: companyInfoEdit.dob,
        },
        {
          withCredentials: true,
        }
      );

      if (c.status === 200) {
        toast.success(c.data.msg);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Some error occured");
      }
    }
    getUserInfo();
    handleCloseModal();
  };

  const transactions = [
    { type: "wallet", amt: 100, date: "2024-02-10" },
    { type: "bank", amt: 200, date: "2024-02-09" },
    { type: "wallet", amt: 150, date: "2024-02-08" },
    { type: "bank", amt: 180, date: "2024-02-07" },
    { type: "wallet", amt: 120, date: "2024-02-06" },
    { type: "bank", amt: 220, date: "2024-02-05" },
    { type: "wallet", amt: 130, date: "2024-02-04" },
    { type: "bank", amt: 210, date: "2024-02-03" },
    { type: "wallet", amt: 140, date: "2024-02-02" },
    { type: "bank", amt: 230, date: "2024-02-01" },
    { type: "wallet", amt: 110, date: "2024-01-31" },
    { type: "bank", amt: 240, date: "2024-01-30" },
    { type: "wallet", amt: 160, date: "2024-01-29" },
    { type: "bank", amt: 250, date: "2024-01-28" },
    { type: "wallet", amt: 170, date: "2024-01-27" },
  ];
  const handleSubmit2 = (e) => {
    e.preventDefault();
    let originalAmount = parseFloat(amount);
    let finalAmount = originalAmount;
    if (roundUp) {
      finalAmount = Math.ceil(finalAmount);
    }
    const bal = finalAmount - originalAmount; // Calculate the balance/savings due to rounding up

    console.log("Original Amount:", originalAmount);
    console.log(
      "Final Amount (rounded) to be sent to the backend:",
      finalAmount
    );
    console.log("Balance/Savings due to rounding up:", bal);

    // Using Axios to send the details to your backend
    let useremail = user.email;
    axios
      .post("/paymenter", {
        originalAmount,
        roundUp,
        finalAmount,
        bal,
        useremail,
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // border: "2px solid red",
        }}
      >
        <div
          style={{
            // border: "2px solid blue",
            width: "30%",
            padding: "1rem 2rem 1rem 1rem",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {/* Company Profile */}
              <Grid item xs={12}>
                <Paper
                  elevation={3}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgb(232, 238, 244)",
                    width: "100%",
                    borderRadius: "40px",
                  }}
                >
                  <div style={{ width: "100%", margin: "2rem auto" }}>
                    <img
                      src={img123}
                      alt="Company Logo"
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        marginBottom: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ marginBottom: "17px" }}>
                      <Typography variant="h7">Name: {user.name}</Typography>
                    </div>
                    <div style={{ marginBottom: "17px" }}>
                      <Typography variant="h7">Email: {user.email}</Typography>
                    </div>
                    <div style={{ marginBottom: "17px" }}>
                      <Typography variant="h7">
                        Contact Number: {user.phone}
                      </Typography>
                    </div>
                    <div style={{ marginBottom: "17px" }}>
                      <Typography variant="h7">
                        Points: {user.points}
                      </Typography>
                    </div>
                    <div style={{ marginBottom: "17px" }}>
                      <Typography variant="h7">
                        {" "}
                        Wallet Amount: {user.walletamt}
                      </Typography>
                    </div>
                  </div>
                </Paper>
                <br></br>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // border: "2px solid red",
                    width: "50%",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenModal}
                    startIcon={<EditIcon />}
                    style={{
                      borderRadius: "30px",
                      margin: "0px 2px",
                    }}
                  >
                    Edit
                  </Button>
                  <br></br>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenModalPay}
                    startIcon={<EditIcon />}
                    style={{
                      borderRadius: "30px",
                      margin: "0px 2px",
                    }}
                  >
                    Pay
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>

          {/* Modal for editing company info */}
          <Modal open={openModal} onClose={handleCloseModal}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "900px",
                transform: "translate(-50%, -50%)",
                maxWidth: "100%", // Adjust the maximum width as needed
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,

                overflowY: "auto", // Enable vertical scrolling
                maxHeight: "90vh", // Limit the maximum height to the viewport height
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  margin: "20px 0",
                }}
              >
                Edit Company Information
              </Typography>

              <form>
                <TextField
                  label="Name"
                  fullWidth
                  value={companyInfoEdit.name}
                  onChange={(e) =>
                    setCompanyInfoEdit({
                      ...companyInfoEdit,
                      name: e.target.value,
                    })
                  }
                />
                <br></br>
                <br></br>
                <TextField
                  label="Email"
                  fullWidth
                  value={companyInfoEdit.email}
                />
                <br></br>
                <br></br>
                <TextField
                  label="Contact Number"
                  fullWidth
                  value={companyInfoEdit.phone}
                  onChange={(e) =>
                    setCompanyInfoEdit({
                      ...companyInfoEdit,
                      phone: e.target.value,
                    })
                  }
                />
                <br></br>
                <br></br>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Modal>
          <br></br>

          <br></br>
          <Modal open={openModalPay} onClose={handleCloseModalPay}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "700px",
                transform: "translate(-50%, -50%)",
                maxWidth: "100%", // Adjust the maximum width as needed
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                overflowY: "auto", // Enable vertical scrolling
                maxHeight: "90vh", // Limit the maximum height to the viewport height
              }}
            >
              <Typography variant="h6" gutterBottom>
                Pay Now - With Round Off, if activated<br></br>
                (Can be activated from the Wallets Page)
              </Typography>
              <br></br>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              ></div>
              <form onSubmit={handleSubmit2}>
                <label>
                  Amount:
                  <input
                    type="number"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    checked={roundUp}
                    onChange={(e) => setRoundUp(e.target.checked)}
                    style={{
                      margin:"20px 0 0 0 "
                    }}
                  />
                  Do you want to round up savings?
                </label>
                <br></br>
                
                <div style={{
                  width: "100%",
                  display: "flex",
                  justifyContent:"left",
                  margin: "20px 0 0 0"
                }}>
                <Button variant="contained" color="primary" type="submit">Pay</Button>
                </div>
              </form>
            </Box>
          </Modal>
        </div>
        <div
          style={{
            // border: "2px solid blue",
            width: "35%",
            padding: "1rem",
            display: "flex",
            flexDirection : "column"
          }}
        >
          <div>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              My Badges
            </h4>
            {/* <img src={badgeImage}></img> */}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {imageSrc && (
                <img src={imageSrc} alt="Badge" style={{ width: "100%" }} />
              )}
            </div>
          </div>
          <div style={{
            margin: "30px 0 0 0"
          }}>
            <h5
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              All Transactions
            </h5>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EnhancedTable transactions={transactions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <Footer />
    </>
  );
}

export default CProfile;
