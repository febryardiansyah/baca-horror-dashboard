import React from 'react'
import TitleComponent from '../../components/sidebar/TitleComponent'
import './author.css'

const AuthorPage = () => {
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
        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Dibuat</th>
              <th scope="col">Total cerita</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
              dummyUsers.map((item, index) => (
                <tr className='tr-item'>
                  <th scope='row'> {index + 1} </th>
                  <td>
                    <img src={item.img} class="rounded-circle me-2" style={{ height: '32px' }}/>
                    {item.name}
                  </td>
                  <td>{item.createdAt}</td>
                  <td>{item.totalStory}</td>
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

const dummyUsers = [
  {
    name: 'hsdhshd',
    img: 'https://pbs.twimg.com/profile_images/1430463420617302019/65F5oRJU_bigger.jpg',
    createdAt: '22 Juni 2022',
    totalStory: 10
  },
  {
    name: 'hsdhshd',
    img: 'https://pbs.twimg.com/profile_images/1430463420617302019/65F5oRJU_bigger.jpg',
    createdAt: '22 Juni 2022',
    totalStory: 10
  },
  {
    name: 'hsdhshd',
    img: 'https://pbs.twimg.com/profile_images/1430463420617302019/65F5oRJU_bigger.jpg',
    createdAt: '22 Juni 2022',
    totalStory: 10
  },
  {
    name: 'hsdhshd',
    img: 'https://pbs.twimg.com/profile_images/1430463420617302019/65F5oRJU_bigger.jpg',
    createdAt: '22 Juni 2022',
    totalStory: 10
  },
  {
    name: 'hsdhshd',
    img: 'https://pbs.twimg.com/profile_images/1430463420617302019/65F5oRJU_bigger.jpg',
    createdAt: '22 Juni 2022',
    totalStory: 10
  },
  {
    name: 'hsdhshd',
    img: 'https://pbs.twimg.com/profile_images/1430463420617302019/65F5oRJU_bigger.jpg',
    createdAt: '22 Juni 2022',
    totalStory: 10
  },
]

export default AuthorPage