export default function taskReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks, {
                    id: action.id,
                    text: action.text,
                    done: false,
                }
            ]
        }
        case 'change': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task
                }
                return t
            })
        }
        case 'delete': {
            return tasks.filter(task => task.id !== action.id)
        }



        default: {
            throw Error(`No action matched with ${action.type}`)
        }

    }
}