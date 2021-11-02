<template>
  <div>
    <hr />
    <nav>
      <ul id="menu">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/ciclovida">Ciclo Vida</router-link>
        </li>
        <li>
          <router-link to="/juegosconmutados">Juegos Conmutados</router-link>
        </li>
        <li>
          <router-link to="/directivas">Directivas</router-link>
        </li>
        <li>
          <router-link to="/cine">Cine</router-link>
        </li>
        <li>
          <router-link to="/tv">Television</router-link>
        </li>
        <li>
          <router-link to="/musica">Musica</router-link>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
ul#menu li {
  display: inline;
  margin: 1em;
  list-style-type: none;
  color: blue;
  text-decoration: none;
}
</style>