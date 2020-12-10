
<template>
  <div class="wxShare">
    <Modal
      v-model="shareFlag"
      title="打开微信“扫一扫”
打开网页后点击屏幕右上角分享按钮"
      :closable="false"
    >

      <div class="qr-code" ref="qrCodeUrl"></div>
      <div slot="footer">
        <Button size="large" @click="alertCancel">取消</Button>
        <Button type="primary" @click="alertCancel" size="large">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: "wxShare",
  props:['shareFlag'],
  data() {
    return {

    };
  },
  methods:{
    alertCancel(){
      this.$emit("popclose")
    },
    getWxShare(){
      let address = window.location.href
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
          text: address, // 需要转换为二维码的内容
          width: 150,
          height: 150,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
      })
    }
  },
  mounted(){
    this.getWxShare()
  } 
};
</script>

<style lang="less" scoped>
  .qr-code {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
</style>
