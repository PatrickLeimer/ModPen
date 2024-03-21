import './../App.css'

import { Container, Box, Flex } from '@chakra-ui/react'

function DescriptionPanel() {
    return (
        <div className='descriptionpanel'>
            <Box bg='tomato' display="flex" justifyContent="space-between" w='600px' h='400px' >
                <h1>This will hold the view of the description of the model</h1>
            </Box>
        </div>
    )

}

export default DescriptionPanel