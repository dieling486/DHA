import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageScale, setImageScale] = useState(1)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setImageScale(1) // 重置缩放
  }

  const closeModal = () => {
    setSelectedImage(null)
    setImageScale(1) // 重置缩放
  }

  // 滚轮缩放功能
  useEffect(() => {
    if (!selectedImage) return

    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent
      wheelEvent.preventDefault()
      const delta = wheelEvent.deltaY > 0 ? -0.1 : 0.1
      setImageScale((prev) => {
        const newScale = Math.max(0.5, Math.min(3, prev + delta))
        return newScale
      })
    }

    const modal = document.querySelector('.image-modal')
    if (modal) {
      modal.addEventListener('wheel', handleWheel, { passive: false })
      return () => {
        modal.removeEventListener('wheel', handleWheel)
      }
    }
  }, [selectedImage])

  return (
    <section id="about" className="section">
      <div className="container">
        <h2>关于公司</h2>
        <div className="content-wrapper">
          <div className="content-block">
            <h3>公司简介</h3>
            <p>
              厦门普脂康生物科技有限公司创立于2026年，公司以生物工程为核心技术，致力于磷脂型DHA物质研发，构建了原材料生产，药品开发，功能食品立体化产业模式。普脂康以磷脂型DHA为核心产品，已经具有成熟的生产体系。打造了一系列引用产品，如软胶囊，凝胶糖果等放眼于中老年及婴幼儿健康发展。实现了从菌种培养-产品开发-产品加工-产品销售的高效产业链。如今普脂康项目开发已经成熟，选址坐落于厦门市思明区，企业内部拥有成熟的研发团队，具有多项专利，以严格的产品质量要求自身，致力成为全球磷脂型DHA领军企业。
            </p>
            <h3>企业愿景</h3>
            <p>企业目标：促进全人类健康发展，打造绿色安全健康产品
              <br />
              企业价值观：为人类谋健康，为社会谋幸福，为国家谋发展，为世界谋绿安
              <br />
              经营理念：交流学习，诚信经营，品质突出，以人为本。
            </p>
            <h3>市场布局</h3>
            <p>
            普脂康面向原材料市场和深加工产品市场，其中深加工市场主要面向母婴市场，正努力与母婴企业开展深度合作，产品以绿色为主要卖点，更适合宝宝体质。
            </p>
          </div>
          <div className="content-block">
            <h3>公司实力</h3>
            <p>
            1.普脂康研发团队具有专业的研发团队，联合厦门大学建立了产学研合作平台。
            </p>
            <br />
            <br />
            <p>
            2.具有一体化生产车间，具有高效安全生产设施。
            </p>
            {/* 工厂图片网格 - 2行3列 */}
            <div className="factory-gallery">
              <div className="factory-image-item" onClick={() => handleImageClick('/photos/factory1.png')}>
                <img src="/photos/factory1.png" alt="工厂图片1" />
              </div>
              <div className="factory-image-item" onClick={() => handleImageClick('/photos/factory2.png')}>
                <img src="/photos/factory2.png" alt="工厂图片2" />
              </div>
              <div className="factory-image-item" onClick={() => handleImageClick('/photos/factory3.png')}>
                <img src="/photos/factory3.png" alt="工厂图片3" />
              </div>
              <div className="factory-image-item" onClick={() => handleImageClick('/photos/factory4.png')}>
                <img src="/photos/factory4.png" alt="工厂图片4" />
              </div>
              <div className="factory-image-item" onClick={() => handleImageClick('/photos/factory5.png')}>
                <img src="/photos/factory5.png" alt="工厂图片5" />
              </div>
              <div className="factory-image-item" onClick={() => handleImageClick('/photos/factory6.png')}>
                <img src="/photos/factory6.png" alt="工厂图片6" />
              </div>
            </div>
            <br />
            <br />
            <p>
            3.具有多项专利，以严格的产品质量要求自身，致力成为全球磷脂型DHA领军企业。
            </p>
            
            {/* 专利证书图片网格 */}
            <div className="patent-gallery">
              <div className="patent-image-item" onClick={() => handleImageClick('/photos/patent1.png')}>
                <img src="/photos/patent1.png" alt="专利证书1" />
              </div>
              <div className="patent-image-item" onClick={() => handleImageClick('/photos/patent2.png')}>
                <img src="/photos/patent2.png" alt="专利证书2" />
              </div>
              <div className="patent-image-item" onClick={() => handleImageClick('/photos/patent3.png')}>
                <img src="/photos/patent3.png" alt="专利证书3" />
              </div>
              <div className="patent-image-item" onClick={() => handleImageClick('/photos/patent4.png')}>
                <img src="/photos/patent4.png" alt="专利证书4" />
              </div>
              <div className="patent-image-item" onClick={() => handleImageClick('/photos/patent5.png')}>
                <img src="/photos/patent5.png" alt="专利证书5" />
              </div>
            </div>
            
            {/* 图片放大模态框 - 使用 Portal 渲染到 body */}
            {selectedImage && createPortal(
              <div className="image-modal" onClick={closeModal}>
                <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="image-modal-close" onClick={closeModal}>×</button>
                  <img 
                    ref={imageRef}
                    src={selectedImage} 
                    alt="放大图片" 
                    style={{ transform: `scale(${imageScale})` }}
                  />
                  <div className="image-scale-info">
                    {Math.round(imageScale * 100)}%
                  </div>
                </div>
              </div>,
              document.body
            )}
                      
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
