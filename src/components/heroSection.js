export default function HeroSection() {
    return (
        <div className="h-screen flex">
            <div className="h-3/4 w-3/4 flex m-auto p-20 gap-10 shadow-xl rounded-md bg-contain bg-hero-picture bg-right bg-no-repeat bg-slate-100">
                <div className="grid auto-rows-min h-full w-1/2 ">
                    <h1 class="text-4xl lg:text-5xl font-bold max-h-fit text-left">
                        Searching for your next{' '}
                        <span class="text-blue-700">Developer?</span>
                    </h1>
                    <p className="text-left">
                        {' '}
                        Hi! I'm Oli... and I like to build things.
                    </p>
                </div>
                <div className="h-full w-1/2"></div>
            </div>
        </div>
    );
}
