<template>
  <table class="table">
    <tbody>
      <tr v-for="(number, i) in numbers" :key="i">
        <td 
        class="table__cell" 
        :style="{ backgroundColor: number.color}" 
        :key="i">
        {{number.id}}
        </td>
      </tr>
   </tbody>
  </table>
</template>

<script>
export default {
  props: [
    'numbers',
  ],
}
</script>

<style scoped>
.table {
  margin: auto;
}
.table__cell {
  font-style: italic;
  font-size: 20px;
  width: 300px;
  height: 30px;
  border: 1px solid black;
}
</style>