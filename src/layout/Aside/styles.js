import styled from 'styled-components'

export const AsideWrapper = styled.aside`
    max-width: 23%;

    @media (max-width: 1840px) {
        max-width: 100%;
    }
`

export const Block = styled.div`
    margin-bottom: 25px;
`

export const Title = styled.div`
    width: 100%;
    height: ${(props) => props.tall ? '200px' : '50px'};
    display: flex;
    flex-direction: ${(props) => props.tall ? 'column' : 'row'};
    justify-content: ${(props) => props.tall ? 'center' : 'flex-start'};
    gap: 20px;
    align-items: center;
    background-color: #FEF7EA;
    border: 1px solid #FDC257;
    box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    padding: 0 15px;
`

export const ImageWrapper = styled.div`
    margin: ${(props) => props.small ? '20px 0' : '20px auto'};
    width: ${(props) => props.small ? '100px' : '150px'};
    height: ${(props) => props.small ? '100px' : '98px'};
    border: 2px solid #FDC257;
    border-radius: ${(props) => props.small && '50%'};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`

export const PostWrapper = styled.div`
    display: ${(props) => props.profileWrapper ? "block" : "flex"};
    margin-top: ${(props) => props.profileWrapper && "30px"};
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-right: ${(props) => props.profileWrapper ? "0px" : "40px"};

    @media (max-width: 1840px) {
        display: ${(props) => props.profileWrapper && "flex"};
        flex-direction: column;
        padding-right: 0px;
    }
`

export const StyledButton = styled.button`
    height: 40px;
    padding: 0px 20px;
    border: none;
    text-transform: uppercase;
    background-color: #FDC257;
    box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
    transition: .3s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: none;
    }
`