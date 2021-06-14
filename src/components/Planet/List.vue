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
      <PlanetListItem
        v-for="planet in planetsSorted"
        :key="planet.name"
        :keys="keys"
        :planet="planet"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import PlanetListItem from './ListItem.vue'
import { Planet, PlanetKey } from '../../types'

export default defineComponent({
  name: 'PlanetList',
  components: {
    PlanetListItem,
  },
  props: {
    planets: {
      type: Array as PropType<Planet[]>,
      default: () => [],
    },
    keys: {
      type: Array as PropType<PlanetKey[]>,
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
    planetsSorted(): Planet[] {
      const key = this.sortingKey as keyof Planet
      const keyExists = this.keys.indexOf(key) !== -1

      return this.sortingEnabled && keyExists
        ? this.sortingAsc
          ? this.planets.slice().sort((a, b) => (a[key] > b[key] ? -1 : 1))
          : this.planets.slice().sort((a, b) => (a[key] < b[key] ? -1 : 1))
        : this.planets
    },
  },
})
</script>
