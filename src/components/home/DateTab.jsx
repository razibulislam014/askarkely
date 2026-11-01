export default function DateTab({date,title,isActive}){
    return (
        <div className={`flex flex-col gap-y-2 px-4 py-2 ${isActive && "bg-white border border-border rounded-xl"}`}>
            <p className="text-muted-text text-xs text-center">{title}</p>
            <p className="text-primary text-center font-medium">{date}</p>
        </div>
    );
}