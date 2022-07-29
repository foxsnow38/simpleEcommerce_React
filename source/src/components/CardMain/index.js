import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"

function Card2({item}) {
  return (
 
<div className='card'>
<div className='cardBackground'>
<div className='left'>
<div className='cardImg'>
<div style={{margin:`30px`}}>
    <SimpleImageSlider 
            width={250}
            height={160}
            images={item.photos}
            showBullets={true}
            showNavs={false}
        />
</div>
</div>
</div>

<div className=' right'>
<div className='cardTitle'>{item.title}</div>
<div className='cardDesc'>Nice one</div>
<div className='cardDiscount'>10%</div>
<div className='cardPrice'>{item.price}</div>
</div>
</div>
</div>
  )
}

export default Card2