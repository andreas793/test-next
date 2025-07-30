import {createTask} from "@/utils/actions";

const TaskForm = () => {
    return <form action={createTask}>
        <div className="flex join w-full border">
            <input type="text"
                   className="input input-bordered w-full"
                   placeholder="type here"
                   name='content'
                   required
            />
            <button type="submit" className=" btn btn-primary rounded-xs p-1 bg-blue-500">
                create
            </button>
        </div>
    </form>
}

export default TaskForm;