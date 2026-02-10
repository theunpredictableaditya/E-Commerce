import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

    const navigate = useNavigate();

    const navigateTo = (to) => {
        console.log(to)
        navigate(to)
    }


  return (
    <aside
      className="
        h-[calc(100vh-4rem)]
        w-64
        border-r
        px-4
        py-6
        flex
        flex-col
        gap-2
        bg-white
      "
    >
      <SidebarButton onClick={()=>{navigateTo("/entry/home")}} label="Home" />
      <SidebarButton onClick={()=>{navigateTo("/entry/services")}} label="Services & Feedback" />
      <SidebarButton onClick={()=>{navigateTo("/entry/account")}} label="Account & Privacy" />
      <SidebarButton onClick={()=>{navigateTo("/entry/orders")}} label="My Orders" />
    </aside>
  );
};

const SidebarButton = ({ label, onClick }) => {
  return (
    <button
    onClick={onClick}
      className="
        w-full
        text-left
        px-4
        py-3
        rounded-md
        text-sm
        font-medium
        text-gray-700
        hover:bg-gray-100
        transition
      "
    >
      {label}
    </button>
  );
};

export default SideBar;
