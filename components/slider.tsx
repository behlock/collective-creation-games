import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

interface SliderProps {
  value: [number]
  min: number
  max: number
  step: number
  onValueChange: (value: [number]) => void
}

const Slider = (props: SliderProps) => {
  return (
    <SliderPrimitive.Root
      value={props.value}
      min={props.min}
      max={props.max}
      step={props.step}
      onValueChange={props.onValueChange}
      aria-label="value"
      className="relative flex h-5 touch-none items-center"
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-white dark:bg-gray-800">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-orange-600 dark:bg-white" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={clsx('block h-5 w-5 rounded-full bg-orange-600 dark:bg-white', 'focus:outline-none')}
      />
    </SliderPrimitive.Root>
  )
}

export default Slider
