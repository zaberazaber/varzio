import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiReact,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
  SiJavascript,
  SiPhp,
  SiAmazonaws,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiNativescript,
  SiFlutter,
  SiApple,
  SiGoogleadsense,
  SiGoogleanalytics,
  SiAndroidstudio,
  SiIos,
} from "react-icons/si";
import { IconType } from "react-icons";
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri";
import { DiAngularSimple, DiDart, DiDjango, DiDocker, DiDotnet, DiDrupal, DiGithub, DiGo, DiJava, DiMongodb, DiMysql, DiNodejs, DiSass, DiSwift } from "react-icons/di";

export const Logos = () => {
  return (
    <section className="relative -mt-2 -rotate-1 bg-zinc-950 border-y-2 px-2 border-rose-900 bg-rose w-[99.6%]">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-rose-900">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden border-b-2 border-rose-900">
        <TranslateWrapper reverse>
          <LogoItemsMiddle />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsMiddle />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsMiddle />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper >
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper >
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper >
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-rose to-rose/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-rose to-rose/0" />
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <Icon className="text-2xl text-rose-600 md:text-3xl" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiReact} name="React" />
    <LogoItem Icon={SiJavascript} name="JavaScript" />
    <LogoItem Icon={SiPhp} name="PHP" />
    <LogoItem Icon={SiHtml5} name="HTML" />
    <LogoItem Icon={SiAmazonaws} name="AWS" />
    <LogoItem Icon={SiPython} name="Python" />
    <LogoItem Icon={SiCss3} name="CSS" />
    <LogoItem Icon={SiBootstrap} name="Bootstrap" />
    <LogoItem Icon={SiTailwindcss} name="Tailwind" />
    <LogoItem Icon={RiNextjsLine} name="NEXTJS" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiWordpress} name="Wordpress" />
    <LogoItem Icon={DiSwift} name="Swift" />
    <LogoItem Icon={DiAngularSimple} name="Angular" />
    <LogoItem Icon={SiFlutter} name="Flutter" />
    <LogoItem Icon={DiJava} name="Java" />
    <LogoItem Icon={SiGoogleadsense} name="Adsense" />
    <LogoItem Icon={SiGoogleanalytics} name="Analytics" />
    <LogoItem Icon={SiAndroidstudio} name="Android" />
    <LogoItem Icon={SiIos} name="IOS" />
    <LogoItem Icon={SiGodaddy} name="GoDaddy" />
  </>
);

const LogoItemsMiddle = () => (
  <>
    <LogoItem Icon={DiDart} name="Dart" />
    <LogoItem Icon={DiDjango} name="Django" />
    <LogoItem Icon={DiDocker} name="docker" />
    <LogoItem Icon={DiDrupal} name="Drupal" />
    <LogoItem Icon={DiDotnet} name="dotnet" />
    <LogoItem Icon={DiSass} name="saas" />
    <LogoItem Icon={DiMysql} name="MYSQL" />
    <LogoItem Icon={DiMongodb} name="mongo" />
    <LogoItem Icon={DiGithub} name="Github" />
    <LogoItem Icon={DiNodejs} name="NodeJS" />
  </>
);
