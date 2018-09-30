export default {
  namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'head',
    systemName: '艾德财经',
    copyright: 'Copyright © 2017-2018艾德财经-ggt158.com,All Rights Reserved   粤ICP备17161467号',
    footerLinks: [
      {link: 'https://pro.ant.design', name: 'Pro首页'},
      {link: 'https://github.com/iczer/vue-antd-admin', icon: 'github'},
      {link: 'https://ant.design', name: 'Ant Design'}
    ],
    multipage: false
  },
  mutations: {
    setDevice (state, isMobile) {
      state.isMobile = isMobile
    },
    setTheme (state, theme) {
      state.theme = theme
    },
    setLayout (state, layout) {
      console.log(state, layout)
      state.layout = layout
    },
    setMultipage (state, multipage) {
      state.multipage = multipage
    }
  }
}
