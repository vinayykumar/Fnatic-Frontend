import React from 'react';
import Category from './Category/Category';

const Home = () => {
  return (
    <div className='flex flex-col gap-8 w-full h-ful'>
      <Category></Category>
      <div className='w-full h-96 p-4 lg:p-0'>
        <div className='relative bg-black h-96 z-0 rounded rounded-lg max-h-96'>
          <div className='absolute inset-0 overflow-hidden z-10'>
            <video className='w-full h-96 object-cover z-10 rounded-sm object-bottom' autoPlay loop muted>
              <source src="https://player.vimeo.com/progressive_redirect/playback/869168512/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1505220741&signature=9f5ab0ee1ce2ccb7deb30e038daaef584edd7df7e068b3a483c71bcf01c89342" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
