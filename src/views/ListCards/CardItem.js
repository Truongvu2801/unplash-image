import React from 'react'
import { Card, Divider } from 'antd';
import ReadMore from '../../components/ReadMore';

const CardItem = ({user, urls, innerRef}) => {

  return (
    <Card
      hoverable
      cover={<img alt="example" src={urls.small} />}
    >
      <div className="cardItem" ref={innerRef}> 
        <img src={user?.profile_image.small} alt="profile"/>
        <article>
          <h3>A Photo By: {user.name}</h3>
          <ReadMore>
            {user.bio}
          </ReadMore>
        </article>
      </div>
      <Divider/>
    </Card>
  )
}

export default CardItem;