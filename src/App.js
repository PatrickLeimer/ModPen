import Header from './Components/Header';
import ModelView from './Components/ModelView';
import './App.css';
import DescriptionPanel from './Components/DescriptionPanel';

import { ChakraProvider, Flex, Text } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Header/>
      <body>
        <Text fontSize='30px'>
          Welcome to the future of creation. Accessible for anybody, anywhere, to do anything.
        </Text>
        <Flex justifyContent="space-between">
          <ModelView/>
          <DescriptionPanel/>
        </Flex>
      </body>
      <footer>
        <p>
          Interested? Fill out the interest form below.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Interest Form
        </a>
      </footer>
    </div>
    </ChakraProvider>
  );
}

export default App;
