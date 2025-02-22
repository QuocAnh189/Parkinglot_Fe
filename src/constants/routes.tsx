import { IoMdHome } from "react-icons/io";
import { MdManageSearch } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const routes = [
  { name: "Trang chủ", icon: <IoMdHome color="black" />, path: "/main" },
  {
    name: "Danh sách quản lý",
    icon: <MdManageSearch color="black" />,
    path: "/main/management",
  },
  {
    name: "Cài đặt",
    icon: <CiSettings color="black" />,
    path: "/main/setting",
  },
];

export default routes;
