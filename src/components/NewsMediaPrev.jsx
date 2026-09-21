import TheGuardianImg from "../assets/news-media/the-guardian.webp";
import PulseImg from "../assets/news-media/pulse.webp";
import TechCabalImg from "../assets/news-media/techcabal.webp";
import PremiumImg from "../assets/news-media/premium.webp";

const mediaImages = [TheGuardianImg, PulseImg, PremiumImg, TechCabalImg];

function NewsMediaPrev() {
  return (
    <section className="mt-18 mb-15 flex justify-evenly flex-wrap px-6 gap-y-5 align-middle">
      {mediaImages.map((img) => (
        <img src={img} alt="news-media-logo" className="h-8" />
      ))}
    </section>
  );
}

export default NewsMediaPrev;
