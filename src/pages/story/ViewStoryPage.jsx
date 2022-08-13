import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import storyService from '../../services/storyService'

const ViewStoryPage = () => {
    const [story, setStory] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    const fetchStoryById = async () => {
        try {
            const service = await storyService.getStoryById(id)
            setStory(service.story)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchStoryById()
    }, [])

    if (!story) {
        return <center>Loading...</center>
    }

    return (
        <div style={{ marginLeft: '250px' }} className='mt-5 text-center'>
            <div className="container">
                <div className="text-start mb-5">
                    <button className='btn btn-dark' onClick={() => {
                        navigate(-1)
                    }}>
                        Kembali
                    </button>
                </div>
                <img className='img-fluid img-thubmnail rounded' src={story.img} alt="" width='350px' height='300px' />
                <h4 className='mt-4'>{story.title}</h4>
                <p className='mt-4'>{story.synopsis}</p>
                <div className="mt-4">
                    <p><b>Sumber: </b>{story.source}</p>
                    <p><b>Url: </b>{story.url}</p>
                    <p><b>Total like: </b>{story.total_likes}</p>
                    <p><b>Dibuat: </b>{story.created_at}</p>
                    <p><b>Author: </b>{story.author.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewStoryPage