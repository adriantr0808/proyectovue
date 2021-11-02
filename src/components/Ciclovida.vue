<template>
  <div>
    <h1>Ejemplo ciclo de vida Hooks</h1>
    <h2>{{ saludo }}</h2>
    <button @click="cambiarSaludo()">Cambiar saludo</button>
  </div>
</template>

<script>
export default {
  name: "Ciclovida",
  methods: {
    //AQUI PONDREMOS TODOS LOS METODOS DE LA PAGINA
    cambiarSaludo() {
      this.saludo = "He cambiado?";
    },
  },
  data() {
    return {
      saludo: "Hola Hooks!!",
    };
  },
  mounted() {
    console.log("Componente montado");
  },
  created() {
    console.log("Componente creado");
  },
  destroyed() {
    console.log("Componente eliminado");
  },
  updated() {
    console.log("Dibujado modificado en TEMPLATE");
  },
};
</script>