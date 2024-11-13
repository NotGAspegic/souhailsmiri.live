import * as React from "react"
import { SVGProps } from "react"
import {motion} from "framer-motion"
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    //width={170.667}
    //height={170.667}
    viewBox="0 0 128 128"
    fill="none"
    {...props}
  >
    <motion.path d="M7.5 7.2c-.3.7-.4 26-.3 56.3l.3 55 57.8.3 57.8.2-.3-2.2-.3-2.3-55.2-.3L12 114l-.2-53.7C11.5 10 11.4 6.5 9.7 6.2c-.9-.2-1.9.2-2.2 1z"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 3, ease: "easeInOut" }}
    stroke="currentColor"
    strokeWidth="5" />
    <motion.path d="M103.4 18c-18 2.6-29.6 16.1-34.4 39.8-3.4 17-7.7 26-15 31.2-4.6 3.3-14.3 6-21.4 6-6.3 0-8.9 1.2-7.9 3.6 1.3 3.4 19.7.9 28.6-3.9 10.8-5.7 16-14.7 20-34.3 3-14.4 6.4-22.2 12.6-28.4 5.6-5.6 10.4-7.9 19.2-9.4 3.7-.6 7.1-1.4 7.5-1.8.9-.9-1.5-3.8-3-3.7-.6.1-3.4.5-6.2.9z"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 3, ease: "easeInOut" }}
    stroke="currentColor"
    strokeWidth="5" />
  </svg>
)
export default Logo