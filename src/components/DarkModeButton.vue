<template>
  <button @click.prevent="toggle">
    <MoonIcon class="w-8 h-8" v-if="isDark"></MoonIcon>
    <SunIcon class="w-8 h-8" v-else></SunIcon>
  </button>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue';
import { useDarkModeStore } from '@/stores/dark-mode'

const darkStore = useDarkModeStore();

const isDark = computed(() => darkStore.isDark);
const toggle = darkStore.toggle
</script>