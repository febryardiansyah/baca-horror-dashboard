import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import PrimaryButton from '../../components/button/PrimaryButton'
import LoadingPage from '../../components/loading/LoadingPage'
import TitleComponent from '../../components/sidebar/TitleComponent'
import authorService from '../../services/authorService'
import storyService from '../../services/storyService'

const NewStoryPage = () => {
    const [authorData, setAuthorData] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const getAuthor = async () => {
        try {
            const service = await authorService.getAll();
            setAuthorData(service)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getAuthor()
    })

    const onSubmit = async (data) => {
        console.log(data);
        toast.loading('Loading..')
        try {
            const service = await storyService.createNewStory(data.title, data.url, data.author)
            toast.dismiss()
            toast.success(service.message)
        } catch (error) {
            console.log(error);
            toast.dismiss()
            toast.error(error.message)
        }
    }

    if (!authorData) {
        return <LoadingPage />
    }

    return (
        <div
            style={{
                marginLeft: "250px",
            }}
        >
            <TitleComponent title='Tambah cerita baru' />
            <div className='m-4 col-6'>
                <form>
                    {/* title */}
                    <label htmlFor="title" className="form-label"> Judul Cerita </label>
                    <input {...register('title', { required: 'Judul tidak boleh kosong', })} id='inputTitle' className='form-control' placeholder='Masukan judul cerita' />
                    {errors.title && <span className='text-danger'> {errors.title.message} </span>}
                    <br />
                    {/* url */}
                    <label htmlFor="url" className="form-label"> Url </label>
                    <input {...register('url', {
                        required: 'Url tidak boleh kosong', pattern: {
                            value: /^[a-z]+:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/,
                            message: 'Url tidak valid'
                        }
                    })} id='inputUrl' className='form-control' placeholder='Masukan Url' />
                    {errors.url && <span className='text-danger'> {errors.url.message} </span>}
                    <br />
                    {/* author */}
                    <label className="form-label"> Pilih author </label>
                    <select {...register('author', { required: 'Author tidak boleh kosong' })} className="form-select" aria-label="Default select example">
                        <option defaultValue>Open this select menu</option>
                        {
                            authorData.authors.map((item, i) => (
                                <option key={i} value={item.id}> {item.name} </option>
                            ))
                        }
                    </select>
                    {errors.author && <span className='text-danger'>{errors.author.message}</span>}
                    <br />
                    <PrimaryButton className='d-grid mt-4' icon='bi-pencil-square' text='Tambah Cerita' onClick={handleSubmit(onSubmit)} />
                </form>
            </div>
        </div>
    )
}

export default NewStoryPage