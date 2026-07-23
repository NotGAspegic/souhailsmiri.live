import { SkillType } from "@lib/types";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiCsharp,
  SiCplusplus,
  SiSupabase,
  SiKubernetes,
  SiUnity,
  SiLinux,
  SiRaspberrypi,
  SiDocker,
  SiTypescript,
  SiReact,
  SiArduino,
  SiPostgresql,
} from "react-icons/si";
import { SiTensorflow, SiOpencv } from "react-icons/si";

const skills: SkillType[] = [
  {
    name: "Python",
    Icon: SiPython,
  },
  {
    name: "Computer Vision",
    Icon: SiOpencv,
  },
  {
    name: "TensorFlow",
    Icon: SiTensorflow,
  },
  {
    name: "Unity",
    Icon: SiUnity,
  },
  {
    name: "C#",
    Icon: SiCsharp,
  },
  {
    name: "C++",
    Icon: SiCplusplus,
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    name: "React",
    Icon: SiReact,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    name: "Kubernetes",
    Icon: SiKubernetes,
  },
  {
    name: "Docker",
    Icon: SiDocker,
  },
  {
    name: "Linux",
    Icon: SiLinux,
  },
  {
    name: "Raspberry Pi",
    Icon: SiRaspberrypi,
  },
  {
    name: "Arduino",
    Icon: SiArduino,
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    name: "Supabase",
    Icon: SiSupabase,
  },
];

export default skills;