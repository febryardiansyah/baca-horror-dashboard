import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import PrimaryButton from '../../components/button/PrimaryButton'
import TitleComponent from '../../components/sidebar/TitleComponent'
import storyService from '../../services/storyService'

const EditStoryPage = () => {
    const { id } = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const fetchStoryById = async () => {
        try {
            const service = await storyService.getStoryById(id)
            reset({
                title: service.story.title,
                img: service.story.img,
            },)
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchStoryById()
    }, [])

    const onSubmit = async (data) => {
        console.log(data);
        toast.loading('Loading..')
        try {
            const service = await storyService.editStoryById(id, data)
            toast.dismiss()
            toast.success(service.message)
        } catch (error) {
            console.log(error);
            toast.dismiss()
            toast.error(error.message)
        }
    }

    return (
        <div
            style={{
                marginLeft: "250px",
            }}
        >
            <TitleComponent title='Edit cerita' />
            <div className='m-4 col-6'>
                <form>
                    {/* title */}
                    <label htmlFor="title" className="form-label"> Judul Cerita </label>
                    <input {...register('title', { required: 'Judul tidak boleh kosong', })} id='inputTitle' className='form-control' placeholder='Masukan judul cerita' />
                    {errors.title && <span className='text-danger'> {errors.title.message} </span>}
                    <br />
                    {/* img */}
                    <label htmlFor="img" className="form-label"> Gambar </label>
                    <input {...register('img', {
                        required: 'Gambar tidak boleh kosong', pattern: {
                            value: /^[a-z]+:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/,
                            message: 'Url tidak valid'
                        }
                    })} id='inputImg' className='form-control' placeholder='Masukan gambar' />
                    {errors.url && <span className='text-danger'> {errors.url.message} </span>}
                    <br />
                    <PrimaryButton className='d-grid mt-4' icon='bi-pencil-square' text='Edit Cerita' onClick={handleSubmit(onSubmit)} />
                </form>
            </div>
        </div>
    )
}

export default EditStoryPage