import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --swiper-theme-color: #fff!important;
        --swiper-navigation-size: 30px!important;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        min-height: 100vh;
    }

    body {
        overflow-x: hidden;
        position: relative;
        padding-bottom: 170px;
        min-height: 100vh;
        font-family: 'Crimson Text';
    }

    #__next {
        min-height: 100vh;
    }

    img {
        max-width: 100%;
    }

    ul li {
        list-style: none;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    p {
        line-height: 1.6;
    }

    .swiper {
        width: 100%;
        height: 450px;
    }

    .swiper-slide {
        width: 640px;
        background: #000;
    }

    .home-wrapper {
        display: flex;
        justify-content: center;
        gap: 60px;

    @media (max-width: 1840px) {
        flex-direction: column;
    }

    @media (min-width: 1071px) {
        margin-top: 150px;
    }
    }

    .main-wrapper {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .recipe-wrapper {
        display: flex;
        gap: 50px;
        justify-content: center;
        flex-wrap: wrap;
    }

`

export default GlobalStyles