import React from 'react';
import Src from './sources';

export default React.createClass({
  render() {
    return (
      <div>
      	<h1>Main Page</h1>
      	<div className='img-container'>
      		<img src={Src.imgSrc.pic1} alt='cat'/>
      		<img src={Src.imgSrc.pic2} alt='cat'/>
      		<img src={Src.imgSrc.iron} alt='cat'/>
      		<img src={Src.imgSrc.cat} alt='cat'/>
      	</div>
      </div>
    );
  }
});