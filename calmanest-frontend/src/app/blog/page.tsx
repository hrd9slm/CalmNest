import Carousel from '@/components/Banner';
import RecentPosts from '@/components/RecentPosts';
import PopularPosts from '@/components/PopularPosts';
import DecorativeComponent from '@/components/Shapes/DecorativeComponent';
import Therapists from '@/components/Therapists';
import SearchBar from '@/components/SearchBar';
import Advertisement from '@/components/Advertisement';
import Categories from '@/components/Categories';
import CurvedSectionTwo from '@/components/Shapes/CurvedSectionThree';
import CurvedSectionThree from '@/components/Shapes/CurvedSectionThree';
import CurvedSectionFour from '@/components/Shapes/CurvedSectionFour';

import Banner from '@/components/Banner';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
       <Banner/>
      </section>
      <section className="flex px-5">
        <div className="flex flex-col space-y-4 w-2/3 ml">
          <RecentPosts />
          <PopularPosts />
        </div>
        <div className="flex flex-col space-y-4 w-1/3  mr-6">
          <SearchBar />
          <Advertisement />
      
        </div>
      </section>
      <section>
        <CurvedSectionThree/>
      </section>
      <section>
      <div className="flex flex-col space-y-4  ml">
        <Categories />
        </div>
      </section>
       
      <section>
        <Therapists />
      </section>
      <section>
        <CurvedSectionFour />
      </section>
      
    </div>
  );
};

export default Home;