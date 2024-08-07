import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact(props) {
  return (
    <>
      <div className="dev--media-container">
        <h2>Contact Dev:</h2>
        <a href="mailto:nikafz980@gmail.com" className="dev--media-link"> <AlternateEmailIcon/> Email</a>
        <a href="https://github.com/NikAfz" className="dev--media-link"> <GitHubIcon/> GitHub</a>
        <a href="https://www.linkedin.com/in/nik-afz-4a0618268/" className="dev--media-link"> <LinkedInIcon/> LinkedIn</a>
      </div>
    </>
  )
};

export default Contact;