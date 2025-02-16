<script lang="ts" setup>
import { reactive, ref } from "vue";
import { IBecomeResidentForm } from "@/components/BecomeResidentModal/BecomeResidentModalForm.types";
import BaseInput from "@/components/Base/BaseInput.vue";
import BaseSelect from "@/components/Base/BaseSelect.vue";
import BaseInputRange from "@/components/Base/BaseInputRange.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import { PlacementType, SELECT_PLACEMENT_OPTIONS } from "@/components/BecomeResidentModal/BecomeResidentModalForm.constants";
import DaDataAddress from "@/components/BecomeResidentModal/components/DaDataAddress.vue";
import { callMockApi } from "@/utils/MockApi";

const isLoading = ref(false)

const form = reactive<IBecomeResidentForm>({
  companyName: '',
  phone: '',
  placementType: PlacementType.Industrial,
  address: '',
  placementArea: {
    from: '',
    to: '',
  },
  rentDate: {
    from: '',
    to: '',
  },
})

async function onSubmitForm () {
  isLoading.value = true
  await callMockApi(3000);
  isLoading.value = false
}
</script>

<template>
  <div class="BecomeResidentModalForm">
      <BaseInput
          v-model="form.companyName"
          placeholder="Наименование организации / ИП"
      />

      <BaseInput
          v-model="form.phone"
          mask="+7 (###) ###-##-##"
          placeholder="Контактный телефон"
      />

      <BaseSelect
          v-model="form.placementType"
          placeholder="Тип помещения"
          :options="SELECT_PLACEMENT_OPTIONS"
      />

      <DaDataAddress
          v-model="form.address"
          placeholder="Адрес"
      />

      <BaseInputRange
          v-model="form.placementArea"
          :placeholders="['от', 'до']"
      >
        <template #label>
          Площадь помещения (м<sup>2</sup>)
        </template>
      </BaseInputRange>

      <BaseInputRange
          v-model="form.rentDate"
          placeholder="Дата начала аренды"
          :placeholders="['с', 'по']"
          is-date
      >
        <template #label>
          Дата начала аренды
        </template>
      </BaseInputRange>

      <BaseButton
          type="submit"
          class="BecomeResidentModalForm__Submit"
          @click="onSubmitForm"
          :loading="isLoading"
      >
        Отправить
      </BaseButton>
  </div>
</template>

<style lang="scss">
.BecomeResidentModalForm {
  display: grid;
  gap: 20px;

  &__Submit {
    justify-self: center;
  }
}
</style>