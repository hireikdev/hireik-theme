import React from "react";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ChevronDownIcon } from "../Icons";

interface Props {
  title: string;
  children?: string | React.ReactNode;
  checked?: boolean;
}

const SwitchAccordion: React.FC<Props> = ({ title, children, checked = false }) => {
  return (
    <MuiAccordion>
      <AccordionSummary
        expandIcon={<ChevronDownIcon fontSize='small' color='text.tertiary' />}
        aria-controls={"switch-accordion"}
        id={"switch-accordion"}
        sx={{
          flexDirection: "row-reverse",
          "& .MuiAccordionSummary-content": {
            justifyContent: "space-between",
            margin: 0,
          },
        }}
      >
        <Typography variant={"button"} color={"text.secondary"} sx={{ textTransform: "normal" }}>
          {title}
        </Typography>
        <Switch variant={"onOff"} color={"primary"} checked={checked} />
      </AccordionSummary>
      <AccordionDetails>
        {typeof children === "string" ? <Typography>{children}</Typography> : children}
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default SwitchAccordion;
