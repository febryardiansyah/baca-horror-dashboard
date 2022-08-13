import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import PrimaryButton from '../../components/button/PrimaryButton'
import TitleComponent from '../../components/sidebar/TitleComponent'
import authorService from '../../services/authorService'

const NewAuthorPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        toast.loading('Loading')
        try {
            const service = await authorService.createAuthor(data)
            toast.dismiss()
            toast.success(service.message)
        } catch (error) {
            toast.dismiss()
            toast.error(error.message)
        }
    }
    return (
        <div style={{ marginLeft: '250px' }} >
            <TitleComponent title='Tambah author baru' />
            <main className='m-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="url" className="form-label"> Url Cerita </label>
                    <input {...register('url', {
                        required: 'Url tidak boleh kosong', pattern: {
                            value: /^[a-z]+:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/,
                            message: 'Url tidak valid'
                        }
                    })} id='inputUrl' className='form-control' placeholder='Masukan Url' />
                    {errors.url && <span className='text-danger'> {errors.url.message} </span>}
                </form>
                <PrimaryButton className='mt-4' text='Submit' onClick={handleSubmit(onSubmit)} />
            </main>
        </div>
    )
}

export default NewAuthorPage