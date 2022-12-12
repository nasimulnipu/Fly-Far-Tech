import React from "react";
import Input from "@mui/material/Input";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { SxProps } from "@mui/system";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import "./Tab1.css";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "65%",
  left: "50%",
  transform: "translate(-82%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px !important",
  boxShadow: 0,
  p: 3,
  borderRadius: "10px",
};

const style2 = {
  position: "absolute",
  top: "60%",
  left: "71%",
  transform: "translate(-50%, -50%)",
  width: 560,
  bgcolor: "background.paper",
  border: "1px !important",
  boxShadow: 0,
  p: 3,
  borderRadius: "10px",
};

const style3 = {
  position: "absolute",
  top: "69%",
  left: "50%",
  transform: "translate(-82%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px !important",
  boxShadow: 0,
  p: 3,
  borderRadius: "10px",
};

const Tab2 = () => {
  const ariaLabel = { "aria-label": "input" };
  const [catagories, setcatagories] = React.useState("");
  const handleChange = (event) => {
    setcatagories(event.target.value);
  };

  // modal 1 api solution
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [service, setService] = useState("");
  const handleData = (value) => {
    setService(value);
    handleClose();
  };

  // modal 2 project delivery
  const [service2, setService2] = useState("");
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleData2 = (value) => {
    setService2(value);
    handleClose2();
  };

  // modal 3 project delivery
  const [service3, setService3] = useState("");
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleData3 = (value) => {
    setService3(value);
    handleClose3();
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDiscription] = useState("");
  const contactDataHandle = (e) => {
    console.log(service, name, email, phone, description);
    e.preventDefault();
  };
  return (
    <Box container maxWidth={"xxl"}>
      <form onSubmit={contactDataHandle}>
        <Grid container spacing={4} sx={{ mt: "1rem" }}>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
            }}
          >
            <Box>
              <Box>
                <Typography
                  onClick={handleOpen}
                  style={{
                    cursor: "pointer",
                    paddingBottom: "6px",
                    borderBottom: "1px solid #4F76AE",
                    fontSize: "16px",
                    color: "#8A8A8A",
                  }}
                >
                  {service ? service : "    Which Product we can help you ?"}
                </Typography>
              </Box>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal1"
              >
                <Box sx={style}>
                  <Grid container spacing={4}>
                    <Grid item md={4}>
                      <Box
                        style={{
                          padding: "15px 15px",
                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData("Web Application")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          Web Application
                        </Typography>
                        <Typography
                          style={{
                            color: "#8A8A8A",
                            fontSize: "12px",
                            fontFamily: "poppins",
                            fontWeight: "400",
                          }}
                        >
                          B2B, B2C, Travel, Branding All kind Web Applications
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      <Box
                        style={{
                          padding: "15px 15px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData("Mobile Applications")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          Mobile Applications
                        </Typography>
                        <Typography
                          style={{
                            color: "#8A8A8A",
                            fontSize: "12px",
                            fontFamily: "poppins",
                            fontWeight: "400",
                          }}
                        >
                          B2B, B2C, Travel, Branding All kind Web Applications
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      <Box
                        style={{
                          padding: "15px 15px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData("ERP Applications")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          ERP Applications
                        </Typography>
                        <Typography
                          style={{
                            color: "#8A8A8A",
                            fontSize: "12px",
                            fontFamily: "poppins",
                            fontWeight: "400",
                          }}
                        >
                          B2B, B2C, Travel, Branding All kind Web Applications
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      <Box
                        style={{
                          padding: "10px 10px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData("Management Software")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          Management Software
                        </Typography>
                        <Typography
                          style={{
                            color: "#8A8A8A",
                            fontSize: "12px",
                            fontFamily: "poppins",
                            fontWeight: "400",
                          }}
                        >
                          B2B, B2C, Travel, Branding All kind Web Applications
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      <Box
                        style={{
                          padding: "15px 15px",
                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData("Travel API Solutions")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          Travel API Solutions
                        </Typography>
                        <Typography
                          style={{
                            color: "#8A8A8A",
                            fontSize: "12px",
                            fontFamily: "poppins",
                            fontWeight: "400",
                          }}
                        >
                          B2B, B2C, Travel, Branding All kind Web Applications
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      <Box
                        style={{
                          padding: "15px 15px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData(" UI / UX Design")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          UI / UX Design
                        </Typography>
                        <Typography
                          style={{
                            color: "#8A8A8A",
                            fontSize: "12px",
                            fontFamily: "poppins",
                            fontWeight: "400",
                          }}
                        >
                          B2B, B2C, Travel, Branding All kind Web Applications
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
            }}
          >
            <Box>
              <Box>
                <Typography
                  onClick={handleOpen2}
                  style={{
                    cursor: "pointer",
                    paddingBottom: "6px",
                    borderBottom: "1px solid #4F76AE",
                    fontSize: "16px",
                    color: "#8A8A8A",
                  }}
                >
                  {service2
                    ? service2
                    : "    Expected Project Delivery Time Frame ?"}
                </Typography>
              </Box>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal1"
              >
                <Box sx={style2}>
                  <Grid container spacing={4}>
                    <Grid item md={6}>
                      <Box
                        style={{
                          padding: "15px 15px",
                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData2("1-3 Weeks")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          1-3 Weeks
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box
                        style={{
                          padding: "15px 15px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData2("1 Month")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          1 Month
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box
                        style={{
                          padding: "15px 15px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData2(" 1-3 Month")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          1-3 Month
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box
                        style={{
                          padding: "10px 10px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData2("   3+ Month")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          3+ Month
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Box>
          </Grid>

          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
            }}
          >
            <Box>
              <Box>
                <Typography
                  onClick={handleOpen3}
                  style={{
                    cursor: "pointer",
                    paddingBottom: "6px",
                    borderBottom: "1px solid #4F76AE",
                    fontSize: "16px",
                    color: "#8A8A8A",
                  }}
                >
                  {service3
                    ? service3
                    : "    What is your approximate budget look like ?"}
                </Typography>
              </Box>
              <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal1"
              >
                <Box sx={style3}>
                  <Grid container spacing={4}>
                    <Grid item md={6}>
                      <Box
                        style={{
                          padding: "15px 15px",
                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData3(" $1000-$3000")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          $1000-$3000
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box
                        style={{
                          padding: "15px 15px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData3("$3000-$5000")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          $3000-$5000
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box
                        style={{
                          padding: "15px 15px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData3("$5000-$10000")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          $5000-$10000
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box
                        style={{
                          padding: "10px 10px",

                          borderRadius: "5px",
                        }}
                        className="tabBox1"
                        onClick={() => handleData3("$10000")}
                      >
                        <Typography
                          style={{
                            color: "#4F76AE",
                            fontSize: "18px",
                            fontFamily: "poppins",
                            fontWeight: "600",
                            paddingBottom: "5px",
                          }}
                        >
                          $10000
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
            </Box>
          </Grid>

          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
            }}
            display={{
              xs: "none",
              md: "block",
            }}
          ></Grid>

          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
              borderRadius: "10px",
            }}
          >
            <Input
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              type="email"
              placeholder="Email"
              inputProps={ariaLabel}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
              borderRadius: "10px",
              pl: 2,
              pb: 1,
            }}
          >
            <Input
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              type="text"
              placeholder="Phone"
              inputProps={ariaLabel}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
              borderRadius: "10px",
              pl: 2,
              pb: 1,
            }}
          >
            <Input
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              type="text"
              placeholder="Phone"
              inputProps={ariaLabel}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
              borderRadius: "10px",
              pb: 1,
              pt: 2,
            }}
            className="input-file1"
          >
            <Input
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              type="file"
              placeholder="Tell us about your idea"
              inputProps={ariaLabel}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
              borderRadius: "10px",
              pb: 1,
              pt: 2,
            }}
          >
            <Input
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              type="text"
              placeholder="Tell us about your idea"
              inputProps={ariaLabel}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            mt: "3rem",
          }}
        >
          <Button
            type="submit"
            variant="text"
            sx={{ color: "#FCAF17", mt: 2, textTransform: "capitalize" }}
          >
            Submit Query
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Tab2;
