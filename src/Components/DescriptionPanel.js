import './../App.css'

import { Container, Box, Flex } from '@chakra-ui/react'

function DescriptionPanel() {
    return (
        <div className='descriptionpanel'>
            <div class="bg-gray-200 p-4 h-60 w-100 rounded-lg" style={{position: 'relative', right: '115px', top: '20px'}}>
                <h1>This will hold the view of the description of the model</h1>
                <div className="absolute inset-0 border border-gray-300 -m-1 rounded-lg pointer-events-none"></div>
            </div>
        </div>
    )

}

export default DescriptionPanel