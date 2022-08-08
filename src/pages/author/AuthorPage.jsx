import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import PrimaryButton from '../../components/button/PrimaryButton'
import LoadingPage from '../../components/loading/LoadingPage'
import TitleComponent from '../../components/sidebar/TitleComponent'
import formatTime from '../../helpers/formatTime'
import authorService from '../../services/authorService'
import './author.css'

const AuthorPage = () => {
  const [data, setData] = useState()

  useEffect(() => {
    authorService.getAll()
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        toast.error(err)
      })
  }, [])

  if (!data) {
    return <LoadingPage />
  }

  return (
    <div style={{
      marginLeft: '250px'
    }}>
      <TitleComponent title="Author" />
      <div className="m-4">
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Cari author.."
          />
        </form>
        <PrimaryButton className='mt-4' text='Tambah author' icon='bi-pencil-square' />
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Nama</th>
              <th scope="col">Dibuat</th>
              <th scope="col">Total cerita</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
              data.authors.map((item, index) => (
                <tr key={index} className='tr-item'>
                  <th scope='row'> {index + 1} </th>
                  <td>
                    <img src={item.img} className="rounded-circle me-2" style={{ height: '32px' }} />
                    {item.name}
                  </td>
                  <td> {formatTime(item.created_at)} </td>
                  <td> {item.total_stories} </td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-light btn-outline-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#"> <i className="bi bi-pencil"></i> Edit </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#"> <i className="bi bi-eye"></i> Lihat </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown-item text-danger" href="#"> <i className="bi bi-trash"></i> Hapus </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AuthorPage