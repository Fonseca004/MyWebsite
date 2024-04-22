export type Candidatura = {
    UC: string;
    Nota: string;
    Pinned?: boolean;
  };
  
  const candidaturas: Candidatura[] = [
    {
      UC: "Sistemas Digitais",
      Nota: "16",
      Pinned: true,
    },
    {
      UC: "Arquitetura de Computadores",
      Nota: "18",
      Pinned: true,
    },
    {
      UC: "Programação",
      Nota: "17",
      Pinned: true,
    },
    {
      UC: "Algoritmos e Estruturas de Dados",
      Nota: "15",
      Pinned: true,
    },
    {
      UC: "Programação Concorrente",
      Nota: "17",
      Pinned: true,
    },
    {
      UC: "Análise de Circuitos",
      Nota: "18",
      Pinned: true,
    },
    {
      UC: "Sinais e Sistemas",
      Nota: "14",
      Pinned: false,
    },
    {
      UC: "Eletrotecnia Teórica",
      Nota: "14",
      Pinned: false,
    },
  ];
  
  export default candidaturas;
  