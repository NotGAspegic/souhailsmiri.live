import { FadeContainer, opacityVariant } from "@content/FramerMotionVariants";
import { ILinkedInExperience, ILinkedinResponse } from "@lib/interface";

import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import Image from "next/image";
import classNames from "classnames";
import { getUserDataValue } from "@lib/supabase";
import MetaData from "@components/MetaData";
import { months } from "@utils/date";
import PageTop from "@components/PageTop";
import pageMeta from "@content/meta";
import { motion } from "framer-motion";

type AboutLinkedInData = Pick<ILinkedinResponse, "experiences">;

const fallbackLinkedIn: AboutLinkedInData = {
  experiences: [],
};

export default function About({
  linkedin
}: {
  linkedin: string | null;
}) {
  const parsedLinkedIn: AboutLinkedInData = linkedin
    ? JSON.parse(linkedin)
    : fallbackLinkedIn;
  const isUnoptimizedLogo = (src: string) =>
    src.includes("placehold.co") || src.endsWith(".svg");
  const experiences: ILinkedInExperience[] = parsedLinkedIn.experiences ?? [];

  return (
    <>
      <MetaData
        title={pageMeta.about.title}
        description={pageMeta.about.description}
        keywords={pageMeta.about.keywords}
      />
      <div className="pageTop mt-30 print:hidden">
        <PageTop pageTitle="About me">
          <div className="mt-5">
            <p> Hello! I'm <strong>Souhail Smiri</strong>, a{" "}
              <strong>Master's student in Computer Engineering for Intelligent Systems</strong>{" "}
              at the <strong>University of Verona</strong>, originally from Tunisia.
              I'm passionate about building intelligent software that combines{" "}
              <strong>Artificial Intelligence</strong>,{" "}
              <strong>Computer Vision</strong>,{" "}
              <strong>Machine Learning</strong>, and{" "}
              <strong>Embedded Systems</strong> to solve real-world problems.
            </p>

            <br />

            <p>
              I graduated with a Bachelor's degree in{" "}
              <strong>Computer Science (Internet of Things specialization)</strong>{" "}
              from <strong>ISAMM, Tunisia</strong>, where I developed a solid
              foundation in software engineering, IoT, networking, and distributed
              systems. During my master's studies, my interests have shifted toward
              AI-driven applications, particularly computer vision, deep learning,
              edge computing, and intelligent automation.
            </p>

            <br />

            <p>
              Recently, I've been working on projects involving{" "}
              <strong>OpenCV</strong>, <strong>MediaPipe</strong>,{" "}
              <strong>TensorFlow Lite</strong>, machine learning, and data analytics.
              I enjoy building real-time AI applications, from hand tracking systems
              and embedded AI solutions to analytics platforms powered by machine
              learning.
            </p>

            <br />

            <p>
              Alongside AI, I have a strong software engineering background and enjoy
              developing modern applications using technologies such as:
            </p>

            <br />

            <ul>
              <li>
                <strong>Artificial Intelligence:</strong> Python, TensorFlow Lite,
                OpenCV, MediaPipe
              </li>
              <li>
                <strong>Frontend:</strong> Next.js, React, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express, Supabase, PostgreSQL
              </li>
              <li>
                <strong>Tools:</strong> Docker, Kubernetes, Linux, Raspberry Pi, Git
              </li>
            </ul>

            <br />

            <p>
              Beyond software development, I'm interested in{" "}
              <strong>cybersecurity</strong>, <strong>embedded systems</strong>, and{" "}
              <strong>cloud technologies</strong>. I enjoy continuously learning new
              technologies, experimenting with personal projects, and applying AI to
              solve practical engineering challenges.
            </p>

            <br />

            <p>
              Outside of programming, I enjoy strategy and RPG games, exploring new
              technologies, and challenging myself with projects that push me to learn
              something new. I believe the best way to grow as an engineer is through
              continuous learning, building, and sharing knowledge.
            </p>

            <br />

            <p>
              Feel free to explore my portfolio, and if you'd like to collaborate or
              simply connect, don't hesitate to reach out on{" "}
              <a
                href="https://www.linkedin.com/in/souhail-smiri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>LinkedIn</b>
              </a>{" "}
              or via email at{" "}
              <a href="mailto:souhail.smiriaa@gmail.com">
                <u>souhail.smiriaa@gmail.com</u>
              </a>
              .
            </p>
          </div>
        </PageTop>
      </div>

      <div className="pageTop mt-0 print:hidden">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={opacityVariant}
          className="my-2 text-xl font-bold text-left md:text-3xl"
        >
          Recent Experience
        </motion.h3>

        <AnimatedDiv
          variants={FadeContainer}
          className="flex flex-col gap-2 pt-10 pb-5 overflow-x-scroll md:gap-4"
        >
          {experiences.map((experience) => {
            return (
              <div
                key={experience.company_linkedin_profile_url}
                className="p-5 bg-white dark:bg-darkSecondary rounded-lg flex flex-start gap-3 shadow flex-col xs:flex-row"
              >
                <div className="min-w-[56px] w-14 h-14 max-w-[56px] relative mt-1">
                  <Image
                    src={experience.logo_url}
                    width={400}
                    height={400}
                    className="object-cover"
                    alt={experience.company}
                    unoptimized={isUnoptimizedLogo(experience.logo_url)}
                  />
                </div>

                <div
                  className={classNames(
                    "flex flex-col gap-2 flex-grow",
                    experience.job_titles.length > 1 ? "ml-10" : "ml-0"
                  )}
                >
                  {experience.job_titles.length > 1 && (
                    <h2
                      className={classNames(
                        "text-xl font-semibold",
                        experience.job_titles.length > 1 ? "-ml-10" : "ml-0"
                      )}
                    >
                      {experience.company}
                    </h2>
                  )}
                  {experience.job_titles.map((job) => (
                    <div key={job.title} className="relative w-full group">
                      {experience.job_titles.length > 1 && (
                        <span className="-left-[29px] h-full absolute w-0.5 bg-black dark:bg-gray-500 top-5 peer-last:opacity-0 group-last:opacity-0"></span>
                      )}
                      <div
                        className={
                          "flex flex-col sm:flex-row items-start sm:justify-between"
                        }
                      >
                        <div className="flex flex-col">
                          <h3 className="text-lg font-semibold relative">
                            {job.title}

                            {experience.job_titles.length > 1 && (
                              <span className="absolute -left-[31.5px] h-2 w-2 top-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-gray-500 ring-[3px] ring-black dark:ring-white"></span>
                            )}
                          </h3>
                          {experience.job_titles.length === 1 && (
                            <p className="text-base">{experience.company}</p>
                          )}
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {job.location}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-sm">
                            <span>
                              {months[job.starts_at.month - 1]}{" "}
                              {job.starts_at.year}
                            </span>
                            <span> - </span>
                            <span>
                              {!job.ends_at ? (
                                "Present"
                              ) : (
                                <>
                                  {months[job.ends_at.month - 1]}{" "}
                                  {job.ends_at.year}
                                </>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>

                      {job.description && (
                        <p className="whitespace-pre-wrap mt-2 text-sm text-black/80 dark:text-white/50">
                          {job.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </AnimatedDiv>
      </div>
    </>
  );
}

export async function getStaticProps() {

  const { data: linkedin } = await getUserDataValue("linkedin");

  return {
    props: {
      linkedin: linkedin ?? null
    },
    revalidate: 60 * 60 * 24 , // everyday
  };
}
