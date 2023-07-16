import HeroSection from '../components/heroSection';
import MainSection from '../components/mainSection';

export default function Main() {
    return (
        <section className="font-semibold text-base lg:text-lg bg-endless-picture">
            <HeroSection />
            <MainSection />
        </section>
    );
}
