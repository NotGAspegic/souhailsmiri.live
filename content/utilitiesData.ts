import {
    SiVisualstudiocode,
    SiNano,
    SiFirefoxbrowser,
    SiOperagx,
    SiVercel,
    SiPrettier,
    SiNpm,
    SiUnity,
    SiDiscord,
    SiProtonvpn,
    SiFigma,
    SiTermius,
    SiSpotify,
    SiObsstudio,
    Si7Zip,
    SiCanva,
    SiNotepadplusplus,
    SiPostman,
  } from "react-icons/si";
  import {
    BsFillPaletteFill,
    BsFillTerminalFill,
    BsWindows,
    BsGithub,
  } from "react-icons/bs";
  import { FaGitAlt } from "react-icons/fa";
  import { Utilities } from "@lib/types";
  
  const utilities: Utilities = {
    title: "Utilities",
    description:
      "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
    lastUpdate: "Nov 14, 2024",
    data: [
      {
        title: "System",
        data: [
          {
            name: "VSCode",
            description: "Primary Code editor",
            Icon: SiVisualstudiocode,
            link: "https://code.visualstudio.com/download",
          },
          {
            name: "Notepad++",
            description: "Text editor",
            Icon: SiNotepadplusplus,
            link: "https://notepad-plus-plus.org",
          },
          {
            name: "Andromeda",
            description: "VS Code theme",
            Icon: BsFillPaletteFill,
            link: "https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda",
          },
          {
            name: "Oh My Posh",
            description: "Terminal Theme",
            Icon: BsFillTerminalFill,
            link: "https://ohmyposh.dev",
          },
          {
            name: "Windows 11",
            description: "Operating System",
            Icon: BsWindows,
            link: "https://www.microsoft.com/software-download/windows11",
          },
          {
            name: "Opera GX",
            description: "Primary Browser",
            Icon: SiOperagx,
            link: "https://www.opera.com/gx/gx-browser",
          },
          {
            name: "Mozilla Firefox",
            description: "Secondary Browser",
            Icon: SiFirefoxbrowser,
            link: "https://www.mozilla.org/en-US/firefox/new/",
          },
        ],
      },
  
      {
        title: "Software & Applications",
        data: [
          {
            name: "Vercel",
            description: "Hosting for Projects",
            Icon: SiVercel,
            link: "http://vercel.com/",
          },
          {
            name: "Unity",
            description: "Game development Engine",
            Icon: SiUnity,
            link: "https://unity.com",
          },
          {
            name: "Prettier",
            description: "For Code formatting",
            Icon: SiPrettier,
            link: "https://prettier.io/",
          },
          {
            name: "Git",
            description: "Version Control",
            Icon: FaGitAlt,
            link: "https://git-scm.com/downloads",
          },
          {
            name: "Github Desktop",
            description: "To Manage the Github Project and Changes",
            Icon: BsGithub,
            link: "https://desktop.github.com/",
          },
          {
            name: "Figma",
            description: "Primary Design tool",
            Icon: SiFigma,
            link: "https://www.figma.com/downloads/",
          },
          {
            name: "npm",
            description: "Primary Package Manager",
            Icon: SiNpm,
            link: "https://www.npmjs.com",
          },
          {
            name: "Canva",
            description: "Secondary Design tool",
            Icon: SiCanva,
            link: "https://www.canva.com/",
          },
          {
            name: "Discord",
            description: "For Interactions",
            Icon: SiDiscord,
            link: "https://discord.com",
          },
          {
            name: "OBS Studio",
            description: "Screen Recorder",
            Icon: SiObsstudio,
            link: "https://obsproject.com/",
          },
          {
            name: "Spotify",
            description: "To Listen Music",
            Icon: SiSpotify,
            link: "https://www.spotify.com/us/download/windows/",
          }, 
          {
            name: "GNU Nano",
            description: "Quick Editing",
            Icon: SiNano,
            link: "https://www.nano-editor.org",
          },
          {
            name: "Termius",
            description: "SSH platform",
            Icon: SiTermius,
            link: "https://termius.com",
          },
          {
            name: "Postman",
            description: "API Testing",
            Icon: SiPostman,
            link: "https://postman.com",
          },
          {
            name: "7Zip",
            description: "Extracting Folders",
            Icon: Si7Zip,
            link: "https://www.7-zip.org",
          },
          {
            name: "Proton VPN",
            description: "VPN",
            Icon: SiProtonvpn,
            link: "https://protonvpn.com",
          },
        ],
      }, 
    ],
  };
  
  export default utilities;