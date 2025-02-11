import type { ComputedRef, Ref } from 'vue'

// eslint-disable-next-line no-restricted-imports
import { unref } from 'vue'

export function isDefined<T>(v: ComputedRef<T>): v is ComputedRef<Exclude<T, null | undefined>>
export function isDefined<T>(v: Ref<T>): v is Ref<Exclude<T, null | undefined>>
export function isDefined<T>(v: T): v is Exclude<T, null | undefined>
export function isDefined<T>(v: Ref<T>): boolean {
  return unref(v) != null
}
