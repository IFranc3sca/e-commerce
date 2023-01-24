import {
  GrHomeRounded,
  GrList,
  GrRobot,
  GrCreditCard,
  GrUserManager,
} from "react-icons/gr";

export const navBarLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <GrHomeRounded />,
  },
  {
    id: 2,
    label: "Categories",
    route: "categories",
    icon: <GrList />,
  },
  {
    id: 3,
    label: "Prodocuts",
    route: "products",
    icon: <GrRobot />,
  },
  {
    id: 4,
    label: "Orders",
    route: "orders",
    icon: <GrCreditCard />,
  },
  {
    id: 5,
    label: "User",
    route: "users",
    icon: <GrUserManager />,
  },
];
