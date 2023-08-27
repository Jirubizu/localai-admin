import DebugModal from '../components/DataModal.vue'
import { createConfirmDialog } from 'vuejs-confirm-dialog'

const useConfirmBeforeAction = (props) => {
    const { reveal, onConfirm } = createConfirmDialog(DebugModal, props)

    reveal()
}

export default useConfirmBeforeAction