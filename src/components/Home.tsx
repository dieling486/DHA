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
      <div className="container">
        <h1 className="home-title">普脂康</h1>
        <p className="home-subtitle">磷脂型DHA产品研发与生产</p>
        
        <div className="home-content">
          {/* 企业介绍 */}
          <div 
            className="home-section-item enterprise-item" 
            onClick={() => handleSectionClick('/about')}
          >
            <div className="section-item-content">
              <div className="section-item-header">
                <div className="section-icon">🏢</div>
                <h3>企业</h3>
              </div>
              <p>
                普脂康成立于2026年，采用水相研发生产磷脂型DHA，现如今具有成熟的工艺技术，企业力量雄厚，具有一体化生产规模。立志成为绿色企业的领军者。
              </p>
              <div className="section-link">了解更多 →</div>
            </div>
            <div className="section-item-image">
              {/* 图片占位，后续可插入图片 */}
            </div>
          </div>

          {/* 业务方向 */}
          <div 
            className="home-section-item business-item"
            onClick={() => handleSectionClick('/business')}
          >
            <div className="section-item-content">
              <div className="section-item-header">
                <div className="section-icon">💼</div>
                <h3>业务方向</h3>
              </div>
              <div className="business-list">
                <p><strong>功能性产品原料：</strong>磷脂型DHA原料</p>
                <p><strong>定制营养食品：</strong>胶囊型/凝胶糖果型</p>
              </div>
              <div className="section-link">了解更多 →</div>
            </div>
            <div className="section-item-image">
              {/* 图片占位，后续可插入图片 */}
            </div>
          </div>

          {/* 应用场景 */}
          <div 
            className="home-section-item application-item"
            onClick={() => handleSectionClick('/applications')}
          >
            <div className="section-item-content">
              <div className="section-item-header">
                <div className="section-icon">🎯</div>
                <h3>应用场景</h3>
              </div>
              <ul className="application-list">
                <li>原料供应</li>
                <li>婴幼儿食品开发</li>
                <li>中老年健康食品</li>
                <li>临床医学药品应用</li>
                <li>宠物食品补充剂</li>
                <li>功能性休闲食品</li>
              </ul>
              <div className="section-link">了解更多 →</div>
            </div>
            <div className="section-item-image">
              {/* 图片占位，后续可插入图片 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
