<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'

interface IOption {
  id: string;
  label: string;
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void
}>()

const props = defineProps<{
  options: IOption[],
  modelValue: string | string[],
  multiple?: boolean,
}>()

const currentState = ref<string[]>([])

const isOptionsVisible = ref(false)

const selectedOptions = computed(() => {
  return currentState.value.map(
      optId => props.options.find(option => option.id === optId)?.label
  ).join(', ')
})

const optionsDropdownClass = computed(() => {
  return ['BaseSelect__Label', {
    'BaseSelect__Label--active': isOptionsVisible.value || currentState.value.length,
  }]
})

function toggleOptionsDropdown () {
  isOptionsVisible.value = !isOptionsVisible.value
}

function closeOptionsDropdown() {
  isOptionsVisible.value = false
}

function onSelect (value: string) {
  if (props.multiple) {
    if (currentState.value.includes(value)) {
      currentState.value.splice(currentState.value.indexOf(value), 1)
    } else {
      currentState.value.push(value)
    }
  } else {
    currentState.value.splice(0, currentState.value.length)
    currentState.value.push(value)
    closeOptionsDropdown()
  }

  const emitValue = currentState.value.length > 1 ? currentState.value : currentState.value[0] || []
  emit('update:modelValue', emitValue)
}

function initState () {
  if (Array.isArray(props.modelValue) && props.modelValue.length > 0) {
    currentState.value = props.modelValue

  } else if (typeof props.modelValue === 'string') {
    currentState.value.push(props.modelValue)
  }
}

onMounted(() => {
  initState()
})
</script>

<template>
  <div class="BaseSelect" v-click-outside-element="closeOptionsDropdown">
    <div class="BaseSelect__Input" @click="toggleOptionsDropdown">
      {{ selectedOptions }}
    </div>

    <span :class="optionsDropdownClass">
      {{ $attrs.placeholder }}
    </span>

    <div class="BaseSelect__Options" v-show="isOptionsVisible">
      <div
          :class="['BaseSelect__Option', {
            'BaseSelect__Option--selected': currentState.includes(option.id),
           }]"
          v-for="option in options"
          :key="option.id"
          @click="onSelect(option.id)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.BaseSelect {
  position: relative;
  display: flex;
  flex-direction: column;
  color: $color-blue;

  $self: &;

  &__Input {
    @include input-field;

    &::placeholder {
      opacity: 0;
    }

    & + #{$self}__Label--active {
      top: 10px;
    }
  }

  &__Label {
    @include input-label;
  }

  &__Options {
    position: absolute;
    width: 100%;
    top: 100%;
    background-color: $color-white;
    border: 2px solid $color-gray;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
    color: $color-blue;
    outline: none;
    overflow: hidden;
    z-index: 1;
  }

  &__Option {
    padding: 8px 20px;

    &:hover {
      background-color: $color-gray;
    }

    &--selected {
      color: $color-white;
      background-color: #3F51B5;

      &:hover {
        background-color: #3949AB;
      }
    }
  }
}
</style>
