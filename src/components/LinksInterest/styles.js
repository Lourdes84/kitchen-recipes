import styled, { keyframes } from "styled-components"

const scroll = keyframes`
    0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
`

export const SliderWrapper = styled.div`
    padding: 20px 0;
    background: white;
	height: 100px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 100%;
	
	&::before,
	&::after {
		background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}

	@media (max-width: 640px){
		&::before,
		&::after {
			width: 20px;
		}
	}
`

export const SlideTrack = styled.div`
    animation: ${scroll} 40s linear infinite;
	display: flex;
	width: calc(250px * 7);
`

export const Slide = styled.div`
    height: 100px;
	width: 250px;
    padding-right: 40px;

	img {
		height: 60px;
	}
`