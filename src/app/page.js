import Head from "next/head";
import Image from "next/image";
import myProfile from "@/../public/images/profile/myProfile.png";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import icons from '@/components/Icons';
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  return (
    <>
      <Head>
  <title>Rohan Gautam | Full-Stack Developer</title>
  <meta name="description" content="Hi, I'm Rohan, a beginner full-stack developer passionate about transforming ideas into innovative web applications. Explore my latest projects to see my expertise in Next.js and modern web development in action." />
  
  {/* Open Graph Meta Tags for social sharing */}
  <meta property="og:title" content="Rohan Gautam | Full-Stack Developer" />
  <meta property="og:description" content="A passionate full-stack developer specializing in Next.js and modern web technologies." />
  <meta property="og:image" content="/images/profile/myProfile.png" />
  <meta property="og:url" content="/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card for social preview */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rohan Gautam | Full-Stack Developer" />
  <meta name="twitter:description" content="Hi, I'm Rohan, a beginner full-stack developer passionate about transforming ideas into innovative web applications." />
  <meta name="twitter:image" content="/images/profile/myProfile.png" />

  {/* Canonical URL */}
  <link rel="canonical" href="/" />

  {/* Keywords */}
  <meta name="keywords" content="Rohan Gautam, full-stack developer, Next.js, JavaScript, web development, MERN stack, portfolio" />

  {/* Robots Meta Tag */}
  <meta name="robots" content="index, follow" />
</Head>

      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-1 md:pt-16 sm:pt-8">
          <div className="flex items-center w-full lg:flex-col">
            <div className="flex items-center justify-center w-1/2 lg:w-full">
              <Image
                className="w-96 h-auto"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                src={myProfile}
                alt="RohanGautam"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">

              <AnimatedText text="Turning Ideas Into Reality With Code." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">Hi, I'm Rohan, a beginner full-stack developer passionate about transforming ideas into innovative web applications. Explore my latest projects to see my expertise in Next.js and modern web development in action.
              </p>
              <div className="flex items-start gap-4 mt-2 lg:self-center xs:flex-col">

              <Link href="/dummy.pdf" target={"_blank"}
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid dark:border-light hover:border-dark border-transparent md:p-2 md:px-4 md:text-base" download={true}> Resume {<icons.LinkArrow className={"w-6 ml-1 sm:w-3"} />} </Link>

              <Link href={"mailto:rohan.gautam650@gmail.com"} target={"_blank"}
              className="flex underline items-center bg-dark text-light p-2.5 px-8 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid dark:border-light hover:border-dark border-transparent ml-2 md:p-2 md:px-4 md:text-base">Contact</Link>
              </div>

            </div>
          </div>
        </Layout>

        <HireMe/>

        {/* <div className="absolute right-8 bottom-3 inline-block w-20 md:hidden ">
          <Image src={LightBulb} alt="RohanGautam" className="w-full h-auto"/>
        </div> */}

      </main>
    </>
  );
}
