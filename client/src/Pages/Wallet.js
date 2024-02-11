import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
          
            <div>
                Start Your SIP Today with us.
            </div>
            <Box
                component="form"
                onSubmit={handleFormSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
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
                <Button type="submit" variant="contained" color="primary">
                    Add SIP to your Wallet
                </Button>
            </Box>
            <div>
                YOUR BANK BALANCE : {user.bank_account.balance_amt}
            </div>
            <div>
                YOUR WALLET BALANCE : {user.walletamt}
            </div>
            <div>
                YOUR SIP AMOUNT : {user.sip ? user.sip.amt : 0}
            </div>

            {/* =================================================== */}

            <div>
            Tranfer Money to your Bank Account
            <Box
                component="form"
                onSubmit={handleFormSubmit2}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
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
                <Button type="submit" variant="contained" color="primary">
                    Transfer
                </Button>
            </Box>
        </div>

        <div>
            Your Current Streak: {user.sip ? user.sip.streak : 0}
        </div>

        <Button variant="contained" color="secondary" onClick={handleBreakSip}>
            Break SIP
        </Button>

        </>
    );
};

export default Wallet;
