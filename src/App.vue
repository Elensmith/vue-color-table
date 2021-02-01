<template>
  <div id="app">
    <Popup 
      :mainColor="mainColor" 
      :numbers="numbers" 
      @change-color="changeColor"/>
    <Table 
      :numbers="numbers" 
      :mainColor="mainColor"/>
  </div>
</template>

<script>
import Table from "@/components/Table";
import Popup from "@/components/Popup";
export default {
  name: 'App',
  data() {
    return {
      mainColor: '#A463BF',
      numbers: [
        {id: '1', color: ''}, 
        {id: '2', color: ''}, 
        {id: '3', color: ''}, 
        {id: '4', color: ''}, 
        {id: '5', color: ''}, 
        {id: '6', color: ''}, 
        {id: '7', color: ''}, 
        {id: '8', color: ''}, 
        {id: '9', color: ''},
        {id: '10', color: ''},
        {id: '11', color: ''},
        {id: '12', color: ''},
      ],
    }
  },
  components: {
    Popup,
    Table,
  },
  methods: {
    changeColor(color, selected) {
      this.mainColor = color;
      Array.from(this.numbers)[selected - 1].color = color;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
}
  @media screen and (max-width: 674px) {
    #app {
      flex-direction: column;
    }
  }

.button {
  width: 100px;
  height: 30px;
  background-color:LightSkyBlue;
  margin-bottom: 30px;
  border: none; 
  outline: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);;
  cursor: pointer;
}
.button:hover {
  background-color: cornflowerblue;
}
</style>
