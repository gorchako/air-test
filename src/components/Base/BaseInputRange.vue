<script lang="ts" setup>
import BaseInput from "@/components/Base/BaseInput.vue";

interface IRangeValue {
  from: string;
  to: string;
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: IRangeValue): void
}>()

const props = defineProps<{
  modelValue: IRangeValue;
  isDate?: boolean;
  placeholders?: string[];
}>()

const dateMask = props.isDate && '##.##.####'

function onFromFieldInput (value: string) {
  emit('update:modelValue', { from: value, to: props.modelValue.to })
}

function onToFieldInput (value: string) {
  emit('update:modelValue', { from: props.modelValue.from, to: value })
}
</script>

<template>
  <div class="BaseInputRange">
    <p class="BaseInputRange__Label">
      <slot name="label" />
    </p>

    <div class="BaseInputRange__Form">
      <BaseInput
          v-maska="dateMask"
          :modelValue="props.modelValue.from"
          :placeholder="placeholders[0] || ''"
          @update:modelValue="onFromFieldInput"
      />

      <BaseInput
          v-maska="dateMask"
          :modelValue="props.modelValue.to"
          :placeholder="placeholders[1] || ''"
          @update:modelValue="onToFieldInput"
      />
    </div>
  </div>
</template>

<style lang="scss">
.BaseInputRange {
  &__Label {
    color: $color-blue;
  }

  &__Form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}
</style>
