import { useState } from 'preact/hooks'

export default function Button() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div className="w-fit h-fit px-4 py-2 drop-shadow-primary bg-primary-300">
                <span className="font-medium text-2xl text-snow-100">
                    Lets <span className="font-extrabold italic">TALK!</span>
                </span>
            </div>
        </div>
    )
}