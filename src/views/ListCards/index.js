import React, { useEffect, useContext } from 'react';
import { Input, Card, Row, Col, Divider } from 'antd';
import './styles.scss';

import { AppContext } from '../../context/ProvideAppContext';
import getCards from '../../context/actions/card/getCards';

const ListCards = () => {
  const { cardsState, cardsDispatch } = useContext(AppContext)
  const {
    cards: { data },
  } = cardsState

  useEffect(() => {
    if(data.length === 0) {
      getCards(cardsDispatch)
    }
  }, [])

  return (
    <>
      <Input placeholder="Search" />
      <Row gutter={[16, 24]}>
        
          {
            data.map(card => {
              const { user, urls } = card;
              console.log('urls: ', card);
              return (
                <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={urls.small} />}
                    key={card.id}
                    >
                    <div className="cardItem"> 
                      <img src={user.profile_image.small} alt=""/>
                      <article>
                        <h3>A Photo By: {user.name}</h3>
                        <p>{user.bio}</p>
                      </article>
                    </div>
                  </Card>
                </Col>
              )
            })
          }
      </Row>
    </>
  )
}

export default ListCards;
