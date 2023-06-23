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
        height: 100%;
    }

    body {
        overflow-x: hidden;
        padding-bottom: 100px;
        min-height: 100%;
        position: relative;
        font-family: 'Crimson Text';
    }

    footer {
        position: absolute;
        bottom: 0;
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
        height: 100%;
    }

    .swiper-slide {
        width: 640px;
        background: #000;
    }

`

export default GlobalStyles