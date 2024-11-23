import MuiBadge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material";

type Props = BadgeProps & {
  outlined?: "large" | "small";
};

const Badge = styled(MuiBadge)<Props>(({ outlined, theme }) => {
  if (outlined === "small") {
    return {
      "& .MuiBadge-badge": {
        height: 6,
        width: 6,
        minWidth: 6,
        outline: `1px solid ${theme.palette.background.paper}`,
      },
    };
  }
  return {
    "& .MuiBadge-badge": {
      outline: `1px solid ${theme.palette.background.paper}`,
    },
  };
});

export default Badge;
