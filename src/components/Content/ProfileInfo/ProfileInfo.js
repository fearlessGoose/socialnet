import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (  <div>
<img src='https://www.timelinecoverbanner.com/facebook-covers/2013/01/golden-coins.jpg'
className='topImg'></img>

<div className={s.ava}>
  <img src='http://memesmix.net/media/created/ocejw3.jpg'className={s.avaimg}></img>
</div>
</div>)
}

export default ProfileInfo;