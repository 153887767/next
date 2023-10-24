import '../styles/global.css' // 全局样式只可在 /pages/_app.js 中引入

// 顶级组件，包裹所有页面
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
