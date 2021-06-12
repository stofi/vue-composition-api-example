<template>
  <li v-if="starship" class="grid grid-cols-12">
    <div class="col-span-3">
      {{ starship.name }}
    </div>
    <div class="col-span-6"></div>
    <div class="col-span-2">
      {{ starship.length }}
    </div>
    <div class="col-span-1">
      {{ starship.passengers }}
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Starship } from '../../types'

export default defineComponent({
  name: 'StarshipListItem',

  props: {
    starship: {
      type: Object as PropType<Starship>,
      default: () => null,
    },
  },
})
</script>
