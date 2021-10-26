import React, { useEffect, useContext } from 'react';
import { Row, Col, Layout } from 'antd';
import './styles.scss';

import { AppContext } from '../../context/ProvideAppContext';
import getCards from '../../context/actions/card/getCards';
import searchCard from '../../context/actions/card/searchCard';
import CardItem from './CardItem';
import FormInput from '../../components/FormInput';

const { Header, Content } = Layout;

const ListCards = () => {
  const { cardsState, cardsDispatch } = useContext(AppContext)
  const {
    cards: { data },
  } = cardsState

  useEffect(() => {
    if(data.length === 0) {
      getCards(cardsDispatch)
    }
  }, [data])

  const handleChangeInput = function(e) {
    searchCard(e.target.value)(cardsDispatch)
  }

  return (
    <Layout>
      <Header>
        <FormInput placeholder={'Search'} handleChangeInput={handleChangeInput}/>
      </Header>
      <Content style={{ padding: '20px 140px' }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {
            data.map(card => {
              const { user, urls } = card;
              return (
                <Col className="gutter-row" key={card.id} span={6}>
                  <CardItem urls={urls} user={user}/>
                </Col>
              )
            })
          }
        </Row>
      </Content>
    </Layout>
  )
}

export default ListCards;
