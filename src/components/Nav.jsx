import React from 'react'
import { Flex, useColorMode, useColorModeValue, Button, Heading, Icon, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon} from '@chakra-ui/icons'
import { SlGameController } from 'react-icons/sl'

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex zIndex={200} position={'fixed'} w={'100%'} justifyContent={'space-around'} shadow='md' backgroundColor={useColorModeValue('white', 'gray.800')}>
        <Icon boxSize={16} alignSelf={'center'} as={SlGameController}/>
        <Heading alignSelf={'center'}>Game<Text as={'span'} textColor={'red'}>stop</Text></Heading>
        <Button justifySelf={'end'} m={'2rem'} onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    </Flex>
  )
}
