<template>
  <div id="app" >
    
    <div class="head" >
      <img src="/../../static/img/logo.png" style="float:left" height="60" width="280" />
      <el-menu :default-active="activeIndex" class="head-nav" style="" mode="horizontal" @select="handleSelect" router :unique-opened="true">
        <el-menu-item :route="{path: '/index'}" index="1">首页</el-menu-item>
        <el-menu-item :route="{path: '/index/CulturalVision'}" index="2">文化愿景</el-menu-item>
        <el-menu-item :route="{path: '/index/InnovationCenter'}" index="3">创新中心</el-menu-item>
        <el-menu-item :route="{path: '/index/ProductionCenter'}" index="4">生产中心</el-menu-item>
        <el-menu-item :route="{path: '/index/NewsInformation'}" index="5">新闻资讯</el-menu-item>
        <el-menu-item :route="{path: '/index/Recruit'}" index="6" >招贤纳士</el-menu-item>
        <el-menu-item :route="{path: '/index/Recruit'}" index="7" >公司家园</el-menu-item>
      </el-menu>
    </div>
    
    <div class="view-content" id="viewContentId">
       <router-view></router-view>
        
    </div>
      <div class="footer-content">
        <div class="footer-nav">
          <div class="footer-nav-content">
            <div class="r_m">
              <b>关于中翎易</b>
              <p>厦门中翎易生物科技有限公司</p>
              <p>地址：福建省厦门市海沧区翁角路2050号生物医药产业园B1楼701</p>
              <p>厦门中翎易优创科技有限公司</p>
              <p>地址：福建省厦门市海沧区翁角路2054号生物医药产业园B3楼302</p>
           
            </div>
            <div class="r_m">
              <b>联系方式</b>
                <p>电话：0592-5079037  </p>
                <p>邮箱： <a href="mailto:fjxmzlyyxb@163.com">fjxmzlyyxb@163.com</a></p>
                <p>微信：ZLYFJFC</p>
                <p>位置：<a href="http://j.map.baidu.com/aNwcN" target="_new">搜一搜</a></p>
                
            </div>
            <div class="f_code">
              <p>扫一扫：关注我们</p>
                <img src="/../static/img/code_a.jpg" alt=""/>
            </div>

          </div>
        </div>
        <div class="footer"><p>Copyright © 2018.Xiamen Zhonglingyi Bio-technology Co.Ltd All rights reserved.</p></div>
       </div> 
  </div>
    
    
</template>
<script>
export default {
  data() {
    return {
        activeIndex:'1',
    }
  },
  mounted: function() {
    this.$nextTick(function() {
       var o=document.getElementById('viewContentId');//获得元素
       o.style.height=window.innerHeight-390+'px';//设置宽度
     window.onresize =function(){
       var o=document.getElementById('viewContentId');//获得元素
       o.style.height=window.innerHeight-390+'px';//设置宽度
    
     }  
    })
  },
  filters: {

  },
  watch: {

  },
  methods: {
   
  },
}

</script>
<style>


.head{
      width: 100%;
      height: 90px;
      padding: 15px;
}
.head .head-nav{
      width:auto;margin-right:30px;height:60px;float: right;;background-color:#fff

}
.footer-content{
    height: 300px;
    width: 100%;
    float: left;
    margin-bottom: 0px;
    
}
.footer-nav {
  height: 250px;
  width: 100%;
  background-color: #A6A6A6;
  background-image: url(/../static/img/bg_b.jpg) ;
  border-top: solid 5px #CDCDCD;
  border-bottom: solid 5px #CDCDCD;
  float: left;
}
.footer{
  width: 100%;
  height: 50px;
  float: left;
  text-align:center;
  line-height: 50px;
  background-color: #000;
  font-size: 12px;
  color: #A6A6A6;
  background: url(/../static/img/bg_c.jpg) repeat-x;
  margin: 0 auto;
}

.footer-nav-content{
  width: 600px;
  height: 250px;
  float: right;
  color: #fff;
  margin-right: 20px;
  
}
.footer-nav-content .r_m{
    width: 190px;
    margin-left: 40px;
    text-align: left;
    float: left;
}
.footer-nav-content a {
  color: #FFF;
   text-decoration:none;
}
.footer-nav-content .f_code {
    width: 122px;
    height: 152px;
    float: left;
    margin-top: 16px;
} 
.r_m p {
    font-size: 12px;
    line-height: 200%;
    color: #FFF;
}
.r_m b {
    display: block;
    width: 100%;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    color: #FFF;
}
.f_code p  {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    color: #FFF;
}
</style>

