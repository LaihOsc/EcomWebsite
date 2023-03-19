import { Box, Heading, Image, Text, useMediaQuery, useColorModeValue, IconButton, Flex } from '@chakra-ui/react'
import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa'

export default function ProductCard({item}) {
  console.log(item)

  const [isMobile] = useMediaQuery('(max-width: 768px)')

  console.log(isMobile)

  return (
    <Box 
    as='a' 
    href={item.url} 
    rounded={'2xl'} 
    p={'1rem'} 
    m={'auto'} 
    w={{base: '100%', md: '256px'}} 
    h={'fit'} 
    position='unset'
    borderWidth={useColorModeValue('1px', null)}
    borderColor={useColorModeValue('white', 'gray.500')}
    bg={useColorModeValue('white', 'gray.900')}
    _hover={{
      borderWidth: useColorModeValue('1px', null),
      borderColor: useColorModeValue('gray.200', 'gray.500'),
      shadow: 'base'
    }}
    
    
    
    
    >

      <Heading fontSize={'xl'} noOfLines={1}>{item.title}</Heading>
      <Image p={'1rem'} backgroundColor={'transparent'} m={'auto'} w={150} h={150} src={`${item.images}%22`} />
      <Flex justifyContent={'space-between'}>
      <Text>  <Text m={2} fontSize={'2xl'} as='b' >{item.price}$</Text> <Text as='i' >{item.product_type}</Text> </Text>
      <IconButton colorScheme={'red'} icon={<FaShoppingBasket />} />
      </Flex>
      {isMobile ? <Text as='i' fontSize={'xs'}>{item.description}</Text> : null}
      
    </Box>
  )
}
