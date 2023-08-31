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
                                        <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900 mb-2">
                                            Advanced Model Installer
                                        </DialogTitle>
                                        <div class="flex w-72 flex-col items-end gap-6">
                                            <div class="relative h-10 w-full min-w-[200px]">
                                                <input
                                                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                    placeholder=" "
                                                    v-model="localModelData.name"
                                                />
                                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                    Name
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 md:flex md:flex-row-reverse md:px-6">
                                <button type="button"
                                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:mt-0 md:w-auto"
                                        @click="installModel" ref="cancelButtonRef">Install
                                </button>
                                <button type="button"
                                        class="mt-3 mr-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:mt-0 md:w-auto"
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
import {reactive, ref} from "vue";
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'

const props = defineProps(['json_data'])
const open = ref(true)

const modelData = reactive(props.json_data);
const localModelData = reactive({name: modelData.name});

async function installModel() {
    console.log(`${modelData.gallery.name}@${modelData.name}`)
    const url = import.meta.env.VITE_API_BASE + "/models/apply";
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                id: `${modelData.gallery.name}@${modelData.name}`,
                name: `${localModelData.name}`
            }
        )
    });
    const data = await response.json();
    console.log(data);
}
</script>

<style>
</style>
