<template>
  <div class="mapCom">
    <titleCom title="合作伙伴" />
    <div
      id="myChart"
      :style="{width: '41.0vw', height: '34.8vw',margin: '10px auto',border:'1px dashed #ccc'}"
    ></div>
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
import echarts from "echarts";
import '../../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: "mapCom",
  components:{
    titleCom
  },
  data() {
    return {
    } 
  },
  mounted(){
    this.drawLine();
  },
  methods:{
     drawLine(){
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({ 
        backgroundColor: "#fff",
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['red']
        },
        geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            roam: false,
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.9)'
                }
              }
            },
            zoom: 1.2, 
            itemStyle: {
              normal: {
                borderWidth:2,
                borderColor: 'rgba(0, 0, 0, 0.2)',
                areaColor:"#CECECE",
                borderColor:"#FCFCFC",
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [{
              type: 'scatter',
              coordinateSystem: 'geo' // 对应上方配置
            },
            {
              name: '启动次数', // 浮动框的标题
              type: 'map',
              geoIndex: 0,
              data: [{
                "name": "河北",
                "value": 599
              }, {
                "name": "甘肃",
                "value": 599
              }, {
                "name": "黑龙江",
                "value": 599
              }, {
                "name": "宁夏",
                "value": 599
              }, {
                "name": "湖北",
                "value": 599
              }, {
                "name": "内蒙古",
                "value": 599
              },{
                "name": "内蒙古",
                "value": 599
              },{
                "name": "山东",
                "value": 599
              },{
                "name": "河南",
                "value": 599
              },{
                "name": "安徽",
                "value": 599
              },{
                "name": "江苏",
                "value": 599
              },{
                "name": "浙江",
                "value": 599
              },{
                "name": "四川",
                "value": 599
              },{
                "name": "广西",
                "value": 599
              },{
                "name": "广东",
                "value": 599
              },{
                "name": "海南",
                "value": 599
              }]
            }
          ]
      })
    }
  }
};
</script>


<style lang="less" scoped>
</style>

