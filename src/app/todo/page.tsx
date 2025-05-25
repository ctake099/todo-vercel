import { getTodos, addTodo } from './actions'


type Todo = {
    id: number;
    title: string;
    done: boolean;
    createdAt: Date;
};


export default async function TodoPage() {
    const todos = await getTodos()

    async function create(formData: FormData) {
        'use server'
        const title = formData.get('title') as string
        await addTodo(title)
    }

    return (
        <main className="p-4">
            <h1 className="text-xl font-bold mb-4">📝 Todo List</h1>

            <form action={create} className="flex gap-2 mb-6">
                <input
                    type="text"
                    name="title"
                    placeholder="新しいTodo"
                    className="border px-2 py-1 rounded"
                />
                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
                    追加
                </button>
            </form>

            <ul className="space-y-2">
                {todos.map((todo: Todo) => (
                    <li key={todo.id}>
                        ✅ {todo.title}
                    </li>
                ))}
            </ul>
        </main>
    )
}