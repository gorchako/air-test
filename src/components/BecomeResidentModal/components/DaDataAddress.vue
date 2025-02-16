<script lang="ts" setup>
import { ref } from 'vue'
import BaseInput from "@/components/Base/BaseInput.vue";
import { getAddress } from "@/utils/DaData";

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const suggestions = ref([])

async function onInput (value: string) {
  emit('update:modelValue', value)

  try {
    const res = await getAddress(value)
    suggestions.value = res.suggestions
  } catch (error) {
    console.log(error)
  }
}

function onSelectSuggestion (suggestion: string) {
  emit('update:modelValue', suggestion)
  suggestions.value.splice(0, suggestions.value.length)
}
</script>

<template>
  <div class="DaDataAddress">
    <BaseInput
        v-debounce:400ms="onInput"
        v-bind="$attrs"
        placeholder="Адрес"
        :value="$attrs.modelValue"
        @input="emit('update:modelValue', $event.target.value)"
    />

    <div class="DaDataAddress__Items">
      <div
          class="DaDataAddress__Item"
          v-for="(suggestion, index) in suggestions"
          :key="index"
          @click="onSelectSuggestion(suggestion.value)"
      >
        {{ suggestion.value }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.DaDataAddress {
  &__Item {
    display: block;
    padding: 4px 20px;
    border: 2px solid $color-gray;

    &:hover {
      background-color: $color-gray;
    }

    &:first-child {
      border-radius: 6px 6px 0 0;
    }

    &:not(:first-child) {
      border-top: 0;
    }

    &:last-child {
      border-radius: 0 0 6px 6px;
    }
  }
}
</style>