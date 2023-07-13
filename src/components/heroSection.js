export default function HeroSection() {
    return (
        <div className="border-solid border-2 border-red-100 h-screen flex">
            <div className="border-solid border-2 border-red-300 h-3/4 w-3/4 flex m-auto p-20 gap-10 shadow-xl">
                <div className="right content border-solid border-2 border-red-100 h-full w-1/2"></div>
                <div className="left content border-solid border-2 border-red-100 h-full w-1/2"></div>
            </div>
            {/* <div className="border-solid border-2 border-red-100 h-20 w-20 mx-auto mt-5"></div> */}
        </div>
    );
}
