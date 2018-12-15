export const BRANCH =
  process.env.CURRENT_BRANCH !== undefined ? process.env.CURRENT_BRANCH : 'default';
export const BRANCHES = {
  master: {
    api: 'https://ofd.astralnalog.ru/api',
    socket: 'wss://ofd.astralnalog.ru/api',
    old: 'https://old.ofd.astralnalog.ru',
    new: 'https://ofd.astralnalog.ru',
    ofd: 'ofd.astralnalog.ru',
    title: '',
    label: '',
    devTools: false,
  },
  demo: {
    api: 'https://demo.ofd.astralnalog.ru/api',
    old: 'https://old.demo.ofd.astralnalog.ru',
    new: 'https://demo.ofd.astralnalog.ru',
    ofd: 'demo.ofd.astralnalog.ru',
    title: 'Демонстрационый ЛК',
    label: 'Демо',
    devTools: false,
  },
  hotfix: {
    api: 'https://hotfix.ofd.astralnalog.ru/api',
    old: 'https://old.hotfix.ofd.astralnalog.ru',
    new: 'https://hotfix.ofd.astralnalog.ru',
    title: 'Горящий ЛК',
    label: 'Пожар',
    devTools: false,
  },
  test: {
    api: 'https://test.ofd.astralnalog.ru/api',
    socket: 'wss://test.ofd.astralnalog.ru/api',
    old: 'http://old.test.ofd.astralnalog.ru',
    new: 'http://test.ofd.astralnalog.ru',
    ofd: 'test.ofd.astralnalog.ru',
    title: 'Тестовый ЛК',
    label: 'Тест',
    devTools: true,
  },
  dev: {
    api: 'http://dev.ofd.astralnalog.ru/api',
    socket: 'ws://dev.ofd.astralnalog.ru/api',
    old: 'http://old.dev.ofd.astralnalog.ru',
    new: 'http://dev.ofd.astralnalog.ru',
    ofd: 'dev.ofd.astralnalog.ru',
    title: 'Рабочий ЛК',
    label: 'Раб',
    devTools: true,
  },
  default: {
    api: 'https://test.ofd.astralnalog.ru/api',
    socket: 'wss://test.ofd.astralnalog.ru/api',
    old: 'http://test.ofd.astralnalog.ru',
    ofd: 'test.ofd.astralnalog.ru',
    new: 'http://localhost:3000',
    title: 'Локальный ЛК',
    label: 'Локал',
    devTools: true,
  },
};

export const API_URL = BRANCHES[BRANCH].api;
export const OFD_URL = BRANCHES[BRANCH].new;
export const SOCKET_URL = BRANCHES[BRANCH].socket;
export const OLD_OFD_URL = BRANCHES[BRANCH].old;
export const STAND_TITLE = BRANCHES[BRANCH].title;
export const STAND_LABEL = BRANCHES[BRANCH].label;
export const OFD_ADDR_URL = BRANCHES[BRANCH].ofd;
