interface ContainerProps {
    src: string,
    alt: string,
    text: string
}

const Container = ({ src, alt, text }: ContainerProps) => {
    return ( 
        <div className="bg-red-500 flex justify-center flex-col items-center py-[53px] gap-3">
            <img src={src} alt={alt} className="min-h-16 max-w-52 h-16" />
            <h2 className="font-serif font-semibold text-[16px]">{text}</h2>
        </div>
     );
}
 
export default Container;