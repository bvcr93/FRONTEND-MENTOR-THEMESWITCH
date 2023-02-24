import { useTheme } from "../context/ThemeContext";
import React from "react";

type Props = {
  title: string;
  icon: string;
  percent: number;
  views: number;
};

const SmallCard = ({ title, icon, percent, views }: Props) => {
  const { theme } = useTheme();
  return (
    <div
      className={`h-[170px] w-[281px] ${
        !theme ? "bg-slate-200 " : "bg-slate-900"
      } ${theme ? "text-slate-300" : "tetx-slate-700"} 
       ${theme ? "hover:bg-slate-700": "hover:bg-slate-300"} 
       cursor-pointer transition-all ease-in duration-100  rounded-md flex 
       items-center justify-around flex-col`}
    >
      <nav className="flex justify-around items-center w-full mt-10">
        {title} 
        <img className="w-[20px] h-[20px]" src={icon} alt="" />
      </nav>
      <div className="flex justify-around w-full mb-10">
        <p>{views}</p>
        <p className="text-green-400">{percent}%</p>
      </div>
    </div>
  );
};

export default SmallCard;
