import Typewriter from 'typewriter-effect'

export const Type = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Hello World!')
          .callFunction(() => {
            console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();
      }}
    />
  )
}