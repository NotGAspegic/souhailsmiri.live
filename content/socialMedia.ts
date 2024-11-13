import { SocialPlatform } from "@lib/types";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const socialMedia: SocialPlatform[] = [
  {
    title: "Twitter",
    Icon: AiOutlineTwitter,
    url: "https://www.linkedin.com/in/sousmiri/",
  },
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/sousmiri/",
  },
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/NotGAspegic",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:souhail.smiriaa@gmail.com",
  },
];

export default socialMedia;