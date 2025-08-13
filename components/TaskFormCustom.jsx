"use client"

import {createTaskCustom} from "@/utils/actions";
import {useFormStatus} from "react-dom";
import {useActionState, useEffect} from "react";
import toast from "react-hot-toast";

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

    const [state, formAction] = useActionState(createTaskCustom, initialState);

    useEffect(()=>{
        if(state.message === "error"){
            toast.error('there was an error');
            return;
        }
        if(state.message){
            toast.success('Task created');
        }
    },[state])

    return <form action={formAction}>
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