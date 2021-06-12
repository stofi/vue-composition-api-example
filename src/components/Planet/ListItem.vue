<template>
  <li v-if="planet" class="grid grid-cols-12">
    <div class="col-span-3">
      {{ planet.name }}
    </div>
    <div class="col-span-4"></div>
    <div class="col-span-2">
      {{ planet.population }}
    </div>
    <div class="col-span-1">
      {{ planet.rotation_period }}
    </div>
    <div class="col-span-1">
      {{ planet.orbital_period }}
    </div>
    <div class="col-span-1">
      {{ planet.diameter }}
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Planet } from '../../types'

export default defineComponent({
  name: 'PlanetListItem',

  props: {
    planet: {
      type: Object as PropType<Planet>,
      default: () => null,
    },
  },
})
</script>
