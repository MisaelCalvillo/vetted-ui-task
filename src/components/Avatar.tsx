type AvatarProps = {
  className?: string
  src: string
}

function Avatar({ className, src }: AvatarProps) { 
  return (
    <div 
      className={`${className} w-6 h-6 bg-cover bg-no-repeat rounded-full bg-center mr-[7px]`}
      style={{
        backgroundImage: `url(${src})`
      }}
    ></div>
  )
}

export default Avatar;