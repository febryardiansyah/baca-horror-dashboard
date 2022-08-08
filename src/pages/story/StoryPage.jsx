import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TitleComponent from "../../components/sidebar/TitleComponent";
import formatTime from "../../helpers/formatTime";
import storyService from "../../services/storyService";
import "./story.css";

const StoryPage = () => {
  const { page } = useParams()
  const pageNumber = page !== undefined ? parseInt(page) : 1;
  const hasPrevious = pageNumber > 1

  const [storyData, setStoryData] = useState({
    data: null,
  })

  const [currentPage, setCurrentPage] = useState(page)


  const fetchData = async () => {
    console.log(`page from useParams ====>${pageNumber}`);
    try {
      setCurrentPage(pageNumber)
      const service = await storyService.getAllStory(pageNumber)
      setStoryData({
        data: service
      })
    } catch (error) {
      console.log(error);
      toast.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [pageNumber])

  if (!storyData.data) {
    return <center style={{
      marginLeft: "250px",
    }}>Loading..</center>
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
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Cari cerita.."
          />
        </form>
        <div className="d-flex flex-row align-items-center justify-content-between mt-4">
          <button className="btn btn-dark">
            <i className="bi bi-pencil-square me-2"></i>
            Tambah Cerita
          </button>
          <div className="">
            Halaman: {storyData.data.current_page} / {storyData.data.total_pages}
          </div>
        </div>
        <div className="card mt-4">
          {storyData.data.list.map((item, index) => (
            <div key={index} className="card-header story-item p-4">
              <div className="d-flex">
                <div className="col-1">
                  <div>{index + 1}</div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-start col-11">
                  <div className="d-flex flex-column">
                    <h4> {item.title} </h4>
                    <div className="fs-6 fw-light"> {formatTime(item.created_at)} </div>
                  </div>
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
              <Link className="page-link" to={`page/${currentPage - 1}`}>
                Sebelumnya
              </Link>
            </li>
            <li className={`page-item ${storyData.data.current_page === storyData.data.total_pages ? 'disabled' : ''}`}>
              <Link className="page-link" to={`page/${currentPage + 1}`} >
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
