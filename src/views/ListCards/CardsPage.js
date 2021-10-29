import React, { useEffect, useContext, useRef, useState, useCallback } from 'react';
import { Row, Col, Layout } from 'antd';

import './styles.scss';

import { AppContext } from '../../context/ProvideAppContext';
import getCards from '../../context/actions/card/getCards';
import searchCard from '../../context/actions/card/searchCard';
import resetState from '../../context/actions/resetState';
import CardItem from './CardItem';
import FormInput from '../../components/FormInput';

const { Header, Content } = Layout;

const ListCards = () => {
  const LIMIT = 12;
  const [page, setPage] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const { cardsState, cardsDispatch } = useContext(AppContext)
  const typingTimeoutRef = useRef(null);
  const observer = useRef();
  const { cards: { data, hasMore, loading } } = cardsState;

  const lastCardElementRef = useCallback(node => {
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        handleLoadMore()
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasMore])


  function handleLoadMore() {
    setPage(page + 1);
  }

  useEffect(() => {
    if(isSearching) return;
    getCards(page, LIMIT)(cardsDispatch)
  }, [page, isSearching])

  const handleChangeInput = function(e) {
    const valueSearch = e.target.value;
    if(valueSearch.length > 0) {
      resetState()(cardsDispatch)
      setPage(0)
      setIsSearching(true)
    } else {
      setIsSearching(false)
      setPage(0)
      return
    }
    
    if(typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      searchCard(page, LIMIT)(valueSearch)(cardsDispatch)
    }, 400);
  }

  return (
    <Layout>
      <Header>
        <FormInput placeholder={'Search'} handleChangeInput={handleChangeInput}/>
      </Header>
      <Content style={{ padding: '20px 140px' }}>
        {loading && <p>Loading...</p>}
        <Row className="list-cards" gutter={[24, 16]}>
          {
            data && data.map((card, index )=> {
              const { user, urls } = card
              if(data.length === index + 1) {
                return (
                  <Col 
                    className="gutter-row"
                    xs={{ span: 23, offset: 1 }}
                    sm={{ span: 10, offset: 1}}
                    lg={{ span: 5, offset: 0}}
                  >
                    <CardItem urls={urls} user={user} innerRef={lastCardElementRef}/>
                  </Col>
                ) 
              } else {
                return (
                  <Col 
                    className="gutter-row"
                    xs={{ span: 23, offset: 1 }}
                    sm={{ span: 10, offset: 1}}
                    lg={{ span: 5, offset: 0}}
                  >
                    <CardItem urls={urls} user={user}/>
                  </Col>
                ) 
              }
            })
          }
        </Row>
      </Content>
    </Layout>
  )
}

export default ListCards;
