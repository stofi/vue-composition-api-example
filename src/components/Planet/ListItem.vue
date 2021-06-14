<template>
  <li v-if="planet" class="grid grid-cols-12">
    <div v-for="key in keys" :key="key" class="col-span-2">
      {{ planet[key] }}
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Planet, PlanetKey } from '../../types'

export default defineComponent({
  name: 'PlanetListItem',

  props: {
    planet: {
      type: Object as PropType<Planet>,
      default: () => null,
    },
    keys: {
      type: Array as PropType<PlanetKey[]>,
      default: () => ['name'],
    },
  },
})
</script>
