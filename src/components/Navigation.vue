<template>
  <div class="flex justify-between items-center">
    <router-link to="/">
      <ChevronLeftIcon class="w-8 h-8"></ChevronLeftIcon>
    </router-link>

    <h1><slot name="title"/></h1>
    <div><slot name="end"/></div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
</script>