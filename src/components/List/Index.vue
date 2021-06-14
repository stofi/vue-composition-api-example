<template>
  <div class="p-2">
    <div class="grid grid-cols-12">
      <div
        v-for="key in keys"
        :key="key"
        @click="toggleSortKey(key)"
        class="col-span-2"
        :class="sortingKey === key ? 'font-bold' : ''"
      >
        {{ key }}
        <span v-show="sortingKey === key">{{ sortingAsc ? '🖢' : '🖣' }}</span>
      </div>
    </div>
    <ul class="text-sm text-gray-600 dark:text-gray-300">
      <ListItem
        v-for="item in itemsSorted"
        :key="item.name"
        :keys="keys"
        :item="item"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ListItem from './Item.vue'
import { Planet, PlanetKey, Starship, StarshipKey } from '../../types'

export default defineComponent({
  name: 'ListIndex',
  components: {
    ListItem,
  },
  props: {
    items: {
      type: Array as PropType<Planet[] | Starship[]>,
      default: () => [],
    },
    keys: {
      type: Array as PropType<PlanetKey[] | StarshipKey[]>,
      default: () => ['name'],
    },
  },
  data() {
    return {
      sortingEnabled: false,
      sortingAsc: true,
      sortingKey: '',
    }
  },
  methods: {
    toggleSortKey(key: string) {
      if (!this.sortingEnabled) this.sortingEnabled = true
      if (this.sortingKey === key) this.sortingAsc = !this.sortingAsc

      this.sortingKey = key
    },
  },
  computed: {
    itemsSorted(): Planet[] | Starship[] {
      const key = this.sortingKey as keyof Planet | keyof Starship[]
      const keys = this.keys as any
      const items = this.items as any
      const keyExists = keys.indexOf(key) !== -1
      const direction = this.sortingAsc ? 1 : -1

      return this.sortingEnabled && keyExists
        ? items
            .slice()
            .sort((a: any, b: any) =>
              a[key] > b[key] ? -direction : direction
            )
        : this.items
    },
  },
})
</script>
