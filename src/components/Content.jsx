import React, { useState } from 'react'
import {SimpleGrid, Flex, Button} from '@chakra-ui/react'
import ProductCard from './ProductCard'
import data from '../data/gamestop.json'
import InfiniteScroll from 'react-infinite-scroll-component'
export default function Content() {

  const [visibleItems, setVisibleItems] = useState(16)

  const handleButtonClick = () => {
    setVisibleItems(visibleItems + 16)
  }

  const yeeList = data.slice(0, visibleItems)

  return (
    <Flex flexDir={'column'} mt={'104px'}>
    

    <InfiniteScroll
  dataLength={yeeList.length} //This is important field to render the next data
  next={handleButtonClick}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
<SimpleGrid position={'relative'} w={{base: '100%', md: 'auto'}} justifyItems={'center'} columns={{base: 1, sm: 1, md: 2, lg: 3, xl: 4}} spacing={10} my={5}>
{yeeList.map((item) => <ProductCard item={item}  >{item}</ProductCard>)}
</SimpleGrid>
</InfiniteScroll>
        
    
    </Flex>
  )
}
