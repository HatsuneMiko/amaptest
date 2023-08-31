<template>
    <div>
        <div id="container"></div>
        <!-- <div class='input-card'></div> -->
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

window._AMapSecurityConfig = {
  securityJsCode: '5c89566fdbb6e30cfcdb82109a2c878d'
}

export default {
  name: 'IndexPage',
  data () {
    return {
      map: null
    }
  },
  mounted () {
    // DOM初始化完成进行地图初始化
    this.initMap()
  },
  methods: {
    initMap () {
      const load = AMapLoader.load({
        key: '195ed2e13c7ee4b5324e6fb729ca6b84', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.MapType', 'AMap.Geolocation'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map('container', { // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 10, // 初始化地图级别(缩放级别)
          center: [104.07275, 30.57899] // 初始化地图中心点位置
        })
        // 地图控件
        this.map.addControl(new AMap.Scale())
        this.map.addControl(new AMap.ToolBar())
        this.map.addControl(new AMap.HawkEye())
        this.map.addControl(new AMap.MapType())
        this.map.addControl(new AMap.Geolocation())
      }).catch(e => {
        console.log(e)
      })
      console.log(load)
    },
    BiLiChi () {
      console.log('控件-比例尺')
    }
  }
}
</script>

<style scoped>
#container{
    position: relative;
}

.input-card{
    width: 100px;
    height: 200px;
    background-color: red;
    position: absolute;
    left: 20px;
    top:20px;
}

#container {
    width: 100vw;
    height: 100vh;
}
</style>
