export type Topic = {
    title: string;
    techs: string[];
  };
  
  const topics: Topic[] = [
    {
      title: "Programming",
      techs: ["C", "R", "Python"],
    },
    {
      title: "Web Development",
      techs: ["Astro", "TailwindCSS", "HTML", "React", "JavaScript"],
    },
    {
      title: "Hardware",
      techs: ["RISC-V", "ARM"],
    },
    {
      title: "Simulation",
      techs: ["Matlab", "LTSpice"],
    }
  ];
  
  export default topics;
  