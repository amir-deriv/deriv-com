import styled from 'styled-components'
import Box from './box'
import device from 'themes/device'

const Flex = styled(Box)`
    display: flex;
    flex-wrap: ${props => (props.wrap ? props.wrap : '')};
    justify-content: ${props => (props.jc ? props.jc : 'center')};
    align-items: ${props => (props.ai ? props.ai : '')};
    flex-direction: ${props => (props.direction ? props.direction : '')};

    @media ${device.tablet} {
        flex-direction: ${props => (props.tablet_direction ? props.tablet_direction : '')};
        align-items: ${props => (props.tablet_ai ? props.tablet_ai : '')};
        justify-content: ${props => (props.tablet_jc ? props.tablet_jc : '')};
    }
`

export default Flex
