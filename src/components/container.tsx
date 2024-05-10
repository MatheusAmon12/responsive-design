interface ContainerProps {
    src: string,
    alt: string,
    text: string,
    backgroundGradient?: string
}

const Container = ({ src, alt, text, backgroundGradient }: ContainerProps) => {
    return ( 
        <div className={`${backgroundGradient ? backgroundGradient : "text-black text-xs"} flex justify-center flex-col items-center py-[53px] gap-3 text-white`}>
            <img src={src} alt={alt} className="min-h-16 max-w-52 h-16" />
            <h2 className="px-4 text-center font-serif font-semibold text-[16px]">{text}</h2>
        </div>
     );
}
 
export default Container;