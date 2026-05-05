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
            <p>Hello! I’m <strong>Souhail Smiri</strong>, a <strong>software developer</strong> from Tunisia with a primary focus on <strong>Next.js</strong> for building interactive and dynamic web applications. I graduated with a bachelor's degree in Computer Science from <strong>ISAMM, Tunisia</strong>, and I’m on a journey to specialize further in <strong>cybersecurity</strong>, aiming to pursue a master's degree in Europe to deepen my expertise in this field. Technology has fascinated me since childhood, and I've always been eager to explore and learn as much as possible.</p>

            <br/>
            
            <p>In web development, I enjoy creating smooth, responsive interfaces and using my preferred tech stack, which includes:</p>
            <br/>
            <ul>
              <li><strong>Framework</strong>: Next.js</li>
              <li><strong>Database</strong>: Supabase</li>
              <li><strong>CSS</strong>: TailwindCSS</li>
            </ul>

            <br/>

            <p>While I enjoy web development, my true passion lies in <strong>game development</strong> with <strong>Unity</strong>. As a dedicated gamer, I’ve spent countless hours playing immersive single-player games like <strong>Elden Ring</strong> and competing in multiplayer games like <strong>Valorant</strong>. Game development combines creativity and logic in a way that resonates deeply with me, allowing me to bring my love for gaming into my coding projects.</p>
            <br/>
            
            <p>Beyond games, I’m actively engaged in <strong>cybersecurity</strong> and enjoy the challenges of <strong>CTF</strong> (Capture The Flag) exercises. I’m continuously expanding my knowledge in this field, aiming to build a solid foundation for a future career in cybersecurity.</p>
            <br/>
            <p>I love my work and take great enjoyment (and sometimes frustration!) in every project I take on. Feel free to explore my portfolio, and if you have any questions or are interested in collaborating, don’t hesitate to reach out to me on <a href="https://www.linkedin.com/in/souhail-smiri" target="_blank" rel="noopener noreferrer"><b>LinkedIn</b></a> or via email at <a href="mailto:souhail.smiriaa@gmail.com"><u>souhail.smiriaa@gmail.com</u></a>.</p>
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
