<template>
  <form 
    class="form" 
    @submit.prevent="$emit('change-color', color, selected)" >
    <h3 class="form__header">
      Change color
    </h3>
    <strong>choose color:</strong>
    <div class="form__body form__input">
      <v-swatches
        :swatches="swatches"
        v-model="color"
        show-fallback
        inline
        fallback-input-type="color"
        popover-x="left"
      ></v-swatches>
    </div>

    <div class="form__select">
      <select 
        class="form__select-options" 
        v-model="selected">
        <option disabled value="">choose cell</option>
        <option 
          v-for="(number, index) in numbers" 
          :key="index">
          {{number.id}}
        </option>
      </select>
    </div>
    <button class="form__button" type="submit">Change color</button>
  </form>
</template>
 
<script>
  import VSwatches from "vue-swatches";
  // Import the styles too, globally
  import "vue-swatches/dist/vue-swatches.css";
 
  export default {
    props: 
      ['mainColor',
      'numbers']
    ,
    components: { VSwatches }, // window['vue-swatches'] - from CDN
    data () {
      return {
        color: this.mainColor,
        swatches:'text-advanced',
        selected: '',
      }
    },
  }
</script>
<style scoped>
  .form__number {
    width: 50px;
    height: 20px;
  }

  .form {
    width: 250px;
    margin: auto;
    height: 400px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
   @media screen and (max-width: 674px) {
     .form {
      margin-bottom: 20px;
    }
  }

  .form__header {
    margin-top: 0;
    margin-bottom: 20px;
    color: #42b983;
  }

  .form__body {
    margin: 20px 0;
  }

  .form__select{
    margin-bottom: 20px;
  }
  .form__button {
    width:100%;
    height: 30px;
    background-color: #42b983;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
  }
  .form__button:hover {
    background-color: #74cca5;
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.2);
  }
  .form__select-options{
    width: 100%;
    height: 30px;
  }

</style>