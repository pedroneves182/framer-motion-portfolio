import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

export default function RecentProjects() {
  return (
    <section className="py-12 sm:py-20" id="projects">
      <h1 className="heading">
        Pequena seleção de {' '}
        <span className="text-gradient_blue">
          projetos recentes
        </span>
      </h1>
      <div className="flex-center flex-wrap p-4 gap-x-24 gap-y-8 mt-8">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex-center w-[80vw] sm:w-[570px]">
            <PinContainer title={link} href={link}>
              <div className="relative flex-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#071035]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex-center"
                      style={{ transform: `translateX(-${6 * index + 2}px)`, }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex-center">
                  <p className="flex text-sm md:text-base lg:text-xl">Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="#389bff"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}
