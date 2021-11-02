<template>
  <div>
    <h1>Directivas VUE</h1>
    <ul v-if="peliculas.length > 0">
      <li v-for="pelicula in peliculas" :key="pelicula">
        {{ pelicula }}
      </li>
    </ul>
    <hr />
    <label>Introduzca un número: </label>
    <input type="number" v-model="numero" /><br />
    <h3 v-if="numero > 0" style="color: green">Positivo</h3>
    <h3 style="color: blue" v-else-if="numero == 0">Cero</h3>
    <h3 style="color: red" v-else-if="numero < 0">Negativo</h3>
    <br />
    <label>Nombre: </label>
    <input type="text" v-model="nombre" /><br />
    <br />
    <label>Edad: </label>
    <input type="number" v-model="edad" /><br />
    <h1>{{ nombre }}, {{ edad }}</h1>
    <h1>
      {{ $data }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "Directivas",
  data() {
    return {
      nombre: "",
      edad: 0,
      numero: 0,
      peliculas: ["Up", "Coco", "Wall-E", "Inside-out"],
    };
  },
};
</script>