export default function Header({children,center,className}){
    return (
        <h1 className={`text-[80px] font-gf text-foreground ${className} ${center && "text-center"}`}>{children}</h1>
    );
}