import { IconType } from "react-icons/lib";
import React from "react";
import { Variants } from "framer-motion";


export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
};

export type SpotifyTrack = {
  id: number;
  title: string;
  url: string;
  coverImage: {
    url: string;
  };
  artist: string;
};

export type SpotifyArtist = {
  id: number;
  name: string;
  url: string;
  coverImage: {
    url: string;
  };
  popularity: number;
};

export type ProjectType = {
  id: string;
  name: string;
  coverImage: string;
  description: string;
  githubURL: string;
  previewURL?: string;
  tools?: string[];
  pinned?: boolean;
};

export type SkillType = {
  name: string;
  Icon: IconType;
};

export type CertificateType = {
  id: string;
  title: string;
  issuedDate: string;
  orgName: string;
  orgLogo: string;
  url: string;
  pinned: boolean;
};

export type SocialPlatform = {
  title: string;
  Icon: IconType;
  url: string;
};

export type UtilityType = {
  title: string;
  data: {
    name: string;
    description: string;
    Icon: IconType | JSX.Element;
    link: string;
  }[];
};

export type Utilities = {
  title: string;
  description: string;
  lastUpdate: string;
  data: UtilityType[];
};

export type TableOfContents = {
  level: number;
  id: string;
  heading: string;
};


export type Song = {
  album: string;
  artist: string;
  albumImageUrl: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type FormInput = {
  to_name: string;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

export type SpotifyAccessToken = {
  access_token: string;
};

export type GithubRepo = {
  stargazers_count: number;
  fork: boolean;
  forks_count: number;
};

export type PageData = {
  title: string;
  description: string;
  keywords: string;
};

export type PageMeta = {
  home: PageData;
  stats: PageData;
  utilities: PageData;  
  certificates: PageData;
  projects: PageData;
  about: PageData;
};
