<script setup lang="ts">
import { darkTheme } from 'naive-ui'

const isDark = useDark()

const theme = computed(() => isDark.value ? darkTheme : null)
</script>

<template>
  <AppConfigProvider :theme>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </AppConfigProvider>
</template>
