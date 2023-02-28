
export default function wrapper({ children }) {
    return (
        <div className="bg-[#f0edeb]">
            <div className="mx-auto max-w-full lg:max-w-[78.25rem]">
                {children}
            </div>
        </div>
    );
}
