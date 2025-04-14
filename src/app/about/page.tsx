import { AboutPage } from "@/components/screens/about";

export async function generateMetadata() {
    return {
        title: "About Page",
    };
}

const About = async () => {
    return (
        <AboutPage/>
    );
};

export default About;