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
    title: "Likes",
    icon:  face ,
    views: 52,
    percent: 2257,
    id: 2,
  },
  {
    title: "Page Views",
    icon:  insta ,
    views: 5462,
    percent: 2257,
    id: 3,
  },
  {
    title: "Profile Views",
    icon:  insta ,
    views: 52500,
    percent: 1375,
    id: 4,
  },
  {
    title: "Retweets",
    icon:  twit ,
    views: 117,
    percent: 303,
    id: 5,
  },
  {
    title: "Likes",
    icon:  twit ,
    views: 507,
    percent: 3,
    id: 6,
  },
  {
    title: "Likes",
    icon:  you ,
    views: 87,
    percent: 100,
    id: 7,
  },
  {
    title: "Page Views",
    icon:  face ,
    views: 87,
    percent: 11,
    id: 8,
  },
];
