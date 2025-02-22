import Image from 'next/image';

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  smallText: string;
  githubUrl: string;
  newTabUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ url, title, description, smallText, githubUrl, newTabUrl }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transform transition-all duration-300 overflow-hidden mx-auto md:max-w-2xl ">
      <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center ">
        <div className="relative">
          <a href={newTabUrl} target="_blank" rel="noopener noreferrer">
            <Image src={url} alt={title} width={200} height={150} objectFit="cover" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-2/3 p-4">
        <a href={newTabUrl} target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
        </a>
        <p className="text-gray-700 mb-4">{description}</p>
        <footer className="mt-auto text-sm text-gray-500 font-bold">{smallText}</footer>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 mt-2 inline-block">
          {' '}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-stone-700" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const featuredProjects = [
  {
    url: '/resources/assets/aiyoutube.png',
    title: 'AI YouTube Video Summariser & Chatbot',
    description:
      "A web application that summarises YouTube video's providing in depth insights, and trains a chatbot on the content of the video offering an interactive Q&A in seconds! This application was built for my final year university disseratation, which can be found in the resources folder of this project.",
    smallText: 'NextJS  TypeScript  Tailwind CSS',
    githubUrl: 'https://github.com/theqasim/aivideosummarizer',
    newTabUrl: 'https://aivideosummarizer.vercel.app',
  },
  {
    url: '/resources/assets/aifitnessapplogo.png',
    title: 'AIFitness Companion',
    description:
      'A web application that initially generates a customized workout plan based on user inputs such as gender, fitness goals, and target muscle groups. After creating the plan, the app provides an interactive AI coach through a chatbot interface to guide users in achieving their workout goals.',
    smallText: '.NET MAUI  C#  XAML',
    githubUrl: 'https://github.com/theqasim/aifitnesscompanion',
    newTabUrl: 'https://github.com/theqasim/aifitnesscompanion',
  },
  {
    url: '/resources/assets/wwclogo.png',
    title: 'Web Wealth',
    description:
      'A platform that takes member sign ups to an exclusive content platform. Information is stored in a database, and the content on the website is protected via OAUTH ensuring members are part of the Discord community before gaining access. The OATUH is provided through the use of NextAuth.',
    smallText: 'NextJS  TypeScript  Tailwind CSS MongoDB NextAuth',
    githubUrl: 'https://github.com/theqasim/WW',
    newTabUrl: 'https://www.joinwebwealth.com',
  },
  {
    url: '/resources/assets/aifitness.png',
    title: 'AIFitness',
    description:
      'A web application that initially generates a customized workout plan based on user inputs such as gender, fitness goals, and target muscle groups. After creating the plan, the app provides an interactive AI coach through a chatbot interface to guide users in achieving their workout goals.',
    smallText: 'NextJS  TypeScript  Tailwind CSS',
    githubUrl: 'https://github.com/theqasim/aifitness',
    newTabUrl: 'https://aifitness-eight.vercel.app',
  },
  {
    url: '/resources/assets/aicontentdetector.png',
    title: 'AI Content Detector',
    description:
      "An advanced AI content detection tool utilizes sophisticated machine learning algorithms to accurately gauge the likelihood that a given piece of content is generated by artificial intelligence. It provides a unique percentage score to indicate the content's level of authenticity.",
    smallText: 'NextJS  TypeScript  Tailwind CSS',
    githubUrl: 'https://github.com/theqasim/AI-Detect',
    newTabUrl: 'https://github.com/theqasim/AI-Detect',
  },
  {
    url: '/resources/assets/aivoiceassistant.png',
    title: 'AI Voice Assistant',
    description:
      'An AI voice assistant powered by the ChatGPT API, capable of natural language recognition and task execution. It interfaces with other apps and continually improves its voice and text responses through machine learning, providing an intuitive, personalized experience.',
    smallText: 'HTML JavaScript CSS',
    githubUrl: 'https://github.com/theqasim/AI-Voice',
    newTabUrl: 'https://github.com/theqasim/AI-Voice',
  },
];

function HighlightedProjects() {
  return (
    <div className="space-y-10">
      {' '}
      {}
      <h1 className="text-4xl font-bold self-start mb-12 mt-4">
        {' '}
        {}
        <a className="text-black transition-all duration-500 ease-in-out border-b-4 border-transparent hover:border-black font-maison">Featured Projects</a>
      </h1>
      {featuredProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default HighlightedProjects;
