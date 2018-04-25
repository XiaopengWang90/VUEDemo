// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import VueResource from 'vue-resource';
import store from '@/vuex/store'


Vue.config.productionTip = false


/* eslint-disable no-new */
Vue.use(ElementUI)
// Vue.use(iView)
Vue.use(VueResource);



Vue.prototype.checkStrNull = function (val) {
    if (val.replace(/(^\s*)|(\s*$)/g, "").length === 0) {
      return true
    }
  },
  Vue.prototype.ajaxGet = function (data, success, error) {
    this.$http.get(this.$store.state.url + "?fresh=" + Math.random(), {
      params: data,
      // headers: {"Cache-Control":"no-cache"},
    }).then(
      function (res) {
        // console.log(res)
        if (res.data.code == "002") {
          this.$alert(res.data.message, '注意', {
            confirmButtonText: '确定',
            callback: action => {
              return this.$router.push({
                path: '/login'
              })
            }
          });
        }
        if (res.data.code == "001") {
          console.log(res)
          this.$message(res.data.message)
        }
        if (res.data.code == "003") {
          console.log(res)
          this.$message(res.data.message)
        }
        if (res.data.code == "000") {
          return typeof success == "function" && success(res);
        }
      },
      function (res) {
        return typeof error == "function" && error(res);
      }
    );
  },
Vue.prototype.ajaxPost = function (data, success, error) {
  this.$http.post(this.$store.state.url, data, {
    emulateJSON: true
  }).then(
    function (res) {
      if (res.data.code == "002") {
        this.$alert(res.data.message, '注意', {
          confirmButtonText: '确定',
          callback: action => {
            return this.$router.push({
              path: '/login'
            })
          }
        });
      }
      if (res.data.code == "001") {
        console.log(res)
        this.$message(res.data.message)
      }
      if (res.data.code == "003") {
        console.log(res)
        this.$message(res.data.message)
      }
      if (res.data.code == "000") {
        return typeof success == "function" && success(res);
      }
    },
    function (res) {
      return typeof error == "function" && error(res);
    }
  );
}

new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  mounted: function () {
    this.$nextTick(function () {
     
    })
  },
})


