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
import { validationRules } from "@/components/BecomeResidentModal/BecomeResidentModalForm.validation";
import { useVuelidate } from '@vuelidate/core'

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

const validator = useVuelidate(validationRules, form)

async function onSubmitForm () {
  validator.value.$touch()
  const isValid = !validator.value.$invalid
  if (!isValid) return
  isLoading.value = true
  await callMockApi(3000);
  isLoading.value = false
}
</script>

<template>
  <div class="BecomeResidentModalForm">
      <BaseInput
          v-model="form.companyName"
          :error="validator.companyName.$errors[0]?.$message"
          placeholder="Наименование организации / ИП"
      />

      <BaseInput
          v-model="form.phone"
          :error="validator.phone.$errors[0]?.$message"
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
          :error="validator.address.$errors[0]?.$message"
          placeholder="Адрес"
      />

      <BaseInputRange
          v-model="form.placementArea"
          :placeholders="['от', 'до']"
          :errors="[
              validator.placementArea.from.$errors[0]?.$message,
              validator.placementArea.to.$errors[0]?.$message
          ]"
      >
        <template #label>
          Площадь помещения (м<sup>2</sup>)
        </template>
      </BaseInputRange>

      <BaseInputRange
          v-model="form.rentDate"
          :placeholders="['с', 'по']"
          :errors="[
              validator.rentDate.from.$errors[0]?.$message,
              validator.rentDate.to.$errors[0]?.$message
          ]"
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