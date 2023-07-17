import HeroSection from '../components/heroSection';
import MainSection from '../components/mainSection';
import ProjectSection from '../components/projectsSection';
import SkillsSection from '../components/skillsSection';

export default function Main() {
    return (
        <section className="font-semibold text-base lg:text-lg bg-endless-picture">
            <HeroSection />
            <MainSection />
            <SkillsSection />
            <ProjectSection />
        </section>
    );
}
