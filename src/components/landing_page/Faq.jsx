import { Accordion, AccordionSummary, Box, Grid } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const Faq = () => {
  return (
    <Box
      sx={{
        background: "rgb(14, 13, 38)",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      
      {/* <Box component= "img" src="/img/faqVector.png" sx={{position:'absolute'}}/> */}
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Frequently Asked Questions
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems:'center',
          justifyContent:'center',
          margin: '10px 20px',
          
        
        }}
      >
        <Grid item xs={6} sx={{ width: "80vh" }}>
          <Accordion
            sx={{
              background: "rgb(14, 13, 38)",
              color: "#FFFFFF",
              fontWeight: "400",
              fontSize: "16px",
              mb:'5px'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="span">
                Can we hire FLYFARTECH with a design concept already developd or
                buisness analysis conducted?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>
          <Accordion
            sx={{
              background: "rgb(14, 13, 38)",
              color: "#FFFFFF",
              fontWeight: "400",
              fontSize: "16px",
              mb:'5px'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="span">
                What are the recurting costs of setting uo a team? once you
                outsource your software development services to us, you are
                free.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>
          <Accordion
            sx={{
              background: "rgb(14, 13, 38)",
              color: "#FFFFFF",
              fontWeight: "400",
              fontSize: "16px",
              mb:'5px'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="span">
                How do you ensure security and risk management of my product?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={6} sx={{ width: "80vh" }}>
          <Accordion
            sx={{
              background: "rgb(14, 13, 38)",
              color: "#FFFFFF",
              fontWeight: "400",
              fontSize: "16px",
              mb:'5px'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="span">
                Do you work ata a fixed price rate? We have a limited budget,
                for which we want to get a guaranted result. prescribed in the
                contact. we can’t afford to pay more than we agreed.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>
          <Accordion
            sx={{
              background: "rgb(14, 13, 38)",
              color: "#FFFFFF",
              fontWeight: "400",
              fontSize: "16px",
              mb:'5px'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="span">
                Can I Contact you with an existing design or buisness analysis?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>
          <Accordion
            sx={{
              background: "rgb(14, 13, 38)",
              color: "#FFFFFF",
              fontWeight: "400",
              fontSize: "16px",
              mb:'5px'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="span">
                Are you obligated to pay any cancellatioan fees if you decide to
                stop your projects?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="span">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Box>
    </Box>
  );
};

export default Faq;
