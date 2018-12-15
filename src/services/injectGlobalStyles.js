import { injectGlobal } from 'styled-components';

export default () => injectGlobal`

  body {
    margin: 0;
    font-family: Roboto;
    overflow: hidden;
    overflow-y: auto;
  }

  .filter-enter {
    opacity: 0.01;
    transform: scale(0, 0);
    transition: transform 0.3s ease-in;
  }

  .filter-enter.filter-enter-active {
    opacity: 1;
    transform: scale(2, 2);
  }

  .filter-leave {
    opacity: 1;
    transform: scale(0, 0);
    
  }

  .filter-leave.filter-leave-active {
    transform: scale(0, 0);
    transition: transform 0.3s ease-out;
    opacity: 0.01;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes show-from-top {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes hide-to-top {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }

@keyframes show-by-zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);;
  }
}

@keyframes hide-by-zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
`;
