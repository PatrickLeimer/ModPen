import { Heading, Box } from '@chakra-ui/react';

function Header() {
    return (
        <Box bg='blue' w='100%' p={4} color='white'>
            <Heading as='h1' size='4xl' noOfLines={1}>
                Modpen
            </Heading>
        </Box>
    )

}

export default Header