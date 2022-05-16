<template>
  <header>
      원앤집
      <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/storeSample">StoreSample</router-link></li>
      </ul>
  </header>
</template>

<style lang="scss">
  header{
    background: #f7f7f7;
    border-bottom: 1px solid #eee;
    text-align:center;
    padding-top: 23px;
    ul{
      list-style: none;
      text-align:left;
      li{
        display:inline-block;
        padding:10px 20px;
      }
    }
    
  }
</style>
