<script setup lang="ts">
interface ButtonProps {
  onClick: () => void
  isActive: boolean
}

defineProps<ButtonProps>()
</script>

<template>
  <button
    @click.stop="onClick"
    :class="[
      'rounded-lg bg-gray-200 py-3 px-6 font-sans text-xl font-bold text-black shadow-md transition-shadow ease-in-out duration-500 hover:shadow-lg hover:shadow-yellow-500 focus:shadow-xl focus:shadow-yellow-500 cursor-pointer',
      isActive ? 'ring-4 ring-blue-500' : 'focus:shadow-none'
    ]"
  >
    <slot />
  </button>
</template>
