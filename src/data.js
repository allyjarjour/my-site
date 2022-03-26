export const logos = {
  react: {
    title: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  reactNative: {
    title: "React Native",
    src: "./react_native.png",
  },
  jest: {
    title: "Jest",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  reactTestingLibrary: {
    title: "React Testing Library",
    src: "./react_testing_library.png",
  },
  reactNativeTestingLibrary: {
    title: "React Native Testing Library",
    src: "./react_native_testing_library.png",
  },
  css: {
    title: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  html: {
    title: "Html5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  cloudinary: {
    title: "Cloudinary",
    src: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png",
  },
  expo: {
    title: "Expo Client",
    src: "./expo_client.png",
  },
  nativeBase: {
    title: "NativeBase",
    src: "https://miro.medium.com/fit/c/176/176/1*gvlV5stc45hkSpxD9cCC-g.png",
  },
  sass: {
    title: "Sass",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  mui: {
    title: "Material UI",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  nextJs: {
    title: "NextJS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  mongoDb: {
    title: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  typescript: {
    title: "Typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
};

export const socialLogos = {
  github: {
    title: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  linkedIn: {
    title: "LinkedIn",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
};

export const aChange = {
  gitHubLink: "https://github.com/Auctionable-Change",
  description: `A mobile app for buying and selling goods secondhand to support a
          charities of your choosing.`,
  title: "Auctionable Change",
  tech: [
    logos.reactNative,
    logos.cloudinary,
    logos.expo,
    logos.jest,
    logos.nativeBase,
    logos.reactNativeTestingLibrary,
  ],
};

const projects = [
  {
    gitHubLink: "https://github.com/allyjarjour/dailystandup",
    description: `A way to organize my daily standup summaries. 
    User authentication / OAuth through GutHub and mobile improvements
    are coming soon.`,
    title: "Standup Summary",
    tech: [logos.react, logos.nextJs, logos.mongoDb, logos.typescript],
    imageSrc: "https://media.giphy.com/media/KTlqeY67TgDK91mWzW/giphy.gif",
  },
  {
    description: `A collection of my projects and a bit about me.`,
    title: "My Portfolio (this site!)",
    tech: [logos.react, logos.sass, logos.mui],
  },
  {
    gitHubLink: "https://github.com/allyjarjour/muse",
    description: `An app for discovering new art by artist, 
    culture, medium or by what is currently on display at the Met museum.
    Users are able to favorite artwork to build their own curated collection.`,
    title: "MUSE",
    tech: [
      logos.react,
      logos.sass,
      logos.reactTestingLibrary,
      logos.jest,
    ],
    imageSrc: "https://media.giphy.com/media/CkhERKssTijHSOu4NI/giphy.gif",
  },
  {
    gitHubLink: "https://github.com/allyjarjour/vrad",
    description: `A bnb rental viewer showcasing listings in four Denver neighborhoods. After signing in, users 
    can select one of four areas before being directed to a listings page.`,
    title: "VRAD",
    tech: [logos.react, logos.reactTestingLibrary, logos.jest],
    imageSrc: "https://media.giphy.com/media/53MLGyCXHPtulN1WST/giphy.gif",
  },
];

export default projects;
