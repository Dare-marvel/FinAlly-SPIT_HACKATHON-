import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer';
const Wallet = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: null,
        Grole: "",
        bank_account: "",
        walletamt: null,
        sip: null,
        points: null,
        transactions: []
    });

    const [sipAmount, setSipAmount] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.title = "FinAlly | Wallet";
        getUserInfo();

    }, []);


    const getUserInfo = async () => {
        try {
            const response = await axios.get("/profile", {
                withCredentials: true,
            });
            const {
                name,
                email,
                phone,
                Grole,
                bank_account,
                walletamt,
                sip =  { amt: 0 },
                points,
                transactions
            } = response.data;
            setUser({ name, email, phone, Grole, bank_account, walletamt, sip, points, transactions });
        } catch (error) {
            if (error.response) {
                console.error(error.response.data.error);
            } else {
                console.error("Some error occurred");
            }
        }
    };

    useEffect(() => {
        console.log("User:", user)
    }, [user]);

    const [transferamount, setTransferAmount] = useState("");

    const handleFormSubmit2 = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post("/transfer-money", {
                email: user.email,
                transferamt: transferamount
            });
            
            console.log("Money transferred successfully:", response.data);
            window.location.reload();
            // Optionally, you can perform actions after successful transfer
        } catch (error) {
            console.error("Error occurred while transferring money:", error);
            // Optionally, you can handle errors or display error messages
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // alert(user.email + " " + sipAmount)
        try {
            const response = await axios.post("/add-sip", {
                email: user.email,
                sipAmount: sipAmount
            });
            console.log("SIP started successfully:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("Error occurred while starting SIP:", error);
        }
    };
    const handleBreakSip = async () => {
        try {
            const response = await axios.post("/break-sip", { email: user.email });
            console.log("SIP broken successfully:", response.data);
            // Optionally, you can perform actions after successfully breaking SIP
            window.location.reload();
        } catch (error) {
            console.error("Error occurred while breaking SIP:", error);
            // Optionally, you can handle errors or display error messages
        }
    };
    return (
        <>  
        
        <div style={{
            // border:"2px solid red",
            textAlign: "right",
            margin: "20px 30px 0 0",
            fontWeight: "500"
        }}>
            Your Current Streak: {user.sip ? user.sip.streak : 0}
        </div>

            <div style={{
                width: "100%",
                textAlign: "center",
                padding: "2.5rem"
            }}>
                <h3>Account Details</h3>
            </div>
           
            <div style={{
                display: "flex",
                // border: "2px solid red",
                width: "70%",
                margin: "0px auto",
                justifyContent: "space-around"
            }}>
            <div style={{
                borderRadius: "20px",
                backgroundColor: "rgb(232, 238, 244)",
                height: "100px",
                width: "300px",
                padding:"1.5rem",
                textAlign: "center",
                
            }}>
                <div style={{
                    fontWeight: "500",
                    fontSize: "1.3rem"
                }}>YOUR BANK BALANCE</div>
                <div  style={{
                    fontWeight: "500",
                    fontSize: "1rem"
                }}>₹ {user.bank_account.balance_amt}</div>
            </div>
            <div style={{
                borderRadius: "20px",
                backgroundColor: "rgb(232, 238, 244)",
                height: "100px",
                width: "300px",
                padding:"1.5rem",
                textAlign: "center",
                
            }}>
                <div style={{
                    fontWeight: "500",
                    fontSize: "1.3rem"
                }}>YOUR WALLET BALANCE</div>
                <div  style={{
                    fontWeight: "500",
                    fontSize: "1rem"
                }}>₹ {user.walletamt}</div>
            </div>
            <div style={{
                borderRadius: "20px",
                backgroundColor: "rgb(232, 238, 244)",
                height: "100px",
                width: "300px",
                padding:"1.5rem",
                textAlign: "center",
                
            }}>
                <div style={{
                    fontWeight: "500",
                    fontSize: "1.3rem",
                }}>YOUR SIP AMOUNT</div>
                <div  style={{
                    fontWeight: "500",
                    fontSize: "1rem"
                }}>₹ {user.sip ? user.sip.amt : 0}</div>
            </div>
            </div>

            {/* =================================================== */}
            
            
            <div style={{
                display: "flex",
                // border: "2px solid red",
                justifyContent: "space-around",
                width: "55%",
                margin:"0 auto",
                padding:"2rem 0"
            }}>
            <Box
                component="form"
                onSubmit={handleFormSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style = {{
                    border : "2px solid red",
                    padding: "2rem",
                    borderRadius: "30px",
                    border: "0.5px solid grey"
                }}
            >
                <h6>Manage your SIP</h6>
                <div>
                    <TextField
                        id="standard-input"
                        label="Enter Your Daily SIP Amount"
                        type="number"
                        variant="standard"
                        value={sipAmount}
                        onChange={(e) => setSipAmount(e.target.value)}
                    />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection:"column"
                }}>
                <Button type="submit" variant="contained" color="primary" style={{
                    borderRadius: "30px",
                    margin: "10px 0",
                    width: "fit-content"
                }}>
                    Add SIP to your Wallet
                </Button>
                <Button variant="contained" color="secondary" onClick={handleBreakSip} style={{
                    borderRadius: "30px",
                    margin: "10px 0",
                    width: "fit-content"
                }}>
                   
            Break SIP
        </Button>
                </div>
            </Box>
            
            <Box
                component="form"
                onSubmit={handleFormSubmit2}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style = {{
                    border : "2px solid red",
                    padding: "2rem",
                    borderRadius: "30px",
                    border: "0.5px solid grey"

                }}
            >
                <h6>Tranfer Money to your Bank Account</h6>
                <div>
                    <TextField
                        id="standard-input"
                        label="Enter Amount to Transfer"
                        type="number"
                        variant="standard"
                        value={transferamount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                    />
                </div>
                <Button type="submit" variant="contained" color="primary" style={{
                    borderRadius: "30px"
                }}>
                    Transfer
                </Button>
            </Box>
        </div>
        <br></br>
        <Footer/>
        </>
    );
};

export default Wallet;
