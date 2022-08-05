import React from "react";
import { useSelector } from "react-redux";
import TitleComponent from "../../components/sidebar/TitleComponent";
import "./story.css";

const StoryPage = () => {
  return (
    <div
      style={{
        marginLeft: "250px",
      }}
    >
      <TitleComponent title="Cerita" />
      <div className="m-4">
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Cari cerita.."
          />
        </form>
        <button className="btn btn-dark mt-4">
          <i className="bi bi-pencil-square me-2"></i>
          Tambah Cerita
        </button>
        <div className="card mt-4">
          {
            dummyStory.map((item, index) => (
              <div key={index} className="card-header story-item p-4">
                <div className="d-flex">
                  <div className="col-1">
                    <div>{index + 1}</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-start col-11">
                    <div className="d-flex flex-column">
                      <h4>{item}</h4>
                      <div className="fs-6 fw-light">26 Juni 2022</div>
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
            ))}
        </div>
      </div>
    </div>
  );
};

const dummyStory = [
  "sdlsdlsdlsdls",
  "dsdsdsdsdsdsd",
  "dsdsdsddsds",
  "ddkfkdfkdfkdk",
  "sdkskdksdkskdskd",
  "owoekske",
  'ldsldsldsl',
  'dlsdlsdls',
  'dsdkskdskdks',
];

export default StoryPage;
