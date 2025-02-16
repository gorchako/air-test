<script lang="ts" setup>
import BaseModal from "@/components/Base/BaseModal.vue";
import BecomeResidentModalForm from "@/components/BecomeResidentModal/BecomeResidentModalForm.vue";

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>

<template>
  <BaseModal
      title="Заполните заявку, чтобы стать резидентом"
      @update:modelValue="emit('update:modelValue', $event)"
  >
    <template #default>
      <BecomeResidentModalForm />
    </template>
  </BaseModal>
</template>

<style lang="scss">
</style>