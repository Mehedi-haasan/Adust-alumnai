
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TopEvent from '../Event/TopEvent'
import Banner from '../Home/Home/Other/Banner'
import MyContests from '../Home/Home/Other/MyContests'
import Events from '../Event/Events'
import Stats from '../Home/Home/Other/Stars'
import Winners from '../Home/Home/Other/Winners'


export default function Slider() {
  return (
<>
    <div className="m-auto">  
   <Banner/>
    </div>
    <MyContests/>
    <TopEvent/>
    <Events/>
    <Winners/>
    <Stats/>
    </>
  );
}
