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
  top: "60%",
  left: "50%",
  transform: "translate(-80%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "0px !important",
  boxShadow: 0,
  p: 3,
  borderRadius: "10px",
};

const Tab1 = () => {
  const ariaLabel = { "aria-label": "input" };
  const [catagories, setcatagories] = React.useState("");
  const handleChange = (event) => {
    setcatagories(event.target.value);
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDiscription] = useState("");

  const handleData = (value) => {
    setService(value);
    handleClose();
  };

  const contactDataHandle = (e) => {
    console.log(service, name, email, phone, description);
    e.preventDefault();
  };

  return (
    <Box container maxWidth={"xxl"} style={{ marginTop: "50px" }}>
      <form onSubmit={contactDataHandle}>
        <div>
          <Box style={{ width: "50%" }}>
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
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
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
        </div>

        <Grid container spacing={4} sx={{ mt: "1rem" }}>
          <Grid
            item
            md={4}
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur",
            }}
          >
            <Input
              required
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              type="text"
              placeholder="Name"
              inputProps={ariaLabel}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid
            item
            md={4}
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

export default Tab1;
