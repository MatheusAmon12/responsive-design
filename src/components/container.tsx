interface ContainerProps {
    src: string,
    alt: string,
    text: string,
    backgroundGradient?: string
}

const Container = ({ src, alt, text, backgroundGradient }: ContainerProps) => {
    return ( 
        <div 
            className={`
                ${backgroundGradient ? backgroundGradient : "text-black text-xs"} 
                flex justify-center flex-col items-center py-[53px] md:py-28 xl:py-52 gap-3 text-white h-full`
            }
        >
            <img src={src} alt={alt} className="h-16 md:h-[88px] xl:h-32 drop-shadow-md" />
            <h2 className="px-4 text-center font-serif font-semibold md:text-lg xl:text-xl">
                {text}
            </h2>
        </div>
     );
}
 
export default Container;