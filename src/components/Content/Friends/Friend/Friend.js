import React from 'react';
import s from'./Friend.module.css'
const Friend = (props)=> {
    
return (<div className={s.item}>{props.friendName}
</div>
);
}

export default Friend