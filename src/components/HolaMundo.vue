<template>
  <div>
    <h1>Primer componente de VUE</h1>
    <h2>
      {{ saludo }}
    </h2>
    <h2>
      {{ nombre }}
    </h2>
    <img src="./../assets/images/1.jpg" />
  </div>
</template>

<script>
export default {
  //AQUI DENTRO SE DECALRAN TODAS LAS ZONAS DEL COMPONENTE
  name: "HolaMundo",
  data() {
    return {
      saludo: "Mi primera variable!!",
      nombre: "Adrián VUE",
    };
  },
};
</script>

<style scoped>
/*PARA ESTILOS SE UTILIZA @import*/
@import "./../assets/css/estilosvue.css";
</style>