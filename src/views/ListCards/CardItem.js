import React from 'react'
import { Card, Divider } from 'antd';

const CardItem = ({user, urls, innerRef}) => {

  return (
    <Card
      hoverable
      style={{ width: 260 }}
      cover={<img alt="example" src={urls.small} />}
    >
      <div className="cardItem" ref={innerRef}> 
        <img src={user?.profile_image.small} alt="profile"/>
        <article>
          <h3>A Photo By: {user.name}</h3>
          <p>{user.bio}</p>
        </article>
      </div>
      <Divider/>
    </Card>
  )
}

export default CardItem;