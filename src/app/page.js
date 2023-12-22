import HeroSection from '@/components/hero';
import About from '@/components/about';
import MidSlider from '@/components/midslider';
import OurTeam from '@/components/ourteam';
import SuccessMetrics from '@/components/successmetrics';



export default function Home() {
  return (
    //  Main Section Start Here
    <main>
   
          <HeroSection/>
          <About/>
          <MidSlider/>
          <OurTeam/>
          <SuccessMetrics/>

    </main>
    //  Main Section End Here
  );
}
