import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "@/components/DeleteForm";

const TaskList = async () => {
    const tasks = await prisma.Task.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    })
    if (tasks.length === 0) {
        return <div>No tasks found.</div>
    }
    return <ul className="mt-8">
        {tasks.map(({id, content, completed}) => (
            <li key={id}
                className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg">
                <h2 className={`text-lg capitalize ${completed ? '' : null}`}>{content}</h2>
                <div className="flex gap-6 items-center">
                    <Link href={`/tasks/${id}`} className='btn btn-accent btn-xs'>
                        Edit
                    </Link>
                    <DeleteForm id={id}/>
                </div>
            </li>
        ))}
    </ul>
}

export default TaskList;