<template>
  <li v-if="item" class="grid grid-cols-12">
    <div v-for="key in keys" :key="key" class="col-span-2">
      {{ getItem(key) }}
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Planet, PlanetKey, Starship, StarshipKey } from '../../types'

export default defineComponent({
  name: 'ListItem',

  props: {
    item: {
      type: Object as PropType<Planet | Starship>,
      default: () => null,
    },
    keys: {
      type: Array as PropType<PlanetKey[] | StarshipKey[]>,
      default: () => ['name'],
    },
  },
  methods: {
    getItem(key: keyof Planet | keyof Starship): Planet | Starship {
      const item = this.item as any
      return item.hasOwnProperty(key) ? item[key] : ''
    },
  },
})
</script>
