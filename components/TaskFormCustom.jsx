"use client"

import {createTaskCustom} from "@/utils/actions";
import {useFormState, useFormStatus} from "react-dom";

const SubmitBtn = () => {

    const { pending } = useFormStatus();

    return (
        <button type="submit" className="btn btn-primary rounded-xs p-1 bg-blue-500" disabled={pending}>
            {pending ? 'please wait...' : 'create'   }
        </button>
    )
}

const initialState = {
    message: null,
}

const TaskFormCustom = () => {

    const [state, formAction] = useFormState(createTaskCustom, initialState);

    return <form action={formAction}>
        {state.message ? <p>{state.message}</p> : null}
        <div className="flex join w-full border">
            <input type="text"
                   className="input input-bordered w-full"
                   placeholder="type here"
                   name='content'
                   required
            />
            <SubmitBtn />
        </div>
    </form>
}

export default TaskFormCustom;