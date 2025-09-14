type ChipListProps = {
    techStack: string[];
}

export default function TechStack({techStack}: ChipListProps): JSX.Element {
    return (
        <div className="mt-4">
            {techStack?.map((tech) => (
                <div key={tech} className={`rounded-full bg-gradient-to-b from-blue-500 to-indigo-500 px-2 py-1 inline-block text-white text-center mr-2`}>
                    <p className="font-roboto-mono text-xs">{tech}</p>
                </div>
            ))}
        </div>
    )
}