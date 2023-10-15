<template>
  <Navigation>
    <template v-slot:title>Alunos</template>
    <template v-slot:end>
      <router-link to="/students/create"><PlusIcon class="w-4 h-4"></PlusIcon></router-link>
    </template>
  </Navigation>
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import { PlusIcon } from '@heroicons/vue/24/outline'
</script>