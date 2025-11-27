import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfitStore = defineStore('profit', () => {
  // State
  const activeButton = ref<number | null>(null)
  const borderColorIndex = ref(0)
  const customProfit = ref<string>('')

  // 计算器相关状态
  const selectedPercentage = ref<number>(0)
  const inputPrice = ref<string>('')
  const outputPrice = ref<number>(0)

  // 生成 5% 到 100%
  const percentages = Array.from({ length: 20 }, (_, i) => (i + 1) * 5)

  const borderColors = [
    'border-red-500',
    'border-yellow-500',
    'border-blue-500',
    'border-green-500',
  ]

  const textColors = [
    'text-red-700',
    'text-yellow-700',
    'text-blue-700',
    'text-green-700',
  ]

  // Actions
  const handleCustomProfitSubmit = (e: Event) => {
    e.preventDefault()
    const profit = parseFloat(customProfit.value)
    if (!isNaN(profit) && profit >= 0) {
      activeButton.value = profit
      customProfit.value = ''
    }
  }

  const handleButtonClick = (percentage: number) => {
    if (activeButton.value === percentage) {
      // 如果點擊的是已經選中的按鈕，就取消選取
      activeButton.value = null
    } else {
      // 如果點擊的是其他按鈕，就選取它
      activeButton.value = percentage
    }
  }

  const startBorderColorRotation = () => {
    return setInterval(() => {
      borderColorIndex.value = (borderColorIndex.value + 1) % borderColors.length
    }, 3000)
  }

  // 计算器方法
  const setSelectedPercentage = (percentage: number) => {
    selectedPercentage.value = percentage
  }

  const handleCalculate = () => {
    const price = parseFloat(inputPrice.value)
    if (!isNaN(price)) {
      const result = price * (1 + selectedPercentage.value / 100)
      outputPrice.value = result
    }
  }

  const resetCalculator = () => {
    inputPrice.value = ''
    outputPrice.value = 0
  }

  return {
    // State
    activeButton,
    borderColorIndex,
    customProfit,
    percentages,
    borderColors,
    textColors,
    // 计算器状态
    selectedPercentage,
    inputPrice,
    outputPrice,
    // Actions
    handleCustomProfitSubmit,
    handleButtonClick,
    startBorderColorRotation,
    // 计算器方法
    setSelectedPercentage,
    handleCalculate,
    resetCalculator,
  }
})
