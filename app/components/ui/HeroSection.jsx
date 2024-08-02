import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className={
        "md:mx-8 flex items-center align-center gap-8 md:justify-between flex-col md:flex-row" 
      }
    >
      <div className="mx-8 min-w-72  md:w-[500px] xl:w-[600px] flex flex-col gap-6 md:mx-auto my-8 md:my-36 items-center">
        <h1 className="uppercase text-slate-600 dark:text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
        <span className="normal-case w-full text-lg md:text-2xl font-bold text-ourpink-light dark:text-white">Ofrecemos aprendizaje, no cursos</span><br/>
          Experiencias
          <span className="uppercase font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-ourpink-light dark:text-ourpink-dark">
            {" "}
            únicas!
          </span>
        </h1>
        <h3 className="text-md md:text-lg">
          Con nuestros cursos obtendrás una ruta de aprendizaje especial
          donde lo único que importa es que logres aprender y conseguir esa meta
          que tanto buscas. Pudiendo especializarte en cualquier especialidad
          del mundo IT.
        </h3>
        <div className="flex flex-row mr-auto gap-6">
          <Link
            href="/products"
            className="transition mr-auto px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-ourpink-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
          >
            Nuestros Cursos
          </Link>
          <Link
            href="/about"
            className="transition mr-auto px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-ourpink-light/80 dark:text-white rounded-lg border-2 border-ourpink-light/80 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent dark:border-2 dark:border-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
          >
            Nosotros
          </Link>
        </div>
      </div>
      <div className="size-0 md:size-1/2">
        <Image
          src={"/images/HeroSection.svg"}
          width={744}
          height={44}
          alt="Hero Section Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
