<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  title?: string,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>

<template>
  <VueFinalModal
      class="BaseModal"
      content-class="BaseModal__Container"
      @update:modelValue="emit('update:modelValue', $event)"
  >
    <div class="BaseModal__Content">
    <div class="BaseModal__Header">
      <h1 v-if="title" class="BaseModal__Title">
        {{ title }}
      </h1>
    </div>

    <div class="BaseModal__Body">
      <slot />
    </div>
    </div>
  </VueFinalModal>
</template>

<style lang="scss">
.BaseModal {
  &__Container {
    width: 100%;
    height: 100%;
    padding: 40px;
    overflow-y: auto;
  }

  &__Content {
    width: 800px;
    max-width: 100%;
    background: $color-white;
    padding: 40px;
    margin: 0 auto
  }

  &__Title {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 40px;
  }
}
</style>