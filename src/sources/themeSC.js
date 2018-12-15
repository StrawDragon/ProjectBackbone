export const animationTime = '450ms';

export default {
  colors: {
    // https://material.io/color/#!/?view.left=0&view.right=1&primary.color=008cef&secondary.color=0065b4
    // цвета надо использовать с альфа каналом, что бы через replace() можно было делать просрачность

    // по простому: p - primary - для статических элементов
    p: 'hsla(205, 100%, 47%, 1)',
    pText: 'hsla(0, 0%, 0%, 1)',
    pLight: 'hsla(206, 100%, 70%, 1)',
    pLightText: 'hsla(0, 0%, 0%, 1)',
    pDark: 'hsla(209, 100%, 37%, 1)',
    pDarkText: 'hsla(0, 0%, 100%, 1)',
    pTooltip: '#616161',

    // по простому: s - secondary - для динамических
    s: 'hsla(207, 100%, 35%, 1)',
    sText: 'hsla(0, 0%, 100%, 1)',
    sLight: 'hsla(212, 76%, 62%, 1)',
    sLightText: 'hsla(0, 0%, 0%, 1)',
    sDark: 'hsla(213, 100%, 26%, 1)',
    sDarkText: 'hsla(0, 0%, 100%, 1)',

    disabled: 'hsla(0, 0%, 85%, 1)',
    disabledText: 'hsla(0, 0%, 100%, 1)',
    icon: '#2196f3',
    error: 'hsla(0, 80%, 50%, 1)',
    danger: '#D84352',
    hoverDanger: '#C43E4E',
    bg: 'hsla(0, 0%, 100%, 1)',
    border: '#959595',
    href: '#108ee9',
    hiddenBorder: 'rgba(0, 0, 0, 0.12)',
    hrColor: '#ececec',
    hrText: '#777777;',
  },
  sizes: {
    header: {
      h: '72px',
      w: '100%',
      suggestionHeader: '24px',
    },
    container: {
      w: '1200px',
    },
    common: {
      maxPad: '7rem',
      pad: '4rem',
      minPad: '1.5rem',
      midMedia: '1620px',
      minMedia: '1400px',
    },
  },
  times: {
    animation: animationTime,
  },
  button: `
    margin: 1rem;
    min-width: 8rem;
    min-height: 2.5rem;
  `,
  fontSizes: {
    titleText: '20px',
    subTitleText: '18px',
    mainText: '16px',
    smallText: '14px',
    tinyText: '12px',
  },
  transitionFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transition: `transition all ${animationTime} cubic-bezier(0.4, 0, 0.2, 1)`,
  getTransition: (target = 'all', duration = animationTime) =>
    `transition ${target} ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
  shadow: 'box-shadow: 0 0 1vh rgba(0, 0, 0, 0.2);',
  // анимации описаны в services/injectGlobalStyles.js
  animations: {
    fadeIn: (duration = animationTime, delay = '0s') => {
      return `fade-in ${duration} cubic-bezier(0.4, 0, 0.2, 1) ${delay}`;
    },
    fadeOut: (duration = animationTime, delay = '0s') => {
      return `fade-out ${duration} cubic-bezier(0.4, 0, 0.2, 1) ${delay}`;
    },
    showFromTop: (duration = animationTime, delay = '0s') => {
      return `show-from-top ${duration} cubic-bezier(0.4, 0, 0.2, 1) ${delay}`;
    },
    hideToTop: (duration = animationTime, delay = '0s') => {
      return `hide-to-top ${duration} cubic-bezier(0.4, 0, 0.2, 1) ${delay}`;
    },
    showByZoom: (duration = animationTime, delay = '0s') => {
      return `show-by-zoom ${duration} cubic-bezier(0.4, 0, 0.2, 1) ${delay}`;
    },
    hideByZoom: (duration = animationTime, delay = '0s') => {
      return `hide-by-zoom ${duration} cubic-bezier(0.4, 0, 0.2, 1) ${delay}`;
    },
  },
};
