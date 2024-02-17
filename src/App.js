import React from 'react';
import Header from './components/Header/Header';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import SwipableCard from './components/SwipableCard/SwipableCard';
import TwoCards from './components/TwoCards/TwoCards';
import ChartComponent from './components/ChartComponent/ChartComponent';

const App = () => {
  return (
    <div className='roboto-regular'>
      <Header />
      <div className='main'>
        <SwipableCard />
        <ChartComponent />
        <TwoCards />
      </div>
      <BottomNavigation />
    </div>
  )
}

export default App
