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
  labels?: string[];
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
    <BaseInput
        v-maska="dateMask"
        :modelValue="props.modelValue.from"
        :placeholder="labels[0] || ''"
        @update:modelValue="onFromFieldInput"
    />
    <BaseInput
        v-maska="dateMask"
        :modelValue="props.modelValue.to"
        :placeholder="labels[1] || ''"
        @update:modelValue="onToFieldInput"
    />
  </div>
</template>

<style lang="scss">
.BaseInputRange {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
</style>
