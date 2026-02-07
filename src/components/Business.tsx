import React from 'react'

const Business: React.FC = () => {
  return (
    <section id="business" className="section">
      <div className="container">
        <h2>我们的产品</h2>
        <div className="business-cards">
          <div className="business-card">
            <div className="business-card-image">
              <img src="./photos/DHA原料.png" alt="磷脂型DHA原材料" />
            </div>
            <div className="business-card-content">
              <h3>磷脂型DHA原材料</h3>
              <p>
                选用大豆卵磷脂与藻油DHA通过自主研发的脂肪酶B发展转酯反应得到磷脂型DHA，产品发生在水相环境下，具有安全绿色，吸收率高，无有机试剂残留的特点，是值得依赖的选择。
              </p>
            </div>
          </div>

          <div className="business-card">
            <div className="business-card-image">
              <img src="./photos/DHA胶囊.png" alt="磷脂型DHA胶囊食品" />
            </div>
            <div className="business-card-content">
              <h3>磷脂型DHA胶囊食品</h3>
              <p>
                具备明胶、植物胶(淀粉胶、卡拉胶)成熟工艺，以软胶囊、凝胶糖果为载体，内含脂溶性营养素(如维生素D、DHA)或功能提取物等，提升成分稳定性与吸收率，满足多样化的产品需求。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Business
