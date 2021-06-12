<template>
  <div class="p-2">
    <div class="grid grid-cols-12 font-bold">
      <div class="col-span-3">name</div>
      <div class="col-span-4"></div>
      <div class="col-span-2">population</div>
      <div class="col-span-1">rotation period</div>
      <div class="col-span-1">orbital period</div>
      <div class="col-span-1">diameter</div>
    </div>
    <ul class="text-sm text-gray-600 dark:text-gray-300">
      <PlanetListItem
        v-for="planet in planets"
        :key="planet.name"
        :planet="planet"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import PlanetListItem from './ListItem.vue'
import { Planet } from '../../types'

export default defineComponent({
  name: 'PlanetList',
  components: {
    PlanetListItem,
  },
  props: {
    planets: {
      type: Array as PropType<Planet[]>,
    },
  },
})
</script>
