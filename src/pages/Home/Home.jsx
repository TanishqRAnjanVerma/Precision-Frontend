import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ProductDisplay from '../../components/ProducDisplay/ProductDisplay';
import Abt from '../../components/AboutSection/Abt';
import Faq from '../../components/FAQ/Faq';
import ExploreProduct from '../../components/ExploreProducts/ExploreProduct';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreProduct category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <Abt />
      <Faq />
    </div>
  )
}

export default Home
