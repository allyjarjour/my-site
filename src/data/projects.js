const logos = {
  react: {
    alt: "React logo",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  jest: {
    alt: "Jest logo",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  css: {
    alt: "CSS3 logo",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  html: {
    alt: "Html5 logo",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  cloudinary: {
    alt: "Cloudinary logo",
    src: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png",
  },
  expo: {
    alt: "Expo logo",
    src: "./expo_client.png",
  },
  nativeBase: {
    alt: "NativeBase logo",
    src: "https://miro.medium.com/fit/c/176/176/1*gvlV5stc45hkSpxD9cCC-g.png",
  },
  sass: {
    alt: "Sass logo",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  mui: {
    alt: "Material UI logo",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
};

export const aChange = {
    description: `A mobile app for buying and selling goods secondhand to support a
          charities of your choosing.`,
    title: "Auctionable Change",
    tech: [
        logos.react,
        logos.cloudinary,
        logos.expo,
        logos.jest,
        logos.nativeBase
      ,
    ],
}

const projects = [
  {
    description: `A collection of my projects and a bit about me.`,
    title: "My Portfolio (this site!)",
    tech: [
      logos.react,
      logos.sass,
      logos.mui
    ],
  },
];

export default projects;
