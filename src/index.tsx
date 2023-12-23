import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.less';
import style from './index.less';

function App() {
  console.log('123435654321')
  return (
    <div className={style.App}>
      <p>App页面，一下为组件页</p>
      {/* <Demo></Demo>  */}
      {/* <Srcoll></Srcoll> */}
      {/* <Swipers></Swipers> */}
      {/* <Fixeds></Fixeds> */}
      {/* <Swiper></Swiper> */}
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App/>
);