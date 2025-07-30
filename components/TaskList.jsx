import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "@/components/DeleteForm";
import {getAllTasks} from "@/utils/actions";

const TaskList = async () => {

    const tasks = await getAllTasks();

    if (tasks.length === 0) {
        return <div>No tasks found.</div>
    }
    return <ul className="mt-8">
        {tasks.map(({id, content, completed}) => (
            <li key={id}
                className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg">
                <h2 className={`text-lg capitalize ${completed ? 'bg-green-500' : null}`}>{content}</h2>
                <div className="flex gap-6 items-center">
                    <Link href={`/tasks/${id}`} className='btn btn-primary rounded-xs p-1 bg-green-500'>
                        Edit
                    </Link>
                    <DeleteForm id={id}/>
                </div>
            </li>
        ))}
    </ul>
}

export default TaskList;