import { useTheme } from "../context/ThemeContext";
import React from "react";

type Props = {
  title: string;
  icon: string;
  percent: number;
  views: number;
};

const SmallCard = ({ title, icon, percent, views }: Props) => {
  const { switchTheme, theme } = useTheme();
  return (
    <div
      className={`h-[170px] w-[290px] ${
        !theme ? "bg-slate-300 " : "bg-slate-900"
      } ${theme ? "text-white" : "tetx-slate-700"}  my-1 rounded-md flex items-center justify-around flex-col`}
    >
      <nav className="flex justify-around items-center w-full">
        {title} <img className="w-[20px] h-[20px]" src={icon} alt="" />
      </nav>
      <div className="flex justify-around w-full">
        <p>{views}</p>
        <p>{percent}%</p>
      </div>
    </div>
  );
};

export default SmallCard;
