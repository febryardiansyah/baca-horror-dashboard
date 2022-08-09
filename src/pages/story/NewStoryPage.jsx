import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import PrimaryButton from '../../components/button/PrimaryButton'
import LoadingPage from '../../components/loading/LoadingPage'
import TitleComponent from '../../components/sidebar/TitleComponent'
import authorService from '../../services/authorService'

const NewStoryPage = () => {
    const [authorData, setAuthorData] = useState()
    const [title, setTitle] = useState()
    const [url, setUrl] = useState()
    const [authorId, setAuthorId] = useState(null)

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
                    <label htmlFor="inputTitle" className="form-label"> Judul Cerita </label>
                    <input id='inputTitle' type="text" className='form-control' placeholder='Masukan judul cerita' />
                    <br />
                    {/* url */}
                    <label htmlFor="inputUrl" className="form-label"> Url </label>
                    <input id='inputUrl' type="text" className='form-control' placeholder='Masukan Url' />
                    <br />
                    {/* author */}
                    <span>Pilih author</span>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => {
                        e.preventDefault()
                        setAuthorId(e.target.value)
                    }}>
                        <option selected>Open this select menu</option>
                        {
                            authorData.authors.map((item, i) => (
                                <option key={i} value={item.id}> {item.name} </option>
                            ))
                        }
                    </select>
                    <br />
                    <PrimaryButton className='d-grid mt-4' icon='bi-pencil-square' text='Tambah Cerita' onClick={() => {

                    }} />
                </form>
            </div>
        </div>
    )
}

export default NewStoryPage