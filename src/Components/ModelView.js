import './../App.css'

import { Container, Box } from '@chakra-ui/react'

function ModelView() {
    return (
        <div className='section'>
            <Box bg='tomato' display="flex" justifyContent="space-between" w='750px' h='500px'>
                <h1>This will hold the view of the model</h1>
            </Box>
        </div>
    )

}

export default ModelView