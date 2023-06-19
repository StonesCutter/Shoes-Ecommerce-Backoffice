import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PersonIcon from "@mui/icons-material/Person";

const sidebarConfig = {
  admin: [
    {
      label: "dashboard",
      link: "/dashboard",
      icon: <HomeIcon />,
    },
    {
      label: "manageProducts",
      link: "/products",
      icon: <LocalMallIcon />,
    },
    {
      label: "manageUsers",
      link: "/users",
      icon: <GroupsIcon />,
    },
    {
      label: "manageCoupons",
      link: "/coupons",
      icon: <ConfirmationNumberIcon />,
    },
    {
      label: "manageOrders",
      link: "/orders",
      icon: <ShoppingCartIcon />,
    },
    {
      label: "personalArea",
      link: "/personal-area",
      icon: <PersonIcon />,
    },
  ],
  data_entry: [
    {
      label: "manageProducts",
      link: "/products",
      icon: <LocalMallIcon />,
    },
    {
      label: "manageOrders",
      link: "/orders",
      icon: <ShoppingCartIcon />,
    },
    {
      label: "personalArea",
      link: "/personal-area",
      icon: <PersonIcon />,
    },
  ],
  marketing: [
    {
      label: "manageCoupons",
      link: "/coupons",
      icon: <ConfirmationNumberIcon />,
    },
    {
      label: "personalArea",
      link: "/personal-area",
      icon: <PersonIcon />,
    },
  ],
};

export { sidebarConfig };
