import { Accordion, AccordionSummary, Box, Grid } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const Faq = () => {
  return (
    <Box
      sx={{
        width:'75%',
        margin:'auto',
        
     }}
    >
      
      {/* <Box component= "img" src="/img/faqVector.png" sx={{position:'absolute'}}/> */}
      <Typography variant="h3" sx={{ textAlign: "center",color: "#FFFFFF", margin:'20px' }}>
        Frequently Asked Questions
      </Typography>

      <Grid container columnSpacing={4}
      >
        <Grid item xs={6}>
          <Accordion
            sx={{
              background: "transparent",
              color: "#ffff",
              fontSize: "16px",
              mb:'40px',
              height:"auto",
              borderBottom:"1px solid #4F76AE" 
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin:0, padding:0}}
            >
              <Typography variant="span" width="97%" >
                Can we hire FLYFAR<span style={{color:"#FCAF17"}}>TECH</span>  with a design concept already developd or
                buisness analysis conducted?
              </Typography>
            </AccordionSummary>

            <AccordionDetails  style={{ margin:0, padding:0, width:"97%"}}>
              <Typography variant="span" style={{color:"#FCAF17"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </Grid>
          <Grid item xs={6}>
          <Accordion
            sx={{
              background: "transparent",
              color: "#FFFFFF",
              fontSize: "16px",
              mb:'40px',
              height:"auto",
              borderBottom:"1px solid #4F76AE" ,

            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              style={{ margin:0, padding:0}}
            >
              <Typography variant="span" width="97%">
                What are the recurting costs of setting uo a team? once you
                outsource your software development services to us, you are
                free.
              </Typography>
            </AccordionSummary>
            <AccordionDetails  style={{ margin:0, padding:0, width:"97%"}}>
              <Typography variant="span" style={{color:"#FCAF17"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </Grid>
          <Grid item xs={6}>
          <Accordion
            sx={{
              background: "transparent",
              color: "#FFFFFF",
              fontSize: "16px",
              mb:'40px',
              height:"auto",
              borderBottom:"1px solid #4F76AE" ,

            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin:0, padding:0}}
            >
              <Typography variant="span" width="97%">
                How do you ensure security and risk management of my product?
              </Typography>
            </AccordionSummary>
            <AccordionDetails  style={{ margin:0, padding:0, width:"97%"}}>
              <Typography variant="span" style={{color:"#FCAF17"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={6} >
          <Accordion
            sx={{
              background: "transparent",
              color: "#FFFFFF",
              fontSize: "16px",
              mb:'40px',
              height:"auto",
              borderBottom:"1px solid #4F76AE" ,
             
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE",  }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              // style={{ margin:0, padding:0}}
            >
              <Typography variant="span" width="97%">
              Do you work ata a fixed price rate? We have a limited budget, for which we want to get a guaranted result. 
              </Typography>
            </AccordionSummary>
            <AccordionDetails  style={{ margin:0, padding:0, width:"97%"}}>
              <Typography variant="span" style={{color:"#FCAF17"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </Grid>
          <Grid item xs={6} >
          <Accordion
            sx={{
              background: "transparent",
              color: "#FFFFFF",
              fontSize: "16px",
              mb:'40px',
              height:"auto",
               borderBottom:"1px solid #4F76AE" ,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin:0, padding:0}}
            >
              <Typography variant="span" width="97%">
                Can I Contact you with an existing design or buisness analysis?
              </Typography>
            </AccordionSummary>
            <AccordionDetails  style={{ margin:0, padding:0, width:"97%"}}>
              <Typography variant="span" style={{color:"#FCAF17"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </Grid>
          <Grid item xs={6} >
          <Accordion
            sx={{
              background: "rgb(14, 13, 38)",
              color: "#FFFFFF",
              fontSize: "16px",
              mb:'40px',
              height:"auto",
              borderBottom:"1px solid #4F76AE" ,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4F76AE" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin:0, padding:0}}
            >
              <Typography variant="span" width="97%">
                Are you obligated to pay any cancellatioan fees if you decide to
                stop your projects?
              </Typography>
            </AccordionSummary>
            <AccordionDetails  style={{ margin:0, padding:0, width:"97%"}}>
              <Typography variant="span" style={{color:"#FCAF17"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      {/* <Box border={}></Box> */}
    </Box>
  );
};

export default Faq;
