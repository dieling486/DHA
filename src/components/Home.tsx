import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleSectionClick = (path: string) => {
    navigate(path)
    // 滚动到顶部
    window.scrollTo(0, 0)
  }

  return (
    <section id="home" className="section home-section">
      {/* 英雄区块 - 企业建筑背景 */}
      <div className="hero-banner">
        <div className="hero-background">
          <img src="/DHA/photos/com_building.jpg" alt="企业建筑" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-main-title">普脂康</h1>
          <div className="hero-divider"></div>
          <p className="hero-description">
            普脂康成立于2026年，采用水相研发生产磷脂型DHA，现如今具有成熟的工艺技术，企业力量雄厚，具有一体化生产规模。立志成为绿色企业的领军者。
          </p>
          <div className="hero-cta" onClick={() => handleSectionClick('/about')}>
            了解更多 →
          </div>
        </div>
      </div>

      <div className="container">
        <div className="home-content">

          {/* 业务方向 */}
          <div className="business-section" onClick={() => handleSectionClick('/business')}>
            <div className="business-text-content">
              <h2 className="business-title">业务方向</h2>
              <div className="business-divider"></div>
              <div className="business-text-list">
                <div className="business-item-text">
                  <span className="business-label">功能性产品原料：</span>
                  <span className="business-value">磷脂型DHA原料</span>
                </div>
                <div className="business-item-text">
                  <span className="business-label">定制营养食品：</span>
                  <span className="business-value">胶囊型/凝胶糖果型</span>
                </div>
              </div>
              <div className="business-cta">了解更多 →</div>
            </div>
            <div className="business-image-content">
              <img src="/DHA/photos/product.jpg" alt="产品展示" />
            </div>
          </div>

          {/* 应用场景 */}
          <div className="application-section" onClick={() => handleSectionClick('/applications')}>
            <div className="application-text-content">
              <h2 className="application-title">应用场景</h2>
              <div className="application-divider"></div>
              <ul className="application-list">
                <li>原料供应</li>
                <li>婴幼儿食品开发</li>
                <li>中老年健康食品</li>
                <li>临床医学药品应用</li>
                <li>宠物食品补充剂</li>
                <li>功能性休闲食品</li>
              </ul>
              <div className="application-cta">了解更多 →</div>
            </div>
            <div className="application-image-content">
              <img src="/DHA/photos/casechild.jpg" alt="应用场景" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
