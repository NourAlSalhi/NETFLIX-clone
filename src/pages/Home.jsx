import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
  const arrayData = [
    { rowID: '1', title: 'UpComing', fetchURL: requests.requestUpcoming },
    { rowID: '2', title: 'Popular', fetchURL: requests.requestPopular },
    { rowID: '3', title: 'Trending', fetchURL: requests.requestTrending },
    { rowID: '4', title: 'Top Rated', fetchURL: requests.requestTopRated },
    { rowID: '5', title: 'Horror', fetchURL: requests.requestHorror }
  ]
  return (
    <>
      <Main />
      {
        arrayData.map((data => (
          <Row rowID={data.rowID} title={data.title} fetchURL={data.fetchURL} />
        )))
      }
    </>
  )
}

export default Home