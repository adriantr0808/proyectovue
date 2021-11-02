<template>
  <div>
    <h1>Propiedades conmutadas</h1>
    <ul>
      <li v-for="juego in juegos" :key="juego">
        {{ juego | mayusculas }}
        {{ juego | mayusuclasParametro("Juegazo!!!") }}
      </li>
    </ul>

    <hr />
    <ul>
      <li v-for="j in juegosRojos" :key="j" v-html="j">
        {{ j }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "JuegosConmutados",
  filters: {
    //En filters siempre debemso de recibir un valor
    mayusculas(dato) {
      return dato.toUpperCase();
    },

    mayusuclasParametro(DATO, descripcion) {
      return DATO.toUpperCase() + " " + descripcion;
    },
  },
  computed: {
    //UNA PROPIEDAD CONMUTADA SIEMPRE DEVUELVE VALORES Y NO TIENE PARAMETROS
    juegosRojos() {
      var datos = this.juegos;
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = '<span style="color: red">' + juego + "</span>";

        datos[i] = juego; //me vuelvo a guardar en el array el juego pintado de rojo
      }
      return datos;
    },
  },
  data() {
    return {
      juegos: [
        "Parchis",
        "Luz roja, luz verde",
        "La cuerda",
        "Las canicas",
        "Las galletas",
      ],
    };
  },
};
</script>

