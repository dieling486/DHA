import React from 'react'

const Applications: React.FC = () => {
  return (
    <section id="applications" className="section">
      <div className="container">
        <h2>应用场景</h2>
        <div className="content-wrapper">
          <div className="applications-gallery">
            <div className="application-image-card">
              <div className="application-image-wrapper">
                <img src="./photos/application1.png" alt="应用场景1" />
              </div>
              <div className="application-image-caption">
                原料供应
              </div>
            </div>

            <div className="application-image-card">
              <div className="application-image-wrapper">
                <img src="./photos/application2.png" alt="应用场景2" />
              </div>
              <div className="application-image-caption">
                婴幼儿食品开发
              </div>
            </div>

            <div className="application-image-card">
              <div className="application-image-wrapper">
                <img src="./photos/application3.png" alt="应用场景3" />
              </div>
              <div className="application-image-caption">
                中老年健康食品
              </div>
            </div>

            <div className="application-image-card">
              <div className="application-image-wrapper">
                <img src="./photos/application4.png" alt="应用场景4" />
              </div>
              <div className="application-image-caption">
                临床医学药品应用
              </div>
            </div>

            <div className="application-image-card">
              <div className="application-image-wrapper">
                <img src="./photos/application5.png" alt="应用场景5" />
              </div>
              <div className="application-image-caption">
                宠物食品补充剂
              </div>
            </div>

            <div className="application-image-card">
              <div className="application-image-wrapper">
                <img src="./photos/application6.png" alt="应用场景6" />
              </div>
              <div className="application-image-caption">
                功能性休闲食品
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Applications
