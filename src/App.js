import React, { Component } from 'react';
import { Helmet } from "react-helmet";
const confetti = require('canvas-confetti');

class App extends Component {
  scatter = () => {
    //文档 https://github.com/catdad/canvas-confetti/

    var canvas = document.getElementById('my-canvas');
    canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

    canvas.confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 1 }
    });
  }
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>郭雪辉-前端-个人站</title>
          <meta name="keywords" content="郭雪辉-前端-个人站" />
          <meta name="description" content="郭雪辉-前端-个人站" />
        </Helmet>
        <div className="header-bg">
          <div className="container">
            <div className="head-logo">
              <a href="#home">
                <img src={require("./images/logo.png")} alt="logo" />
              </a>
            </div>
            <div className="top-nav">
              <span className="menu"><img src={require("./images/menu.png")} alt="menu" /></span>
              <ul className="nav1">
                <li><a className="scroll" href="#home">首页</a></li>
                <li><a className="scroll" href="#about">关于我</a></li>
                <li><a className="scroll" href="#products">技能掌握</a></li>
                <li><a className="scroll" href="#pricing">作品展示</a></li>
                <li><a className="scroll" href="#contact">联系我</a></li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div id="home" className="banner">
          <div className="container">
            <div className="banner-info">
              <h1 className='welcome-text'>欢迎来到我的个人站</h1>
              <p>我是郭雪辉</p>
              <a href="#home" className="fe-text">一名前端工程师</a>
            </div>
          </div>
        </div>


        <div id="about" className="what-we-do">
          <div className="container">

            <h3>关于<span>我</span></h3>
            <p className="second-tit">让别人了解你，也让自己更加了解自己</p>
            <label> </label>
            <div className="jianjie">
              <ul>
                <li>
                  <h4 className="xiaoping">个人信息：</h4>
                </li>
                <li>
                  <h4>姓名：郭雪辉</h4>
                </li>
                <li>
                  <h4 id="age">年龄：{new Date().getFullYear() - 1994}</h4>
                </li>
                <li>
                  <h4>职业：前端工程师</h4>
                </li>
                <li>
                  <h4>爱好：游泳，打篮球，学习前端新框架，工具，知识，看前端的论坛</h4>
                </li>
                <li>
                  <h4>荣誉：2016全国大学生计算机设计大赛山西赛区决赛二等奖</h4>
                </li>
              </ul>
            </div>
            <div className="what-we-do-articles">
              <h4 className="personaljj">个人优势：<br /><br />
                1. 熟练使用html5，css3，JS，ES和JS框架；<br />
                2. 独立搭建并开发过多个使用vue/react框架结合axios异步框架实现的项目；<br />
                3. 有一年半的angularJS开发经验，{new Date().getFullYear() - 2017}年的vue开发经验，{new Date().getFullYear() - 2020}年的react开发经验，{new Date().getFullYear() - 2019}年的小程序开发经验；<br />
                4. 有多个使用主流后台框架elementUI，antd搭建后台项目的经验；<br />
                5. 熟悉移动端开发中屏幕的适配性、兼容性；<br />
                6. 个人站用react框架开发，并实现了seo优化，对react、vue很感兴趣；<br />
                7. 沟通协调能力好，有带领团队经验，对代码严格要求；<br />
                8. 与原生App交互的经验丰富；<br />
                9. 熟练使用git进行分支管理和代码拉取提交等项目管理操作；<br />
                10. 对项目开发流程有清晰的思路，可以高效的和后台伙伴对接接口联调，有较强的沟通协调能力，代码整洁，可读性及复用性强；<br />
                11. 长期维护个人站和博客，积累了大量项目实践经验和针对特殊情况的处理方式，并且扩展学习记录了框架搭建、项目发布、服务端配置等技术。
              </h4>
            </div>
          </div>
        </div>


        <div id="products" className="want-to-know">
          <div className="container">
            <h3>专业<span>技能</span></h3>
            <p className="second-tit">年轻人最重要的，是能把自己的技能，推到自己能够达到的巅峰</p>
            <label> </label>
          </div>
        </div>

        <div className="professional">
          <div className="container skill-container">
            <div className="professional-left">
              <img src={require("./images/desk.JPG")} alt="professional" />
            </div>
            <div className="professional-right">
              <h4>技能展示</h4>
              <div className="bar">
                <p>html5 / css3 / SASS</p>
              </div>
              <div className="skills">
                <div className="skill1"></div>
                <div className="space-block" style={{ width: '20%' }}></div>
              </div>
              <div className="bar">
                <p>JS/ES</p>
              </div>
              <div className="skills">
                <div className="skill1"></div>
                <div className="space-block" style={{ width: '20%' }}></div>
              </div>
              <div className="bar">
                <p>小程序、小程序框架（taro）</p>
              </div>
              <div className="skills">
                <div className="skill1"></div>
                <div className="space-block" style={{ width: '10%' }}></div>
              </div>
              <div className="bar">
                <p>vue、elementUI</p>
              </div>
              <div className="skills">
                <div className="skill1"></div>
                <div className="space-block" style={{ width: '30%' }}></div>
              </div>
              <div className="bar">
                <p>react、antd</p>
              </div>
              <div className="skills">
                <div className="skill1"></div>
                <div className="space-block" style={{ width: '30%' }}></div>
              </div>
              <div className="bar">
                <p>angularJs</p>
              </div>
              <div className="skills">
                <div className="skill1"></div>
                <div className="space-block" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        {/* 作品展示  */}

        <div className="our-work" id="pricing">
          <div className="container">
            <h3>作品<span>展示</span></h3>
            <p className="second-tit">这是对自己的激励与肯定</p>
            <label> </label>
          </div>
        </div>
        <ul id="filters" className="clearfix">
          <li><span className="filter active" data-filter="app card icon logo web">全部</span></li>
          <li><span className="filter" data-filter="app">游戏</span></li>
          <li><span className="filter" data-filter="card">增删改查</span></li>
          <li><span className="filter" data-filter="icon">网站页面</span></li>
          <li><span className="filter" data-filter="web">个人博客</span></li>
        </ul>
        <div id="portfoliolist">
          {/* <!--音乐播放器--> */}
          <div className="portfolio app mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="app web"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/music-item" target="_blank"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/yinyue.png")} className="img-responsive" alt="music" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">音乐播放器</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--canvas钟表--> */}
          <div className="portfolio app mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="app web"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/clock" target="_blank"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/clock.png")} className="img-responsive" alt="clock" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">canvas钟表</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--个人博客--> */}
          <div className="portfolio web mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="web"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/blog" target="_blank"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/blog.png")} className="img-responsive" alt="blog" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">个人博客</h5>
                  <p className="b-animate b-from-left     b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--惠租车H5首页--> */}
          <div className="portfolio icon mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="icon"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="https://m.huizuche.com" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/huizuche.png")} className="img-responsive" alt="hzc" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">惠租车H5首页</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--打字游戏--> */}
          <div className="portfolio app mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="app web"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/type-game" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/dazi.png")} className="img-responsive" alt="dazi" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">打字游戏</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--五子棋游戏--> */}
          <div className="portfolio app mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="app"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/wuziqi" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/wuziqi1.png")} className="img-responsive" alt="wuziqi" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">五子棋游戏</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--todos备忘录--> */}
          <div className="portfolio card mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="card"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/todos" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/todos.png")} className="img-responsive" alt="todos" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">todos备忘录</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--iCloud提醒事项--> */}
          <div className="portfolio card mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="card"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/icloud" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/icloud.png")} className="img-responsive" alt="icloud" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">iCloud提醒事项</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>

                </div>
              </a>
            </div>
          </div>
          {/* <!--驾照全球通--> */}
          <div className="portfolio icon mix_all  wow bounceIn" data-wow-delay="0.4s" data-cat="web"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="https://m.huizuche.com/Help/licenceWorld" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/IDL.png")} className="img-responsive" alt="idl" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">驾照全球通</h5>
                  <p className="b-animate b-from-left b-delay03" id="para">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--百度未来商店首页--> */}
          <div className="portfolio icon mix_all wow bounceIn" data-wow-delay="0.4s" data-cat="web"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/future-shop" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/baidu.jpg")} className="img-responsive" alt="bd" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">百度未来商店首页</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--网易邮箱--> */}
          <div className="portfolio icon mix_all wow bounceIn" data-wow-delay="0.4s" data-cat="icon"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="/wangyi" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/wangyi.png")} className="img-responsive" alt="wy" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left    b-delay03 ">网易邮箱6.0</h5>
                  <p className="b-animate b-from-left    b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          {/* <!--惠租车助力活动--> */}
          <div className="portfolio icon mix_all wow bounceIn" data-wow-delay="0.4s" data-cat="web"
            style={{ display: 'inline-block', opacity: '1' }}>
            <div className="portfolio-wrapper">
              <a href="https://a.huizuche.com/CouponFission/Master" target="_blank" rel="noopener noreferrer"
                className="b-link-stripe b-animate-go  thickbox play-icon popup-with-zoom-anim">
                <img src={require("./images/fission.png")} className="img-responsive" alt="fission" />
                <div className="b-wrapper">
                  <h5 className="b-animate b-from-left b-delay03 ">助力活动</h5>
                  <p className="b-animate b-from-left b-delay03 ">点击进入</p>
                </div>
              </a>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>

        <div id="contact" className="contact-us">
          <div className="container">
            <h3>联系<span>我</span></h3>
            <p className="second-tit">相信我会给您一个惊喜</p>
            <label> </label>
          </div>
        </div>
        <div className="map-bottom">
          <div className="container">
            <div className="dot-msg-phone">
              <div className="dot">
                <label> </label>
                <h5>guo18435133760</h5>
              </div>
              <div className="msg">
                <label> </label>
                <h5>991158744@qq.com</h5>
              </div>
              <div className="phone">
                <label> </label>
                <h5>18435133760</h5>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <div className="footer-left">
              <p>欢迎您联系我</p>
            </div>
            <div className="footer-right">
              <ul>
                <li><a href={require("./images/myqq.png")} target="_blank" rel="noopener noreferrer" title="qq" className="qq"></a></li>
                <li><a href={require("./images/mywechat.png")} target="_blank" rel="noopener noreferrer" title="wechat" className="wechat"></a></li>
                <li><a href="https://weibo.com/WEBguoxh" target="_blank" rel="noopener noreferrer" title="sina" className="sina"></a></li>
                <li><div title="qqweibo" className="qqweibo"></div></li>
                <li className='scatterbtn' onClick={this.scatter}>结束撒花</li>
                {/* <li id="weChat" style={{display: 'none'}}><a href="javascript:;" rel="noopener noreferrer" className="share"></a></li> */}
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

        <div id="toTop"></div>

        <canvas id='my-canvas' style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 100, width: "100vw", heigth: "100vh" }}></canvas>

      </div>
    );
  }
}

export default App;
