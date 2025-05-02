
const Loading = () => {
  return (
    <div  className="position-fixed z-3 top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-white fs-1">
        <i className="fa-solid fa-spinner fa-spin text-danger"></i>
        <span className="ms-2 fa-fade">Loading...</span>
    </div>
  ) 
}

export default Loading
