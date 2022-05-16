<template>
  <div class="memo-item">
    <div class="act">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="fnView()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d, idx) in state.data" :key="idx" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="fnView(idx)">{{ d.name }} ({{d.age}}) - {{d.email}}</li>
    </ul>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">계정 정보</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul>
            <li>ID : {{state.selectedData.id}}</li>
            <li v-if="state.selectedData.id==null">Password : <input type="text" v-model="state.selectedData.password"/></li>
            <li>이름 : <input type="text" v-model="state.selectedData.name"/></li>
            <li>나이 : <input type="text" v-model="state.selectedData.age"/> </li>
            <li>지역 : <input type="text" v-model="state.selectedData.location"/></li>
            <li>이메일 : <input type="text" v-model="state.selectedData.email"/></li>
            <li>삭제 : <input type="text" v-model="state.selectedData.isDelete"/></li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="fnSave()">Save changes</button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import {reactive} from "vue";
import axios from "axios"

/* eslint-disable */
export default {
  
  setup() {
    const state = reactive({
      data: [],
      selectedData: {},
      isOpen: false,
      password: ''
    })

    const fnList = ()=>{
      axios.get("/api/accounts").then((res) => {
        if(res.status != 200){
          console.log("서버와 통신이 되지 않습니다.");
          return;
        }else if(res.data!=null && res.data.content!=null && res.data.content.length>0){
          state.data = res.data.content;
        }
      }).catch((e)=>(
        console.log("서버에 오류가 있습니다.", e)
      ))
    }
    
    const add = ()=>{
      state.data.push({name: "추가회원"});
    }

    const fnView = (idx)=>{
      console.log(idx);
      console.log(state.data[idx]);
      if(idx != undefined){
        state.selectedData = Object.assign({}, state.data[idx]);
      }else{
        state.selectedData = {};
      }
      state.isOpen = true;
    }

    const fnSave = ()=>{
      console.log('save');
      console.log(state.selectedData);
      var id = state.selectedData.id;
      if(id == null){
        // 신규추가
        axios.post("/api/accounts/", state.selectedData).then((res) => {
          console.log(res.status);
          if(res.status != 200){
            console.log("서버와 통신이 되지 않습니다.");
            return;
          }
          console.log('res data : ', res.data);
          fnList();
        }).catch((e)=>(
          console.log("서버에 오류가 있습니다.", e)
        ))
      }else{
        // 수정
        axios.put("/api/accounts/"+id, state.selectedData).then((res) => {
          console.log(res.status);
          if(res.status != 200){
            console.log("서버와 통신이 되지 않습니다.");
            return;
          }
          console.log('res data : ', res.data);
          fnList();
        }).catch((e)=>(
          console.log("서버에 오류가 있습니다.", e)
        ))
      }
      
    }

    fnList();
    return {state, add, fnView, fnSave};
  }
}
</script>

<style lang="scss" scoped>
.memo-item {
  .act{
    padding: 10px 10px 5px 5px;
    text-align:right;
  }
  ul{
    border-top: 1px solid #efefef;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding : 15px 10px;
      margin: 10px;
      border: 1px solid #efefef;
      cursor: pointer;
    }
}}
#accountModal{
    position: fixed;
    top: 40px;
    left: 0;
    z-index: 1055;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
}

</style>