import Head from "next/head";
import Image from "next/image";
import myProfile from "@/../public/images/profile/myProfile.png";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import icons from '@/components/Icons';
import HireMe from "@/components/HireMe";
import LightBulb from "@/../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home profile</title>
        <meta name="Profile" content="About me" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-1 m-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                className="w-96 h-auto"
                objectFit="fill"
                src={myProfile}
                alt="RohanGautam"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">

              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left"/>

              <p className="my-4 text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2">
              <Link href="/dummy.pdf" target={"_blank"}
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid hover:border-dark border-transparent" download={true}> Resume {<icons.LinkArrow className={"w-6 ml-1"} />} </Link>

              <Link href={"mailto:rohan.gautam650@gmail.com"} target={"_blank"}
              className="flex underline items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid hover:border-dark border-transparent ml-2">Contact</Link>
              </div>

            </div>
          </div>
        </Layout>

        <HireMe/>

        {/* <div className="absolute right-8 bottom-3 inline-block w-20">
          <Image src={LightBulb} alt="RohanGautam" className="w-full h-auto"/>
        </div> */}

      </main>
    </>
  );
}
