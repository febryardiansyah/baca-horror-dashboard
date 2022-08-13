import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../../components/button/PrimaryButton";
import LoadingPage from "../../components/loading/LoadingPage";
import TitleComponent from "../../components/sidebar/TitleComponent";
import formatTime from "../../helpers/formatTime";
import storyService from "../../services/storyService";
import "./story.css";

const StoryPage = () => {
  const { page } = useParams()
  const pageNumber = page !== undefined ? parseInt(page) : 1;
  const hasPrevious = pageNumber > 1
  const navigate = useNavigate()

  const [storyData, setStoryData] = useState({
    data: null,
  })
  const [keyword, setKeyword] = useState()
  const [currentPage, setCurrentPage] = useState(page)

  const fetchAllStory = async () => {
    try {
      setCurrentPage(pageNumber)
      const service = await storyService.getAllStory(pageNumber, keyword)
      setStoryData({
        data: service
      })
    } catch (error) {
      console.log(`ERR => ${error.message}`);
      toast.error(error.message)
    }
  }

  const onDeleteById = async (id) => {
    toast.loading('Loading..')
    try {
      const service = await storyService.deleteStoryById(id)
      toast.dismiss()
      toast.success(service.message)
      fetchAllStory()
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllStory()
  }, [pageNumber])

  if (!storyData.data) {
    return <LoadingPage />
  }

  return (
    <div
      style={{
        marginLeft: "250px",
      }}
    >
      <TitleComponent title="Cerita" />

      {/* main */}
      <div className="m-4">
        <form onSubmit={(e) => {
          navigate('../page/1')
          e.preventDefault()
          fetchAllStory()
        }}>
          <input
            className="form-control"
            type="text"
            placeholder="Cari cerita.."
            onChange={(e) => {
              e.preventDefault()
              setKeyword(e.target.value)
            }}
          />
        </form>
        <div className="d-flex flex-row align-items-center justify-content-between mt-4">
          <PrimaryButton icon='bi-pencil-square' text='Tambah Cerita' onClick={() => {
            navigate('../new')
          }} />
          <div className="">
            Halaman: {storyData.data.current_page} / {storyData.data.total_pages}
          </div>
        </div>
        <div className="card mt-4">
          {
            storyData.data.list.length === 0 ?
              <div className="m-4 text-center">
                Hasil tidak ditemukan
              </div> :
              storyData.data.list.map((item, index) => (
                <div key={index} className="card-header story-item p-4">
                  <div className="d-flex">
                    <div className="col-1">
                      <div>{index + 1}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-start col-11">
                      <div className="d-flex flex-column">
                        <h4> {item.title}</h4>
                        <div className="fs-6 fw-light">ID: {item.id} </div>
                        <div className="fs-6 fw-light">Dibuat:  {formatTime(item.created_at)} </div>
                        <div className="fs-6 fw-light"> Cerita oleh: {item.author.name} </div>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-light btn-outline-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-three-dots"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" onClick={() => {
                              navigate(`../edit/${item.id}`)
                            }}> <i className="bi bi-pencil"></i> Edit </a>
                          </li>
                          <li>
                            <a className="dropdown-item" onClick={() => {
                              navigate(`../view/${item.id}`)
                            }}> <i className="bi bi-eye"></i> Lihat </a>
                          </li>
                          <hr />
                          <li>
                            <a className="dropdown-item text-danger" onClick={(e) => {
                              e.preventDefault()
                              onDeleteById(item.id)
                            }}> <i className="bi bi-trash"></i> Hapus </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          }
        </div>

        {/* pagination */}
        <nav className="mt-3" aria-label="...">
          <ul className="pagination justify-content-between">
            <li className={`page-item ${!hasPrevious ? 'disabled' : ''}`}>
              <Link className="page-link" to={`../page/${currentPage - 1}`} replace>
                Sebelumnya
              </Link>
            </li>
            <li className={`page-item ${storyData.data.current_page === storyData.data.total_pages ? 'disabled' : ''}`}>
              <Link className="page-link" to={`../page/${currentPage + 1}`} replace >
                Berikutnya
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default StoryPage;
