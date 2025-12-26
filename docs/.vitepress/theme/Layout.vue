<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <slot />
    <!-- noscript fallback for Yandex.Metrika -->
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/106038322" style="position:absolute; left:-9999px;" alt="" />
      </div>
    </noscript>
  </DefaultTheme.Layout>
</template>

// layout removed to reset to default theme


