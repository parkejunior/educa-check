<template>
  <main>
    <header>
      <div class="flex justify-between">
        <Greeting></Greeting>
        <DarkModeButton></DarkModeButton>
      </div>

      <form>
        <input type="text" placeholder="Pesquisar alunos...">
      </form>
    </header>
    
    <section>
      <div class="flex justify-between">
        <h2>Resumo de hoje</h2>
        <router-link to="/diaries" class="text-xs">Mostrar todos</router-link>
      </div>
    </section>

    <section>
      <div class="flex justify-between">
        <h2>Alunos</h2>
        <router-link to="/students" class="text-xs">Mostrar todos</router-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import Greeting from '@/components/Greeting.vue';
import DarkModeButton from '@/components/DarkModeButton.vue';
</script>