import { Flex, Center, useColorMode, useColorModeValue } from "@chakra-ui/react"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Nav from "./components/Nav"


function App() {
  return (
    <Flex  flexDir={'column'} alignItems={'center'} position='relative' minH={'100vh'} w={'100%'}>
      <Nav />
      <Center w={{base: '95%', sm: '90%'}}>
        <Content />
      </Center>
      <Footer />
    </Flex>
  )
}

export default App
