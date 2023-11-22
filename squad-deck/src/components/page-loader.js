
const PageLoader = () => {
  const loadingImg = "https://samherbert.net/svg-loaders/svg-loaders/oval.svg";

  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." className="loader-spinner"/>
    </div>
  )
}

export default PageLoader
