import styled from 'styled-components'

export const LogoWrapper = styled.div`
    width: 150px;

     @media (max-width: 1200px) {
        width: 100px;
        position: relative;

        ${(props) => props.hidden && `
            display: none;
        `}
    }
`