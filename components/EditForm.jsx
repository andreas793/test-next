import {editTask} from "@/utils/actions";

const EditForm = ({task}) => {

    const {id, completed, content, } = task;

    return <form action={editTask} className="max-w-sm p-12 border border-base-300 rounded-lg">
        <input type="hidden" name={"id"} value={id}/>
        <input type="text"
               name="content"
               required
               defaultValue={content}
               className="input border bg-blue-500 w-full"
        />
        <div className="form-control mt-2">
            <label htmlFor="completed" className="label cursor-pointer flex">
                <input type="checkbox" defaultChecked={completed} id='completed' name='completed'/>
                <span className="label-text">completed</span>
            </label>
        </div>
        <button type='submit' className="btn btn-primary rounded-xs p-1 bg-blue-500 mb-2">edit</button>
    </form>
}

export default EditForm;