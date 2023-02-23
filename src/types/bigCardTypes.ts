import instagram from "../img/insta.svg";
import you from "../img/you.svg";
import twit from "../img/twit.svg";
import face from "../img/face.svg";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export type BigCardType = {
  icon: string;
  username: string;
  folowers: number;
    id: number
  today: number;
  flOrSub: string
  navColor: string
  folowerColor: string
};

export const bigCards: BigCardType[] = [
  { id:1,
    icon: face,
    username: "@nathanf",
    folowers: 1987,
    today: 12,
    flOrSub: "subscribers",
    navColor: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 w-full h-[5px]",
  folowerColor: "text-green-500"
  },
  { id: 2,
    icon: twit,
    username: "@nathanf",
    folowers: 1044,
    today: 99,
    flOrSub: "subscribers",
    navColor: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 w-full h-[5px]",
    folowerColor: "text-green-500"
  }
  ,
  { id: 3,
    icon: instagram,
    username: "@realnathanf",
    folowers: 11,
    today: 1099,
    flOrSub: "subscribers",
    navColor: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 w-full h-[5px]",
    folowerColor: "text-green-500"
  },
  { id: 4,
    icon: you,
    username: "Nathan F.",
    folowers: 8239,
    today: 144,
    flOrSub: "subscribers",
    navColor: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 w-full h-[5px]",
    folowerColor: "text-red-500"
  },
];
