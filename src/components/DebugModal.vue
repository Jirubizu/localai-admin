<template>
    <div>
        <!-- isOpen is reactive and taken from the store, define if it is rendered or not -->
        <div v-if="isOpen" class="modal modal-open">
            <div class="modal-box relative">
                <!-- @click handles the event to close the modal calling the action directly in store -->
                <label
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                    @click="modal.close()"
                >✕</label>

                <!-- dynamic components, using model to share values payload -->
                <component :is="view" v-model="model"></component>

                <!--          <div class="modal-action">-->
                <!--            &lt;!&ndash; render all actions and pass the model payload as parameter &ndash;&gt;-->
                <!--            <button-->
                <!--              v-for="action in actions"-->
                <!--              class="btn"-->
                <!--              @click="action.callback(model)"-->
                <!--            >-->
                <!--              {{ action.label }}-->
                <!--            </button>-->
                <!--          </div>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";
import {storeToRefs} from "pinia";
import {useModal} from "../store/modal.ts";
import {JsonViewer} from 'vue3-json-viewer';

const modal = useModal();

// reactive container to save the payload returned by the mounted view
const model = reactive({});

// convert all state properties to reactive references to be used on view
const {isOpen, view, actions} = storeToRefs(modal);

defineExpose({model})
</script>
  