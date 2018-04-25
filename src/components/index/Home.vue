<template>
  <div class="view-content">
    
    <el-carousel  >
      <el-carousel-item v-for="item in items" :key="item">
       <img :src="item" style="width:100%;display:block;height:100%">
      </el-carousel-item>
    </el-carousel>

    <div class="main-content">
        <div style="width:960px;text-align:center;margin:0 auto">
            <h2>公司简介</h2>
            <p>公司秉承"感恩、共好、精进、变易、中和"的企业文化，信守"全员分红、精英持股"经营理念，坚持"精益管理、专业推广、真诚服务"的营销理念，追求多层次（客户、经销商、员工、股东）的共好，致力于成为业界的最佳健康服务提供商。</p>
        </div>
       
    </div>
  </div>

    
  

</template>
<script>
export default {
  data() {
    return {
        items:['/../../static/img/1.jpg','/../../static/img/2.jpg','/../../static/img/3.jpg','/../../static/img/4.jpg','/../../static/img/5.jpg'],
       
        
    }
  },
  mounted: function() {
    this.$nextTick(function() {
     
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
.el-carousel__container{
    min-height: 408px;
    display: block;
}
.el-carousel__item h3 {

  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .main-content{
      width: 100%;
      text-align: center;
      padding: 20px ;
     
  }
  .main-content h2{
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-bottom: 1px solid #aaa;
    font-size: 18px;
    color: #5F5F5F;
    font-weight: bold;
    
  }
  .main-content p{
    text-align: left;
    padding-top: 10px;
    text-justify: inter-ideograph;
    font-size: 20px;
  }
</style>

