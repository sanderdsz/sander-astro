import { Type } from "../components/Type/Type";

export const About = () => {
  return (
    <div>
      <Type />
      <div className="py-6">
        <span className="font-semibold text-primary-300 text-4xl">Sander</span>{" "}
        <span className="font-semibold text-secondary-300 text-4xl">dos Santos Zuchinalli</span>
      </div>
      <span className="">
        I’m a software engineer specialized in building (occasionally designing)
        excellent digital experiences, which I tend to switch between backend
        and frontend technologies at {" "}
        <a
          target="_blank"
          href="https://www.nttdata.com/global/en/"
          className="text-primary-300 transition duration-250
          hover:p-1 hover:bg-primary-100 hover:text-white-100 hover:cursor-pointer"
        >
          NTT DATA.
        </a>
      </span>
    </div>
  )
}