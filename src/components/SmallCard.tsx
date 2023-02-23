import React from "react";

type Props = {
  id: number;
  percent: number;
  views: number;
  icon: string;
  title: string;
};

const SmallCard = ({ id, percent, views, icon, title }: Props) => {
  return (
    <div className=" ">
{title}
{views}
    </div>
  );
};

export default SmallCard;
