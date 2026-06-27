// import React component and states
import React from 'react'
import { useEffect, useRef, useState } from "react"

// import component
import { useTodo } from "../../context/useTodo"
import { type Todo } from "../../context/TodoContext"

// import input
import { Input } from "../Input"

// import library
import cn from 'classnames'

import { motion } from "framer-motion"
import { toast } from "react-hot-toast"

// import react-icons comp
import { BsCheck2Square } from 'react-icons/bs'
import { TbRefresh } from 'react-icons/tb'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin7Line } from 'react-icons/ri'

export const TodoItem : React.FC<{ todo : Todo }> = (props: { todo: Todo }) => {
    const { todo } = props

    // States creation 
    const [editingTodoText, setEditingTodoText] = useState<string>('')
    const [editingTodoId, setEditingTodoId] = useState<string | null>(null)

    const { deleteTodo, editTodo, updateTodoStatus } = useTodo()

    const editInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(editingTodoId !== null && editInputRef.current) {
            editInputRef.current.focus()
        }
    }, [editingTodoId])

    const handleEdit = (todoId: string, todoText: string) => {
        setEditingTodoId(todoId)
        setEditingTodoText(todoText)

        if(editInputRef.current) {
            editInputRef.current.focus()
        }
    }

    // Function that handle content updating case
    const handleUpdate = (todoId: string) => {
        if(editingTodoText.trim() !== '') { // Check if the content is NOT empty, trim all spaces + compare with ''
            editTodo(todoId, editingTodoText) 
            setEditingTodoId(null)
            setEditingTodoText('')
            toast.success('todo updated successfully')
        } else {
            toast.error('todo field cannot be empty')
        }
    }

    // Function that handle delete case
    const handleDelete = (todoId : string) => {
        deleteTodo(todoId)
        toast.success('Todo deleted successfully')
    }

    // Function that handle status updating case
    const handleStatusUpdate = (todoId : string) => {
        updateTodoStatus(todoId)
        toast.success('Todo status updated successfully')
    }

    return (
        <motion.li
            layout
            key={todo.id}
            className={cn('p-5 rounded-xl bg-zinc-900', todo.status === 'completed' && 'bg-opacity-50 text-zinc-500')}
        >
            {
                editingTodoId === todo.id ? (
                    <motion.div layout className='flex gap-2'>
                        <Input
                            ref={editInputRef}
                            onChange={e => setEditingTodoText(e.target.value)}
                        />
                        <button
                            className=""
                            onClick={() => handleUpdate(todo.id)}
                        >
                            Update
                        </button>
                    </motion.div>
                ) : (
                    <div className="flex flex-col gap-5">
                        <motion.span
                            layout
                            style={{textDecoration: todo.status === 'completed' ? 'line-through' : 'none'}}
                        >
                            {todo.text}
                        </motion.span>
                        <div className="flex justify-between gap-5 text-white">
                            <button onClick={() => handleStatusUpdate(todo.id)}>
                                {
                                    todo.status === 'undone' ? (
                                        <span className="flex items-center gap-1">
                                            <BsCheck2Square />
                                            Mark Completed
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1">
                                            <TbRefresh />
                                            Mark Undone
                                        </span>
                                    )
                                }
                            </button>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleEdit(todo.id, todo.text)}
                                    className="flex items-center gap-1"
                                >
                                    <FaRegEdit />
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(todo.id)}
                                    className="flex items-center gap-1 text-red-500"
                                >
                                    <RiDeleteBin7Line />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </motion.li>
    )
}

