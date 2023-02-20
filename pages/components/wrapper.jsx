
export default function wrapper({ children }) {
    return (
        <div className="bg-[#f0edeb]">
            <div className="mx-auto max-w-7xl">
                {children}
            </div>
        </div>
    );
}
