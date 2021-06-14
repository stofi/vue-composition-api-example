<template>
  <router-view />
  <ListIndex
    :items="planets"
    :keys="[
      'name',
      'population',
      'diameter',
      'rotation_period',
      'orbital_period',
    ]"
  />
  <ListIndex :items="starships" :keys="['name', 'length', 'passengers']" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useDarkmode from './use/Darkmode'
import ListIndex from './components/List/Index.vue'
import { Planet, Starship } from './types'

export default defineComponent({
  name: 'App',
  components: {
    ListIndex,
  },
  setup() {
    useDarkmode()
    const planets = ref<Planet[]>([])
    const starships = ref<Starship[]>([])

    fetch('http://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then(({ results }) => {
        planets.value = results
      })
    fetch('http://swapi.dev/api/starships/')
      .then((response) => response.json())
      .then(({ results }) => {
        starships.value = results
      })
    return { planets, starships }
  },
})
</script>
