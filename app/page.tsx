import Navbar from "@organisms/Navbar";
import Footer from "@organisms/Footer";
import LandingTemplate from "@templates/LandingTemplate";
import { sections } from "@sections/registry";
import MusicToggle from "@molecules/MusicToggle";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const guestId = typeof searchParams?.guestId === "string" ? searchParams.guestId : undefined;
  return (
    <>
      <Navbar />
      <div className="bg-[radial-gradient(120%_80%_at_50%_0%,_rgba(243,209,216,0.25),_rgba(255,255,255,0))]">
        <LandingTemplate sections={sections(guestId)} />
      </div>
      <Footer />
      <MusicToggle />
    </>
  );
}
