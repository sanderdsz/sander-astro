import { ReactElement } from "react"

type CardProps = {
  height: string,
  width: string,
  colour: string,
  children: any
}

const Card = ({ height, width, colour, children }: CardProps) => {
  return (
    <div className={`${height} ${width} ${colour} border-2`}>
      <div className="flex justify-center align-middle">
        { children }
      </div>
    </div>
  )
}

export default Card