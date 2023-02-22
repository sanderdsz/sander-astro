import { ReactElement } from "react"

type CardProps = {
  height: string,
  colour?: string,
  custom?: string,
  children: any
}

const Card = ({ height, colour, custom, children }: CardProps) => {
  return (
    <div className={`${height} ${custom} ${colour} border-2 outline`}>
      { children }
    </div>
  )
}

export default Card