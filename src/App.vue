<template>
  <router-view />
  <PlanetList
    :planets="planets"
    :keys="[
      'name',
      'population',
      'diameter',
      'rotation_period',
      'orbital_period',
    ]"
  />
  <StarshipList :starships="starships" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useDarkmode from './use/Darkmode'
import { Planet, Starship } from './types'
import PlanetList from './components/Planet/List.vue'
import StarshipList from './components/Starship/List.vue'

export default defineComponent({
  name: 'App',
  components: {
    PlanetList,
    StarshipList,
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
