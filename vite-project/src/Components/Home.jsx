import React from 'react';
import { Button } from "@material-tailwind/react";

function Home() {
    return (
     <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl justify-center text-lg gap-2 mt-3" >
     <div class="md:flex">
     <div class="p-8">
      <div class="uppercase tracking-wide text-2xl text-black font-semibold text-center leading-relaxed">Hi, I am</div>
       <p class="block mt-1 text-4xl leading-tight text-blachover:underline text-indigo-500 font-semibold mb-2 tracking-wide text-center">Jenise Lukhele</p>
       <p class="text-slate-200 text-black text-2xl font-semibold text-center mb-3">Fronted Developer</p>
       <div className="sm:flex text-center ml-5">
       <Button variant="outlined" size="sm" className='mt-6 me-2 items-center'>
        <a href="Hlobisile Lukhele resume (10).pdf" target="_blank" download="HlobisileLukhele Resume" ></a>
           Resume
        </Button>
        <Button variant="filled" size="sm" className='mt-6 me-2'>
           Reach Out
        </Button>
       </div>
    </div>
    <div class="flex mx-auto sm:justify-items-center float-center!">
      <img class="md:h-60 md:w-70 mb-4, lg:h-60 md:w-60 mb-4, sm:h-60 w-60 text-center ml-20"src="public/images/head-shot image.png" alt="Head-shot image" />
    </div>
  </div>
</div>
    );
}
 export default Home;