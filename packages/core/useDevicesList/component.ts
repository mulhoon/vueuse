import type { UseDevicesListOptions } from '@vueuse/core'
import { useDevicesList } from '@vueuse/core'
import { defineComponent, reactive } from 'vue'

export const UseDevicesList = /* #__PURE__ */ defineComponent<UseDevicesListOptions>({
  name: 'UseDevicesList',
  props: ['onUpdated', 'requestPermissions', 'constraints'] as unknown as undefined,
  setup(props, { slots }) {
    const data = reactive(useDevicesList(props))

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
