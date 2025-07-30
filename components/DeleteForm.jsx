import {deleteTask} from "@/utils/actions";


const DeleteForm = ({id}) => {
    return <form action={deleteTask}>
        <input type="hidden" name='id' value={id} />
        <button className='btn btn-primary rounded-xs p-1 bg-red-500'>delete</button>
    </form>
}

export default DeleteForm;