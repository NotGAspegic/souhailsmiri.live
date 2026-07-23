import {
  SiVisualstudiocode,
  SiFirefoxbrowser,
  SiVercel,
  SiPrettier,
  SiNpm,
  SiUnity,
  SiFigma,
  SiPostman,
  SiDocker,
  SiPython,
  SiTensorflow,
  SiOpencv,
  SiLinux,
  SiKubernetes,
  SiAnaconda,
  SiJupyter,
  SiPytorch,
  SiArduino,
  SiRaspberrypi,
} from "react-icons/si";

import {
  BsGithub,
  BsWindows,
} from "react-icons/bs";

import { FaGitAlt } from "react-icons/fa";
import { Utilities } from "@lib/types";

const utilities: Utilities = {
  title: "Utilities",
  description:
    "The tools and technologies I use for software development, artificial intelligence, computer vision, embedded systems, and everyday engineering workflows.",
  lastUpdate: "July 23, 2026",

  data: [
    {
      title: "Development Environment",
      data: [
        {
          name: "VS Code",
          description: "Primary code editor",
          Icon: SiVisualstudiocode,
          link: "https://code.visualstudio.com/",
        },
        {
          name: "Git",
          description: "Version control system",
          Icon: FaGitAlt,
          link: "https://git-scm.com/",
        },
        {
          name: "GitHub",
          description: "Code hosting and collaboration",
          Icon: BsGithub,
          link: "https://github.com/",
        },
        {
          name: "Docker",
          description: "Containerization platform",
          Icon: SiDocker,
          link: "https://www.docker.com/",
        },
        {
          name: "Linux",
          description: "Development environment",
          Icon: SiLinux,
          link: "https://www.linux.org/",
        },
        {
          name: "Windows 11",
          description: "Operating system",
          Icon: BsWindows,
          link: "https://www.microsoft.com/windows",
        },
      ],
    },

    {
      title: "AI & Computer Vision",
      data: [
        {
          name: "Python",
          description: "Primary language for AI and automation",
          Icon: SiPython,
          link: "https://www.python.org/",
        },
        {
          name: "TensorFlow",
          description: "Machine learning framework",
          Icon: SiTensorflow,
          link: "https://www.tensorflow.org/",
        },
        {
          name: "PyTorch",
          description: "Deep learning framework",
          Icon: SiPytorch,
          link: "https://pytorch.org/",
        },
        {
          name: "OpenCV",
          description: "Computer vision library",
          Icon: SiOpencv,
          link: "https://opencv.org/",
        },
        {
          name: "Jupyter Notebook",
          description: "Data science experimentation",
          Icon: SiJupyter,
          link: "https://jupyter.org/",
        },
        {
          name: "Anaconda",
          description: "Python environment management",
          Icon: SiAnaconda,
          link: "https://www.anaconda.com/",
        },
      ],
    },

    {
      title: "Embedded & Edge Computing",
      data: [
        {
          name: "Raspberry Pi",
          description: "Embedded AI and IoT development",
          Icon: SiRaspberrypi,
          link: "https://www.raspberrypi.com/",
        },
        {
          name: "Arduino",
          description: "Microcontroller development",
          Icon: SiArduino,
          link: "https://www.arduino.cc/",
        },
        {
          name: "Kubernetes",
          description: "Container orchestration",
          Icon: SiKubernetes,
          link: "https://kubernetes.io/",
        },
      ],
    },

    {
      title: "Software & Productivity",
      data: [
        {
          name: "Unity",
          description: "Game development engine",
          Icon: SiUnity,
          link: "https://unity.com/",
        },
        {
          name: "Postman",
          description: "API testing and development",
          Icon: SiPostman,
          link: "https://www.postman.com/",
        },
        {
          name: "Figma",
          description: "UI/UX design tool",
          Icon: SiFigma,
          link: "https://www.figma.com/",
        },
        {
          name: "Vercel",
          description: "Deployment platform",
          Icon: SiVercel,
          link: "https://vercel.com/",
        },
        {
          name: "npm",
          description: "JavaScript package manager",
          Icon: SiNpm,
          link: "https://www.npmjs.com/",
        },
        {
          name: "Prettier",
          description: "Code formatter",
          Icon: SiPrettier,
          link: "https://prettier.io/",
        },
        {
          name: "Mozilla Firefox",
          description: "Web browser",
          Icon: SiFirefoxbrowser,
          link: "https://www.mozilla.org/firefox/",
        },
      ],
    },
  ],
};

export default utilities;