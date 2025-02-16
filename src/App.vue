<script lang="ts" setup>
import { ref } from 'vue'
import BecomeResidentModal from "@/components/BecomeResidentModal/BecomeResidentModal.vue";

const isModalVisible = ref(false);

function openModal () {
  isModalVisible.value = true;
}
</script>

<template>
  <button @click="openModal">Show form</button>
  <BecomeResidentModal v-model="isModalVisible" />
</template>
