export default function HeroSection() {
    return (
        <div className="h-screen flex">
            <div className="h-3/5 w-3/4 grid auto-rows-min gap-14 m-auto shadow-xl rounded-md bg-contain bg-hero-picture bg-right bg-no-repeat bg-slate-300">
                <div className="p-20">
                    <div className="grid auto-rows-min h-full w-1/2 gap-y-10">
                        <h1 className="text-4xl lg:text-5xl font-bold max-h-fit text-left tracking-wide">
                            Searching for your next{' '}
                            <span className="text-midnightBlue-100">
                                Developer?
                            </span>
                        </h1>
                        <p className="text-left text-2xl tracking-wide w-2/3">
                            {' '}
                            Please allow me to introduce myself!
                        </p>
                        <div className="mt-3 grid sm:grid-cols-2 grid-cols-1 justify-items-center gap-4">
                            <a
                                href={'_#'}
                                className="w-40 relative rounded-full px-5 py-2.5 overflow-hidden group bg-midnightBlue-200 relative hover:bg-gradient-to-r hover:from-midnightBlue-200 hover:to-midnightBlue-100 text-white hover:ring-2 hover:ring-offset-2 hover:ring-midnightBlue-100 transition-all ease-out duration-300"
                            >
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative font-semibold text-xl grid grid-col-1 justify-items-center">
                                    About Me
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="h-full border-red-500 grid justify-items-center place-items-baseline p-10">
                    <img
                        className="h-8"
                        src="https://cdn.discordapp.com/attachments/1039952875394187295/1130244102773035028/celtic_border.png"
                        alt=""
                    />
                </div> */}
            </div>
        </div>
    );
}
