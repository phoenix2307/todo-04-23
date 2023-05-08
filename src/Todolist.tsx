import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (titleTask: string) => void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const changeHandler = (newTitle: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(newTitle.currentTarget.value)
    }
    const addTaskHandler = () => {
        if (title.trim()) {
            props.addTask(title)
            setTitle('')
        } else {
            setTitle('')
            setError('error')
        }
    }
    const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
            // if (title.trim()) {
            //     props.addTask(title)
            //     setTitle('')
            // } else {
            //     setTitle('')
            //     setError('error')
            // }
        }
    }

    const changeFilterAll = () => {
        props.changeFilter("all")
    }
    const changeFilterActive = () => {
        props.changeFilter("active")
    }
    const changeFilterCompleted = () => {
        props.changeFilter("completed")
    }

    const removeTaskHandlerTwo = (idTask: string) => {
        props.removeTask(idTask)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>

            <input value={title}
                   onChange={changeHandler}
                   onKeyPress={onKeyHandler}
            />

            <button onClick={addTaskHandler}>+</button>
            <Button name={'+2'} callback={addTaskHandler}/>
            {
                error &&
                <span>Error! You forgot title</span>
            }

        </div>
        <ul>
            {
                // props.tasks.map(t => <li key={t.id}>
                //     <input type="checkbox" checked={t.isDone}/>
                //     <span>{t.title}</span>
                //     <button onClick={() => {
                //         props.removeTask(t.id)
                //     }}>x
                //     </button>
                // </li>)

                props.tasks.map(t => {
                    const removeTaskHandler = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            {/*<button onClick={removeTaskHandler}>x*/}
                            {/*</button>*/}
                            {/*<button onClick={()=>removeTaskHandlerTwo(t.id)}>x*/}
                            {/*</button>*/}
                            <Button name={'x1'} callback={removeTaskHandler}/>
                            <Button name={'x2'} callback={() => removeTaskHandlerTwo(t.id)}/>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            {/*<button onClick={changeFilterAll}>*/}
            {/*    All*/}
            {/*</button>*/}
            <Button name={'ALL'} callback={changeFilterAll}/>
            <Button name={'Active'} callback={changeFilterActive}/>
            <Button name={'Completed'} callback={changeFilterCompleted}/>
            {/*<button onClick={changeFilterActive}>*/}
            {/*    Active*/}
            {/*</button>*/}
            {/*<button onClick={changeFilterCompleted}>*/}
            {/*    Completed*/}
            {/*</button>*/}
        </div>
    </div>
}
