// import { ReactComponent as circleArrowDownLogo } from '../svgs/circleArrowDown.svg';

export default function MainSection() {
    return (
        <div id="aboutMe" className="h-screen flex">
            <div className="h-3/4 w-3/4 grid grid-cols-1 md:grid-cols-2 m-auto p-10 xl:p-20 gap-x-10 shadow-xl rounded-md bg-slate-300 items-center">
                <div className="hidden md:grid h-auto lg:h-full items-center justify-center">
                    <img
                        className="rounded-full w-50 lg:w-96 h-50 lg:h-96 object-cover object-center shadow-xl border-solid border-4 border-midnightBlue-200"
                        src="https://cdn.discordapp.com/attachments/1039952875394187295/1130287216191623198/PXL_20230628_111246385.jpg"
                        alt=""
                    />
                </div>
                <div className="grid grid-rows-auto md:grid-rows-3 items-center gap-y-5 lg:gap-y-10">
                    <h1 className="text-2xl md:text-4xl font-bold text-center md:text-right tracking-wide">
                        Hi, I'm{' '}
                        <span className="text-midnightBlue-100">
                            Oliver West
                        </span>{' '}
                        and I am a Full-Stack Developer.
                    </h1>
                    <p className="text-sm lg:text-right row-span-2">
                        I am a dedicated and passionate Junior Full Stack
                        Developer, with over 10 years experience in the
                        publishing industry. I have acquired a comprehensive
                        knowledge of JavaScript, React, NodeJS, SQL, and an
                        extensive array of design-based skills, which I
                        cultivated over my career as a designer and author in
                        publishing. I have worked on over 150 titles, as an
                        author, researcher, designer, and illustrator! I can not
                        wait to bring my expertise and eclectic knowledge to
                        this fantastic industry!
                    </p>
                </div>
            </div>
        </div>
    );
}
