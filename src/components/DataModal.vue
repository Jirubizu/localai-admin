<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                             leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center md:items-center md:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                                     enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                     enter-to="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200"
                                     leave-from="opacity-100 translate-y-0 md:scale-100"
                                     leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:my-8 block">
                            <div class="bg-white px-4 pb-4 pt-5 md:p-6 md:pb-4">
                                <div class="md:flex md:items-start">
                                    <div class="mt-3 text-center md:ml-4 md:mt-0 md:text-left">
                                        <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                                            Raw Response
                                        </DialogTitle>
                                        <div class="mt-2">
                                            <JsonViewer :value="jsonData" copyable boxed expanded expandDepth="12" theme="jv-light"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 md:flex md:flex-row-reverse md:px-6">
                                <button type="button"
                                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:mt-0 md:w-auto"
                                        @click="open = false" ref="cancelButtonRef">Close
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script setup lang="ts">
import {JsonViewer} from "vue3-json-viewer"
import {reactive, ref} from "vue";
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'

const props = defineProps(['json_data'])
const open = ref(true)

const jsonData = reactive(props.json_data);
</script>

<style>
</style>
