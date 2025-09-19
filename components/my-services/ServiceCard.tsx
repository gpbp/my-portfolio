type ServiceCardProps = {
    title: string,
    content: string,
    footer: React.ReactNode
}
export default function ServiceCard({title, content, footer}: ServiceCardProps): JSX.Element {
  return (
        <div className="rounded-lg flex-1/3 flex flex-col items-center shadow-xs p-4 shadow-gray-500 hover:shadow-md hover:cursor-pointer ease-in-out duration-500 hover:scale-105 hover:z-10 h-50 bg-white/5 border-transparent">
            <div className="text-center font-roboto-mono font-bold mb-4 text-black">{title}</div>
            <div className="text-sm font-roboto-mono mb-4 text-black">{content}</div>
            {footer}
        </div>
    );
}