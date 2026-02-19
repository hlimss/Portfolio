import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiJava,
  SiSpring,
  SiDotnet,
  SiAngular,
  SiFlask,
  SiMysql,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  const showLiveLink = live && live !== "#" && live.trim() !== "";
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {showLiveLink && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <SiJava />,
  },
  spring: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <SiSpring />,
  },
  aspnet: {
    title: "ASP.NET",
    bg: "black",
    fg: "white",
    icon: <SiDotnet />,
  },
  angular: {
    title: "Angular",
    bg: "black",
    fg: "white",
    icon: <SiAngular />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  sqlserver: {
    title: "SQL Server",
    bg: "black",
    fg: "white",
    icon: <SiMicrosoftsqlserver />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "paniers-oceane",
    category: "E-commerce",
    title: "Les Paniers d'Océane",
    src: "/assets/projects-screenshots/paniers-oceane/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [],
    },
    live: "https://pannier.vercel.app/",
    github: "https://github.com/hlimss/Les-Paniers-dOceane",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Plateforme e-commerce de paniers repas équilibrés
          </TypographyP>
          <TypographyP className="font-mono ">
            Les Paniers d&apos;Océane est une application web moderne permettant de commander des paniers repas équilibrés 
            livrés chaque semaine. Développée avec React, TypeScript et Tailwind CSS, elle intègre Stripe pour les paiements 
            et Notion API pour la gestion des clients et commandes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Fonctionnalités principales</TypographyH3>
          <p className="font-mono mb-2">
            • Page d&apos;accueil avec hero section et présentation des formules (Végétarienne, Diététique, Sportive)
          </p>
          <p className="font-mono mb-2">
            • Section &quot;Comment ça marche&quot; expliquant le processus en 3 étapes simples
          </p>
          <p className="font-mono mb-2">
            • Formulaire de commande multi-étapes avec validation
          </p>
          <p className="font-mono mb-2">
            • Intégration Stripe pour les paiements sécurisés
          </p>
          <p className="font-mono mb-2">
            • Gestion des clients et commandes via Notion API
          </p>
          <p className="font-mono mb-2">
            • Animations fluides avec Framer Motion
          </p>
          <p className="font-mono mb-2">
            • Design responsive et moderne avec shadcn/ui
          </p>
          <TypographyH3 className="my-4 mt-8">Technologies utilisées</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Frontend :</strong> React 18, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, shadcn/ui
          </p>
          <p className="font-mono mb-2">
            <strong>Backend :</strong> Notion API, Express.js
          </p>
          <p className="font-mono mb-2">
            <strong>Paiement :</strong> Stripe
          </p>
          <p className="font-mono mb-2">
            <strong>Build Tool :</strong> Vite
          </p>
          <TypographyH3 className="my-4 mt-8">Design</TypographyH3>
          <p className="font-mono mb-2">
            Design moderne avec une palette de couleurs naturelles (Sage Green, Cream Beige) 
            reflétant les valeurs de fraîcheur et de bien-être. Interface intuitive et accessible 
            pour faciliter les commandes de paniers repas équilibrés.
          </p>
          <TypographyH3 className="my-4 mt-8">Exercices</TypographyH3>
          <p className="font-mono mb-2">
            Section dédiée aux exercices et activités physiques, permettant aux clients de suivre 
            leur progression et d&apos;accéder à des programmes d&apos;entraînement personnalisés 
            en complément de leurs paniers repas équilibrés.
          </p>
          <SlideShow images={[`${BASE_PATH}/paniers-oceane/exercices.png`]} />
        </div>
      );
    },
  },
  {
    id: "plaquepage",
    category: "Machine Learning",
    title: "Détection de Plaque d'Immatriculation",
    src: "/assets/projects-screenshots/plaquepage/plaquepage.png",
    screenshots: ["plaquepage.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "#",
    github: "https://github.com/hlimss/detection-plaque-immatriculation",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Système de détection et reconnaissance de plaques d&apos;immatriculation
          </TypographyP>
          <TypographyP className="font-mono ">
            Application de vision par ordinateur développée avec Python permettant de détecter, 
            extraire et reconnaître les plaques d&apos;immatriculation à partir d&apos;images ou de vidéos. 
            Utilise des techniques de traitement d&apos;image et de reconnaissance optique de caractères (OCR).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Fonctionnalités principales</TypographyH3>
          <p className="font-mono mb-2">
            • Détection automatique des plaques d&apos;immatriculation dans les images
          </p>
          <p className="font-mono mb-2">
            • Extraction et préprocessing des plaques détectées
          </p>
          <p className="font-mono mb-2">
            • Reconnaissance optique de caractères (OCR) pour lire le texte
          </p>
          <p className="font-mono mb-2">
            • Traitement d&apos;images avec filtres et amélioration de contraste
          </p>
          <p className="font-mono mb-2">
            • Interface web avec Flask pour upload et traitement d&apos;images
          </p>
          <TypographyH3 className="my-4 mt-8">Technologies utilisées</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Langages :</strong> Python
          </p>
          <p className="font-mono mb-2">
            <strong>Bibliothèques :</strong> OpenCV, Tesseract OCR, NumPy, PIL/Pillow
          </p>
          <p className="font-mono mb-2">
            <strong>Framework Web :</strong> Flask (pour l&apos;interface)
          </p>
          <p className="font-mono mb-2">
            <strong>Traitement d&apos;image :</strong> Détection de contours, filtrage, segmentation
          </p>
          <TypographyH3 className="my-4 mt-8">Applications</TypographyH3>
          <p className="font-mono mb-2">
            Ce système peut être utilisé pour la gestion de parking, le contrôle d&apos;accès, 
            la surveillance routière, ou tout système nécessitant l&apos;identification automatique 
            de véhicules par leur plaque d&apos;immatriculation.
          </p>
        </div>
      );
    },
  },
  {
    id: "email-spam-detection",
    category: "Machine Learning",
    title: "Email Spam Detection",
    src: "/assets/projects-screenshots/email-spam-detection/emailspam.png",
    screenshots: ["emailspam.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "#",
    github: "https://github.com/hlimss/Email_Spam_Detection",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Application de détection de spam par Machine Learning
          </TypographyP>
          <TypographyP className="font-mono ">
            Application Shiny de détection de spam par Machine Learning développée avec R et Python. 
            Ce projet utilise des algorithmes de machine learning pour classifier automatiquement les emails 
            en spam ou non-spam, avec une interface interactive pour tester et visualiser les résultats.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Fonctionnalités principales</TypographyH3>
          <p className="font-mono mb-2">
            • Classification automatique des emails en spam ou non-spam
          </p>
          <p className="font-mono mb-2">
            • Analyse prédictive avec modèles de machine learning
          </p>
          <p className="font-mono mb-2">
            • Interface Shiny interactive pour tester les emails
          </p>
          <p className="font-mono mb-2">
            • Visualisation des résultats et métriques de performance
          </p>
          <p className="font-mono mb-2">
            • Analyse exploratoire des données (EDA)
          </p>
          <p className="font-mono mb-2">
            • Préprocessing et feature engineering des emails
          </p>
          <TypographyH3 className="my-4 mt-8">Technologies utilisées</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Langages :</strong> R, Python
          </p>
          <p className="font-mono mb-2">
            <strong>Framework :</strong> Shiny (R)
          </p>
          <p className="font-mono mb-2">
            <strong>Machine Learning :</strong> Scikit-learn, modèles de classification
          </p>
          <p className="font-mono mb-2">
            <strong>Bibliothèques :</strong> Pandas, NumPy pour le traitement des données
          </p>
          <TypographyH3 className="my-4 mt-8">Applications</TypographyH3>
          <p className="font-mono mb-2">
            Cette application peut être utilisée pour filtrer automatiquement les emails indésirables, 
            améliorer la sécurité des boîtes mail, et réduire le temps passé à trier les emails manuellement.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "Portfolio 3D Interactif",
    src: "/assets/projects-screenshots/portfolio/portfolio.png",
    screenshots: ["portfolio.png", "projects.png"],
    live: "#",
    github: "https://github.com/hlimss/3d-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Portfolio 3D interactif avec clavier animé
          </TypographyP>
          <TypographyP className="font-mono ">
            Mon portfolio personnel développé avec Next.js et TypeScript, présentant mes projets, 
            compétences et expériences dans une interface moderne et interactive. Le clavier 3D 
            animé permet de découvrir mes compétences techniques de manière ludique.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Clavier 3D Interactif{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Un clavier 3D rendu avec Spline où chaque touche représente une compétence technique. 
            En survolant ou en appuyant sur une touche, vous découvrez mes compétences avec des 
            animations fluides et des descriptions détaillées.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/portfolio.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Design Moderne</TypographyH3>
          <p className="font-mono mb-2">
            Interface moderne avec thème sombre, particules animées en arrière-plan, et animations 
            fluides avec Framer Motion pour une expérience utilisateur immersive.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Sections</TypographyH3>

          <p className="font-mono mb-2">
            Présentation de mes projets, expériences professionnelles, compétences techniques, 
            et formulaire de contact intégré. Navigation fluide avec scroll animé.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/portfolio.png`,
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/projet.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">
            Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Spline 3D, shadcn/ui, 
            et bien d&apos;autres pour créer une expérience unique et mémorable.
          </p>
        </div>
      );
    },
  },
];
export default projects;
