import poke from "../../assets/pokeapp.png";
import ecosun from "../../assets/ecosun.png";
import game from "../../assets/videogames.png";
import webchat from "../../assets/webchat.png";
import rick from "../../assets/rick.png";

export const projects = [
  {
    id: 1,
    title: "Pokemon App - Proyecto Individual",
    description:
      "Diseñar y desarrollar una App de Pokemon,consumiendo la API de pokeapi.co",
    stack: [
      "React",
      "Redux",
      "JavaScript",
      "CSS",
      "NodeJS",
      "ExpressJS",
      "Sequelize",
      "PostgreSQL",
    ],
    image: poke,
    github: "link",
    demo: "demo link",
  },
  {
    id: 3,
    title: "Videogames App",
    description:
      "Diseñar y desarrollar una App de Videojuegos, consumiendo la API de rawg.io",
    stack: [
      "React",
      "Redux",
      "JavaScript",
      "CSS",
      "NodeJS",
      "ExpressJS",
      "Sequelize",
      "PostgreSQL",
    ],
    image: game,
    github: "link",
    demo: "demo link",
  },
  {
    id: 4,
    title: "WebSocket Chat",
    description:
      "Proyecto en grupo que consiste en la creación de un chat en tiempo real usando socket.io",
    stack: [
      "React",
      "Redux",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "NodeJS",
      "ExpressJS",
      "Socket.io",
      "PostgreSQL",
      "JWT",
    ],
    image: webchat,
    github: "link",
    demo: "demo link",
  },
  {
    id: 5,
    title: "Rick And Morty Simple App",
    description:
      "Diseñar y desarrollar una App que muestre los personajes de Rick and Morty",
    stack: ["React", "JavaScript", "CSS"],
    image: rick,
    github: "link",
    demo: "demo link",
  },
];
