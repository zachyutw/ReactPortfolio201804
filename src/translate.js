{url:"/parenting/pedia/0",title:"全部文章",name:'all'},
{url:"/parenting/pedia/1",title:"父母须知",name:'need2konw'},
{url:"/parenting/pedia/2",title:"孕期食谱",name:'recipe'},
{url:"/parenting/pedia/3",title:"孕期保养",name:'maintain'}],
title:"文章载入中"
{ name: 'pedia',     id: 1, title: "百科", url: "/parenting/pedia/0"}, 
{ name: 'identify',  id: 2, title: "鉴评", url: "/parenting/identify/0"}, 
{ name: 'know',      id: 3, title: "知识", url: "/parenting/know/0"}, 
{ name: 'education', id: 4, title: "教育", url: "/parenting/education/0"}

<p >快速链结</
const lists = [
    {url:"/parenting/pedia/0",     name:'个人中心'},
    {url:"/parenting/pedia/0",     name:'我的帐户'},
    {url:"/parenting/pedia/0",     name:'消息通知'},
    {url:"/parenting/pedia/0",     name:'关于我们'},
    {url:"/parenting/pedia/0",     name:'意见反馈'}
]
            
            const QuickSearchDiv = ()=>{
                return (
                  <div className={style.quickLink_container} >
                    <p>快速链结</p>
                    <ul className={style.quikLink_list}>
                      <li><Link to={"/parenting/pedia/0"}>亲子</Link></li>
                      <li><Link to={"/doctor/pediatric"}>在线医生</Link></li>
                      <li><Link to={"/entertainment"}>娱乐</Link></li>
                      <li><Link to={"/life"}>生活</Link></li>
                    </ul>
                </div>    
                )
            }

            <img className={style.img} alt="success" src={success_svg} />
            <p className={style.message}>成功</p>
        </div>
        <Button className={style.btn}> 返回首頁 </Button>

        render() {
            const {userInfo, isLoading, errorMsg} = this.props.userInfo;
            return (
                <div>
                    {
                        isLoading ? '请求信息中......' :
                            (
                                errorMsg ? errorMsg :
                                    <div>
                                        <p>用户信息：</p>
                                        <p>用户名：{userInfo.name}</p>
                                        <p>介绍：{userInfo.intro}</p>
                                    </div>
                            )
                    }
                    <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
                </div>
            )
        }

        第{n+1}卷

        const sublist= [
            {    name: 'pediatric', id: 1,  title: "儿科",  url: "/doctor/pediatric"
            }, { name: 'gynecology', id: 2,  title: "妇科", url: "/doctor/gynecology"
            }, { name: 'general', id: 3,  title: "全科",    url: "/doctor/general"
             },{ name: 'qna', id: 4,  title: "问答",        url: "/doctor/qna" }
        ]
        const  sublist= [
            { name: 'onlinegame', id: 0, title: "线上", url: "/entertainment/onlinegame"},
            { name: 'limitfree', id: 1, title: "限免",  url: "/entertainment/limitfree"},  
            { name: 'comic', id: 2, title: "漫画",      url: "/entertainment/comic"},
            { name: 'mobilegame', id: 3, title: "手游", url: "/entertainment/mobilegame"}
        ]
        <span>想要搜点什么</span>


        <div className={style.login_form_container}>
        <Form handleSubmit={this.handleSubmit}  />
    </div> 
    { <p className={style.errorMsg}> { _.isEmpty(this.props.userInfo.errorMsg)?"":"请更正错误讯息"} </p> }
    <div className={style.other_logins_container} >
             <p>更多登录方式</p>

            {loginWays.map((way,index)=> <LoginWays key={index} {...way} />)}
            <div className={style.link_container}>
            <Link to="register" >创建新帐号</Link>
            </div>
        </div>
    </div>
)

placeholder="e.g. 寿司,公园,图书馆" 
label={<img className={style.img}  src={search_svg} alt="account" />}  
/>
<Field  
name="city" 
component={renderField} 
type="text" 
placeholder="(目前位置) 请选择所在城市" 


const timelineDatas = (length,actions)=>{
    switch(actions){
        case 'pedia':
            return _.times(length,(value)=>{
                if(value===0)             { return {current:true , id:'sbw'+value, tag: 'all'         , tagName:'全部'} }
                else if(value===length-1) { return {current:false, id:'sbw'+value, tag:'apregnent'    , tagName:'产后'} }
                else if(value===1)        { return {current:false, id:'sbw'+value, tag:'pregnent'    , tagName:'备孕'} }
                else                      { return {current:false, id:'sbw'+value, tag:'w'+(value-1)*4, tagName:(value-1)*4+'周'} }
            });
            case 'identify':
            return _.times(length,(value)=>{
                if(value===0)             { return {current:true , id:'sbi'+value, tag: 'all'         , tagName:'全部'} }
                else if(value===length-1) { return {current:false, id:'sbi'+value, tag:'apregnent'    , tagName:'7岁半'} }
                else if(value>8)          { return {current:false, id:'sbi'+value, tag:'i'+(value)-4  , tagName:(value)-4+'岁'} }
                else                      { return {current:false, id:'sbi'+value, tag:'i'+(value)*0.5, tagName:(value)*0.5+'岁'} }
            });
            case 'know':
            return _.times(length,(value)=>{
                if(value===0)             { return {current:true , id:'sbk'+value, tag: 'all'         , tagName:'全部'} }
                else if(value===length-1) { return {current:false, id:'sbk'+value, tag:'apregnent'    , tagName:'10岁+'} }
                else                      { return {current:false, id:'sbk'+value, tag:'k'+(value)    , tagName:(value-1)+'岁'} }
            });
            case 'education':
            return _.times(length,(value)=>{
                if(value===0)             { return {current:true , id:'sbe'+value, tag: 'all'         , tagName:'全部'} }
                else if(value===length-1) { return {current:false, id:'sbe'+value, tag:'apregnent'    , tagName:'10岁+'} }
                else                      { return {current:false, id:'sbe'+value, tag:'e'+(value)    , tagName:(value-1)+'岁'} }
            });
        default:
            return []
    }
}

const dropdownDatas = {
    pedia: [   
      {url:"/parenting/pedia/0",title:"全部文章",name:'all'},
      {url:"/parenting/pedia/1",title:"父母须知",name:'need2konw'},
      {url:"/parenting/pedia/2",title:"孕期食谱",name:'recipe'},
      {url:"/parenting/pedia/3",title:"孕期保养",name:'maintain'}],
    identify: [   
      {url:"/parenting/identify/0",title:"全部文章",name:'all'},
      {url:"/parenting/identify/1",title:"食品评测",name:'foodreview'},
      {url:"/parenting/identify/2",title:"百货评测",name:'storereview'},
      {url:"/parenting/identify/3",title:"清洁用品",name:'cleaning'}],
    know:[   
      {url:"/parenting/know/0",title:"全部文章",name:'all'},
      {url:"/parenting/know/1",title:"健康营养",name:'nutrition'},
      {url:"/parenting/know/2",title:"宝妈须知",name:'baomanotice'},
      {url:"/parenting/know/3",title:"沟通教养",name:'communication'}],
    education:[   
      {url:"/parenting/education/0",title:"全部文章",name:'all'},
      {url:"/parenting/education/1",title:"健康营养",name:'nutrition'},
      {url:"/parenting/education/2",title:"宝妈须知",name:'baomanotice'},
      {url:"/parenting/education/3",title:"沟通教养",name:'communication'}]
  }

  const navItems = [
    { name: 'parenting',     id: 0, imgActive: img_0_click, imgObj: img_0_unclick, title: "亲子", url: "/parenting/pedia/0" }, 
    { name: 'doctor',        id: 1, imgActive: img_1_click, imgObj: img_1_unclick, title: '医疗', url: "/doctor/pediatric"            }, 
    { name: 'entertainment', id: 2, imgActive: img_2_click, imgObj: img_2_unclick, title: '娱乐', url: "/entertainment/onlinegame"     }, 
    { name: 'life',          id: 3, imgActive: img_3_click, imgObj: img_3_unclick, title: '生活', url: "/life"              }
]

render(){
    const navItems = [
        { name:'parenting', id:0, imgActive: ""  , img:    parenting_svg, title: "亲子", url:  "/parenting/pedia/0"}, 
        { name:'doctor', id:1, imgActive: ""  , img:    doctor_svg, title: '医疗', url: "/doctor/pediatric"}, 
        { name:'entertainment', id:2, imgActive: ""  , img:    entertainment_svg, title: '娱乐', url:  "/entertainment/onlinegame"}, 
        { name:'life', id:3, imgActive: ""  , img:    life_svg, title: '生活', url: "/life" }
      ]
      
return (
    <div className={style.footer+" clearfix"}  id="footer" >
         <div className={style.footer_quicklink} >
            <div className={bsCols(4)+" "+style.footer_card }>
                <img className={style.footer_card_image} src={mobile_svg} alt="mobile"/>
                <p >移动版</p>
            </div>
            <a href="http://roro.one/?m=0" className={bsCols(4)+" "+style.footer_card }>
                <img className={style.footer_card_image}  src={desktop_svg}  alt="mobile"/>
                <p >电脑版</p>
            </a>
            <div className={bsCols(4)+" "+style.footer_card }>
                <img className={style.footer_card_image}  src={about_svg} alt="mobile"/>
                <p >关于</p>
            </div>
        </div> 
       {navItems.map((item,index)=> this.renderNavItem(item,navItems.length,index) )}
    </div>

)}
}

<Modal.Body className={style.model_body+" clearfix"} >
<div className={bsCols(4)+" "+style.title_container} >
    <p> <b>科室</b>：{departmentDescription}</p>
    <p> <b>职称</b>：{title}</p>
</div>
<div className={bsCols(8)+" "+style.desc_container}>
    <p>详细介绍：<br/>{description}</p>
</div>                 
</Modal.Body>

<Field
name="username"
component={renderField}
type="text"
placeholder="请输入登录邮箱"
normalize={lower}     
label={<img className={style.img} src={account_svg} alt="account" />}
/>


<Field
name="password"
component={renderField}
type="password"
placeholder="请输入密码"

label={<img className={style.img} src={password_svg} alt="account" />}

case 1: return (
    <li key={title} className={style.listGroup_item +" clearfix"}  >                   
          <div className={bsCols(4)+" "+style.card_img} >
            <CardTumbnail {...value} img={"https://roro.one/img/yule/game-ol/"+src }  />                         
          </div>
          <div className={bsCols(5)+" "+style.card_content}  >
            <CardDescription {...value} />                         
          </div>
          <div className={bsCols(3)+" "+style.action_container}   style={{paddingLeft: "0px",paddingRight: "0px",minHeight: "1px"}}>                         
            <CardAction img={start_svg} URL={"https://roro.one/game/"+filename+"/"+url+".html"} imgTitle="开始游戏" {...value} />                         
          </div>                             
    </li> )
case 2:         

return (
    <li key={name} className={style.listGroup_item +" clearfix"}  >                   
           <div className={bsCols(4)+" "+style.card_img} >
            <CardGameTumbnail {...value} img={ icon } />                         
          </div>
          <div className={bsCols(5)+" "+style.card_content}  >
            <CardGameDescription title={name} original_price={original_price} platform={platform}  />                         
          </div>
          <div className={bsCols(3)+" "+style.action_container}  style={{paddingLeft: "0px",paddingRight: "0px",minHeight: "1px"}}>                    
            <CardGameAction stars={stars} imgTitle="满分5分" {...value} />                         
          </div>                             
    </li> )        
case 3: 
return (      
    <li key={title} className={style.listGroup_item +" clearfix"}  >
          <div className={bsCols(4)+" "+style.card_img} >
          <CardTumbnail  {...value} img={"https://www.roro.one/book/manga/"+filename+"/"+filename+".jpg" } />  
          </div>
          <div className={bsCols(5)+" "+style.card_content}  >
          <CardDescription {...value}  />    
          </div>
          <div className={bsCols(3)+" "+style.action_container}  style={{paddingLeft: "0px",paddingRight: "0px",minHeight: "1px"}}>              
          <Link to= {"/comics/"+filename} ><CardMangoAction img={book_svg} URL={"/comics/"+filename} imgTitle="开始阅读" {...value} />  </Link>             
          </div>
    </li> )
case 4: return (
    <li key={title} className={style.listGroup_item +" clearfix"} style={{position:'relative'}} >                   
            <div className={bsCols(4)+" "+style.card_img} >
            <CardTumbnail {...value} img={"https://roro.one/img/yule/game-ol/"+src }  />                         
          </div>
          <div className={bsCols(5)+" "+style.card_content}  >
            <CardDescription {...value} />                         
          </div>
          <div className={bsCols(3)+" "+style.action_container}  style={{paddingLeft: "0px",paddingRight: "0px",minHeight: "1px"}}>                       
             <CardAction img={start_svg} URL={"https://roro.one/game/"+filename+"/"+url+".html"} imgTitle="開始遊戲" {...value} />                
          </div>                             
    </li> )
default: return ""