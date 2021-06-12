<template>
  <div class="p-2">
    <div class="grid grid-cols-12 font-bold">
      <div class="col-span-3">name</div>
      <div class="col-span-6"></div>
      <div class="col-span-2">length</div>
      <div class="col-span-1">passengers</div>
    </div>
    <ul class="text-sm text-gray-600 dark:text-gray-300">
      <StarshipListItem
        v-for="starship in starships"
        :key="starship.name"
        :starship="starship"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import StarshipListItem from './ListItem.vue'
import { Starship } from '../../types'

export default defineComponent({
  name: 'StarshipList',
  components: {
    StarshipListItem,
  },
  props: {
    starships: {
      type: Array as PropType<Starship[]>,
    },
  },
})
</script>
