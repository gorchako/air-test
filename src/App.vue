<script lang="ts" setup>
import { ref } from 'vue'
import BaseButton from "@/components/Base/BaseButton.vue";
import BecomeResidentModal from "@/components/BecomeResidentModal/BecomeResidentModal.vue";

const isModalVisible = ref(false);

function openModal () {
  isModalVisible.value = true;
}
</script>

<template>
  <BaseButton @click="openModal">Open Modal</BaseButton>
  <BecomeResidentModal v-model="isModalVisible" />
</template>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
