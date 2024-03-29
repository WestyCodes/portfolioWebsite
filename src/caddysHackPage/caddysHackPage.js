import { ReactComponent as JSLogo } from '../svgs/js.svg';
import { ReactComponent as ReactLogo } from '../svgs/react.svg';
import { ReactComponent as NodeJSLogo } from '../svgs/nodeJS.svg';
import { ReactComponent as HTML5Logo } from '../svgs/html5.svg';
import { ReactComponent as TailwindLogo } from '../svgs/tailwind.svg';
import { ReactComponent as PostgresLogo } from '../svgs/postgreSQL.svg';

export default function CaddysHackPage() {
    return (
        <section className="font-semibold text-base lg:text-lg bg-endless-picture">
            <div className="h-max lg:h-screen flex">
                <div className="mt-10 h-3/4 w-3/4 grid grid-cols-1 lg:grid-cols-2 m-auto p-5 gap-x-10 shadow-xl rounded-md bg-slate-300 items-center">
                    <div className="lg:hidden grid grid-rows-3 gap-y-5">
                        <h1 className="text-4xl font-bold text-left tracking-wide">
                            Caddy's Hack, a manual{' '}
                            <span className="text-midnightBlue-100">
                                Golf Shot Tracker
                            </span>{' '}
                            for use on the go!
                        </h1>
                        <div className="ml-2 text-left row-span-2">
                            <p className="mb-5">
                                A full stack solo project created within 8 days.
                                The app is a website and manual golf shot
                                tracker with data visualisation. Allowing
                                golfers of all skill levels to track their
                                progress, and to aid them in refining their
                                practise.
                            </p>
                            <ul className="list-disc">
                                <li>
                                    JSON Web token and Bcrypt Hashing for
                                    security and User Authentication
                                </li>
                                <li>
                                    Bespoke Restful API and ElephantSQL
                                    Database, utilising Express.js and Prisma
                                </li>
                                <li>
                                    Responsive design for desktop and mobile use
                                </li>
                                <li>
                                    React Front-End, using Conditional
                                    Rendering, React Hooks, and Render Props
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid h-full items-center justify-center">
                        <img
                            className="rounded-xl object-cover object-center"
                            src="./assets/caddiesHackTitle.png"
                            alt=""
                        />
                        <div className="overflow-auto row-span-1 grid grid-cols-5 my-auto">
                            <JSLogo className="h-24 w-24" />
                            <ReactLogo className="h-24 w-24" />
                            <HTML5Logo className="h-24 w-24" />
                            <TailwindLogo className="h-24 w-24" />
                            <PostgresLogo className="h-24 w-24" />
                        </div>
                    </div>
                    <div className="hidden lg:grid grid-rows-3 gap-y-5">
                        <h1 className="text-4xl font-bold text-left tracking-wide">
                            Caddy's Hack, a manual{' '}
                            <span className="text-midnightBlue-100">
                                Golf Shot Tracker
                            </span>{' '}
                            for use on the go!
                        </h1>
                        <div className="text-left row-span-2">
                            <p className="mb-5">
                                A full stack solo project created within 8 days.
                                The app is a website and manual golf shot
                                tracker with data visualisation. Allowing
                                golfers of all skill levels to track their
                                progress, and to aid them in refining their
                                practise.
                            </p>
                            <ul className="list-disc">
                                <li>
                                    JSON Web token and Bcrypt Hashing for
                                    security and User Authentication
                                </li>
                                <li>
                                    Bespoke Restful API and ElephantSQL
                                    Database, utilising Express.js and Prisma
                                </li>
                                <li>
                                    Responsive design for desktop and mobile use
                                </li>
                                <li>
                                    React Front-End, using Conditional
                                    Rendering, React Hooks, and Render Props
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-min flex">
                <div className="h-min lg:h-3/4 w-3/4 grid grid-cols-1 lg:grid-cols-2 my-5 m-auto p-10 gap-x-10 shadow-xl rounded-md bg-slate-300 items-center">
                    <div className="grid grid-rows-auto gap-y-10">
                        <p className="text-4xl font-bold text-left tracking-wide">
                            A quick{' '}
                            <span className="text-midnightBlue-100">
                                Get Started
                            </span>{' '}
                            guide to help you!
                        </p>
                        <div className="text-left row-span-2">
                            <p className="mb-5">
                                This app is used to track your shots when at the
                                range or on the course in as few clicks as
                                possible. While in Caddy Track, you can select
                                whether your shot was Left, Right, or ON target
                                on the first selection, then whether it was
                                Short, Long, or Pin High! After confirming your
                                shot it will be saved to your account and
                                tracked. Build up a large database of shot data
                                in order to see areas in your golf game where
                                you may need to improve...
                            </p>
                            <p className="mb-5">
                                You can either sign up on the website, or use
                                this test account just to have a browse:
                            </p>
                            <p>
                                Email:{' '}
                                <span className="text-midnightBlue-100">
                                    test@test.com
                                </span>{' '}
                                Password:{' '}
                                <span className="text-midnightBlue-100">
                                    Testpassword1!
                                </span>{' '}
                            </p>
                        </div>

                        <a
                            href="https://caddys-hack.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-auto w-40 relative rounded-full px-5 py-2.5 overflow-hidden group bg-midnightBlue-200 relative hover:bg-gradient-to-r hover:from-midnightBlue-200 hover:to-midnightBlue-100 text-white hover:ring-2 hover:ring-offset-2 hover:ring-midnightBlue-100 transition-all ease-out duration-300"
                        >
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative font-semibold text-xl grid grid-col-1 justify-items-center">
                                Visit site
                            </span>
                        </a>
                    </div>

                    <div className="hidden lg:grid grid-rows-2 h-full items-center justify-center">
                        <img
                            className="rounded-l object-contain object-center"
                            src="./assets/statsPageCaddy1.png"
                            alt="data visualisation of shots 1"
                        />
                        <img
                            className="rounded-l object-contain object-center"
                            src="./assets/statsPageCaddy2.png"
                            alt="data visualisation of shots 2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
