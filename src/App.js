import Header from './Components/Header';
import ModelView from './Components/ModelView';
import './App.css';
import DescriptionPanel from './Components/DescriptionPanel';

import { ChakraProvider, Flex, Text } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div class="bg-customBackground text-center">
      <Header/>
      <body>
        <Text fontSize='30px'>
          Welcome to the future of creation. Accessible for anybody, anywhere, to do anything.
        </Text>
        <div class="bg-customBackground">
          <Flex justifyContent="space-between">
            <ModelView/>
            <DescriptionPanel/>
          </Flex>
        </div>
      </body>
      <footer>
        <div class="bg-customBackground p-4 h-90 w-50 rounded-lg" style={{position: 'center', top: '20px'}}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGkLBzpBpEXhogLSZSVtwiYhSA58p6lqki8ut263iDQ2ShjQ/viewform?embedded=true" width="640" height="382" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </footer>
    </div>
    </ChakraProvider>
  );
}

export default App;
