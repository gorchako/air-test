<script lang="ts" setup>
import { reactive } from "vue";
import { IBecomeResidentForm } from "@/components/BecomeResidentModal/BecomeResidentModalForm.types";
import BaseInput from "@/components/Base/BaseInput.vue";
import BaseSelect from "@/components/Base/BaseSelect.vue";
import BaseInputRange from "@/components/Base/BaseInputRange.vue";
import { PlacementType, SELECT_PLACEMENT_OPTIONS } from "@/components/BecomeResidentModal/BecomeResidentModalForm.constants";

const form = reactive<IBecomeResidentForm>({
  companyName: '',
  phone: '',
  // placementType: PlacementType.Industrial,
  placementType: [PlacementType.Industrial, PlacementType.Residential],
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
          :multiple="true"
      />

      <BaseInput
          v-model="form.address"
          placeholder="Адрес"
      />

      <BaseInputRange
          v-model="form.placementArea"
          placeholder="Площадь помещения (м2)"
          :labels="['от', 'до']"
      />

      <BaseInputRange
          v-model="form.rentDate"
          placeholder="Дата начала аренды"
          :labels="['с', 'по']"
          is-date
      />
  </div>
</template>

<style lang="scss">
.BecomeResidentModalForm {
  display: grid;
  gap: 20px;
}
</style>