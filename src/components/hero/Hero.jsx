import React from 'react';
import './hero.css';

export const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='slider'>
        <div className='item'>
          <div className='content'>
            <div className='name'>Switzerland</div>
            <div className='des'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              iure impedit quibusdam velit, dicta perspiciatis ullam dolor,
              voluptate sequi fuga sit quisquam commodi consequuntur ex
              explicabo quam natus ad nesciunt.
            </div>
            <button className='see-more'>See More</button>
          </div>
        </div>

        <div className='item'>
          <div className='content'>
            <div className='name'>Kenya</div>
            <div className='des'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              iure impedit quibusdam velit, dicta perspiciatis ullam dolor,
              voluptate sequi fuga sit quisquam commodi consequuntur ex
              explicabo quam natus ad nesciunt.
            </div>
            <button className='see-more'>See More</button>
          </div>
        </div>

        <div className='item'>
          <div className='content'>
            <div className='name'>Switzerland</div>
            <div className='des'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              iure impedit quibusdam velit, dicta perspiciatis ullam dolor,
              voluptate sequi fuga sit quisquam commodi consequuntur ex
              explicabo quam natus ad nesciunt.
            </div>
            <button className='see-more'>See More</button>
          </div>
        </div>

        <div className='item'>
          <div className='content'>
            <div className='name'>Switzerland</div>
            <div className='des'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              iure impedit quibusdam velit, dicta perspiciatis ullam dolor,
              voluptate sequi fuga sit quisquam commodi consequuntur ex
              explicabo quam natus ad nesciunt.
            </div>
            <button className='see-more'>See More</button>
          </div>
        </div>

        <div className='item'>
          <div className='content'>
            <div className='name'>Switzerland</div>
            <div className='des'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              iure impedit quibusdam velit, dicta perspiciatis ullam dolor,
              voluptate sequi fuga sit quisquam commodi consequuntur ex
              explicabo quam natus ad nesciunt.
            </div>
            <button className='see-more'>See More</button>
          </div>
        </div>
      </div>

      <div className="button-nav">
        <button className="prev"></button>
        <button className="next"></button>
      </div>
    </div>
  );
};
