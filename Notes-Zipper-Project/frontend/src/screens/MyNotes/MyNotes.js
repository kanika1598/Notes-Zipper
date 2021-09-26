import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MainScreen from '../../components/MainScreen'
import Note from '../../components/Note'

function MyNotes() {

    //function to handle the deletion of a note
    function deleteNoteHandler() {
        if (window.confirm('Are you Sure? Do you want to delete the Note?')) {

        }
    }

    //managing state for all notes
    const [notes, setNotes] = useState([])

    //fetching the notes from the backend
    useEffect(() => {
        async function fetchNotes() {
            const response = await axios.get('/api/notes')
            const data = response.data
            setNotes(data)
        }

        fetchNotes()

    }, [])

    return (
        <MainScreen title="Welcome Back, Kanika Bagri!💙">
            <Link to="/create-note">
                <Button size="md" variant="outline-primary" className="m-2">
                    CREATE NEW NOTE
                </Button>
            </Link>
            {notes.map((note) => {
                return <Note
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    content={note.content}
                    category={note.category}
                    onDelete={deleteNoteHandler}
                />
            })}
        </MainScreen>
    )
}

export default MyNotes