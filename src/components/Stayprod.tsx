import Spimg from "../images/illustration-stay-productive.png";

const Stayprod = () => {
  return (
    <div className="container">
        <div className="row py-5">
            <div className="col-md-6">
                <img src={Spimg} alt="" />
            </div>
            <div className="col-md-6">
                <h4>Stay productive, wherever you are</h4>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <a href="/">See how Fylo works</a>
            </div>
        </div>
    </div>
  )
}

export default Stayprod