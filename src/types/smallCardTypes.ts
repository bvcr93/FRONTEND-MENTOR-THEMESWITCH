import insta from "../img/insta.svg";
import face from "../img/face.svg";
import twit from "../img/twit.svg";
import you from "../img/you.svg";

 type SmallCard = {
  title: string;
  icon: string;
  views: number;
  percent: number;
  id: number;
};

export const smallCards: SmallCard[] = [
  {
    title: "Page Views",
    icon:  face ,
    views: 87,
    percent: 3,
    id: 1,
  },
  {
    title: "Page Views",
    icon:  twit ,
    views: 87,
    percent: 2257,
    id: 2,
  },
  {
    title: "Page Views",
    icon:  twit ,
    views: 87,
    percent: 2257,
    id: 3,
  },
  {
    title: "Page Views",
    icon:  you ,
    views: 87,
    percent: 2257,
    id: 4,
  },
  {
    title: "Page Views",
    icon:  insta ,
    views: 87,
    percent: 2257,
    id: 5,
  },
  {
    title: "Page Views",
    icon:  face ,
    views: 87,
    percent: 2257,
    id: 6,
  },
  {
    title: "Page Views",
    icon:  face ,
    views: 87,
    percent: 2257,
    id: 7,
  },
  {
    title: "Page Views",
    icon:  face ,
    views: 87,
    percent: 2257,
    id: 8,
  },
];
