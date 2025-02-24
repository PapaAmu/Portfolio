import  Resumebutton from './Resumebutton';
import Contactbutton from './Contactbutton';
import Headshot from '../Assets/images/head-shot image.png';
import DownloadIcon from '@mui/icons-material/Download';
function Home() {
    return (
      <section id="about">  
     <div className="row home-component pt-20 pb-4  justify-left">
     <div className="md:flex">
     <div className="col-sm-8 pr-10 pl-6">
      <div className=" text-2xl text-black font-semibold text-left leading-relaxed ml-12 mr-12 space-x-3 pt-6">Hello,</div>
       <h5 className="name mt-1 text-4xl leading-relaxed  font-semibold mb-2 tracking-wide text-left pt-2 ml-12 mr-12 ">I am <span className="name-tag">Jenise</span> </h5>
       <div data-aos="zoom-in"> 
      <img className="d-lg-none d-xl-none d-md-none  img-fluid Head-shot md:h-65 md:w-70 mb-4, lg:h-65 md:w-60 mb-4, sm:h-65 w-60 text-center object-center rounded" src={Headshot}  alt="Head-shot image" />
      </div>
       <p className="text-slate-200 text-black text-left pt-8 mb-3 ml-12 mr-12 pb-4 text-md">Frontend developer that love to convert <b>designs</b> to <b>code</b>. I have passion for breathing life into pixels and  making my clients happy one interface at a time.When I am not coding, I am a newsletter contributer of tech,productivity and things , transforming complex technical concepts to clear and concise content through technical writing.</p>
       <p className="text-slate-200 text-black text-left pb-2  ml-12 mr-12 text-md">If you are looking for someone who not only builds engaging and interacive user interfaces but also excels at translating complex tech jargons into clear accessible language, then I am your girl 😉.</p>
       <div className=" sm:mt-4 space-x-4 sm:flex text-left ml-12 mr-12 pr-15 pt-3 pb-9 ">
       <div data-aos="zoom-in">
       <div className='col-sm6 d-flex align-items-center '> 
       <Resumebutton className=" pt-8 sm:mt-4 mb-4 pb-8 pl-2">
        <a href="Hlobisile Lukhele resume (10).pdf" target="_blank" download="HlobisileLukhele Resume"/>
        <DownloadIcon />
        </Resumebutton>
        <Contactbutton />
       </div>
       </div>
       </div>
    </div>
    <div className=" col-sm-4 lg:justify-items-center mt-12 pt-8">
    <div data-aos="zoom-in "> 
      <img className="d-sm-none d-xs-none d-lg-block d-xl-block img-fluid Head-shot-sm md:h-65 md:w-70 mb-4, lg:h-65 md:w-60 mb-4, sm:h-65 w-60 text-center object-center rounded" src={Headshot}  alt="Head-shot image" />
      </div>
    </div>
   
    </div>
    </div>
    </section>
    );
}
 export default Home;