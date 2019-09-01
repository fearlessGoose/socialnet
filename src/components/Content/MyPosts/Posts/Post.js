import React from 'react';
import s from'./Post.module.css'

const Post = (props)=> {
    
return (<div>
<div className={s.postAva}>
    <img  src='https://os1.i.ua/3/1/12714020_622be34b.jpg'></img>
{ props.message }
</div>

<div className={s.item}>Иван Михалыч</div>
{ props.likeCount }
</div>
);
}

export default Post