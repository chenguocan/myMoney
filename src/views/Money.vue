<template>
  <div>
    <Layout>
      <div class="messageBox">
        <div class="myLabels">
          <div class="labels">衣</div>
        </div>

        <div class="addLabels">
          <input type="text" placeholder="新增标签">
        </div>
      </div>
      <div class="remaks">
        <span>备注</span><input type="text" placeholder="在这里添加备注" >
      </div>
      <div class="caculator">


      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",

}
</script>

<style lang="scss" scoped>
.messageBox{
  min-height:40vh;
  max-width:100vw ;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .myLabels{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap-reverse;
    .labels{
      height: 30px;
      width: 60px;
      border-radius: 20px 20px 20px 20px;
      background: rgb(217, 217, 217);
      transform: translateX(20px) translateY(-5px);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 25px;
      margin-top:10px;
      font-size: 17px;
    }
  }
  .addLabels{
    height: 40px;
     width: 100px;
    display: flex;
    justify-content: center;
    margin:10px 5px;
      input{
      height: 25px;
      width: 70px;
      font-size: 15px;
      border:0;
      border-bottom:2px solid rgb(159, 159, 159);
      outline: none;
      text-indent: 0.5em;
    }
  }
}
.remaks {
  min-height: 10vh;
  max-width: 100vw;
  display: flex;
  justify-content: flex-start;
  padding-left: 14px;
  align-items: center;
  font-size: 18px;
  background:rgb(245, 245, 245);
  color:rgb(117, 117, 117);
   input{
     margin-left: 15px;
     margin-top:2px;
     border:0;
     background: inherit;
     font-size: 16px;
     outline: none;
     color:rgb(170, 170, 170);
   }
}
.caculator{
  width: 100vw;
  height: (100vh - 40vh - 10vh - 8vh);
  border:1px solid red;
}
</style>