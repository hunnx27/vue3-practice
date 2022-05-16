<template>
  <div class="login-item">
    <!-- Button trigger modal -->
    <ul>
      <li><label for="id" class="form-label">ID</label><input type="text" class="form-control" v-model="state.name"/></li>
      <li><label for="password" class="form-label">Password</label><input type="password" class="form-control" v-model="state.password"/></li>
    </ul>
    <div class="button-wrap">
      <button type="button" class="btn btn-primary" @click="login()">Login</button>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from 'axios';
/* eslint-disable */
export default {
  setup() {
    const state = reactive({
      name : "",
      password : ""
    })
    const login = ()=>{
      // FIXME test 필요 토큰값 처리 로직 추가 예정
      axios.post("/login", new URLSearchParams(state)).then((res) => {
        switch (res.status) {
          case 200:
            alert('로그인성공');  
            break;
          case 400:
            alert('잘못된 파라미터입니다.');
          case 401:
            alert('ID혹은 Password가 일치하지 않습니다. 계정정보를 확인해주세요.');
          default:
            alert('시스템 오류입니다. 관리자에게 문의하세요.');
            break;
        }
        if(res.status != 200){
          console.log("서버와 통신이 되지 않습니다.");
          return;
        }else if(res.data!=null && res.data.content!=null && res.data.content.length>0){
          alert('로그인성공!', '<br/>', cookie.authorization);
          state.data = res.data.content;
        }
      }).catch((e)=>(
        console.log("서버에 오류가 있습니다.", e)
      ))
    }
    return {state, login};
  }

  
}
</script>

<style lang="scss">
.login-item{
  width:350px;
  margin:0 auto 20px;
  ul{
    padding:0;
    margin:20px 0;
    list-style: none;
    li{
      input{
        width:100%;
      }
    }
  }
  .button-wrap{
    text-align:center;
    button{
      width:100%;
    }
  };
}
</style>