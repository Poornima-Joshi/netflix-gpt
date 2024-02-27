import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Grid } from "@mui/material";
import {accordionData} from '../../utils/accordionData';

const NetflixAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const Data = accordionData;

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid sx={{ background: "#000" }} className="border-bottom">
      <Grid container item xs={12} px={2} lg={10} mx="auto" py={6}>
        <Typography
          variant="h1"
          color="#fff"
          width="100%"
          mb={3}
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: { xs: "700", md: "900" },
          }}
        >
          Frequently Asked Questions
        </Typography>
        {
          Data.map((item)=>(
            <Accordion
            key={item.id}
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
            sx={{ width: "100%" }}
            className="netflix-accordion"
          >
            <AccordionSummary
              expandIcon={<AddIcon sx={{fontSize:"30px"}} />}
              aria-controls={item.ariacontrol}
              id={item.id}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.125rem", lg: "1.3rem" },
                  fontWeight: "400",
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                px={1}
                sx={{
                  fontSize: { xs: "1.125rem", lg: "1.3rem" },
                  fontWeight: "400",
                }}
              >
                {item.defination[0]}
              </Typography>
              <Typography
                px={1}
                mt={1}
                sx={{
                  fontSize: { xs: "1.125rem", lg: "1.3rem" },
                  fontWeight: "400",
                }}
              >
               {item.defination[1]}
              </Typography>
            </AccordionDetails>
            </Accordion>
          ))
        }
        
        
      </Grid>
    </Grid>
  );
};
export default NetflixAccordion;
