"use client";

import { FormEvent } from "react"
import { Button } from "~/src/components/form/Bouton"
import { Input } from "~/src/components/form/Input"

export const BoardForm = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const title = String(formData.get('title'))
    }

    return(
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input label="Title" name="title" />
            <Button type="submit">Create board</Button>
        </form>
    )
}