import { Button } from 'react-bootstrap';
import { BsPencilSquare, BsTrash, BsStar } from 'react-icons/bs';
// import user from '../images/user.png';
import { useNavigate } from 'react-router';

const Contact = ({ contact }) => {
  const navigate = useNavigate();

  const viewContact = (event) => {
    navigate('/contact-details');
  };

  return (
    <>
      <td className="text-center">
        {/* <img src={user} alt="contact" size="2px" /> */}
        {contact.name} {contact.lastName}
      </td>
      <td className="text-center">{contact.mobile}</td>
      <td className="text-center">
        <Button size="sm" onClick={viewContact}>
          View Contact
        </Button>

        <BsStar size="25px" />

        <BsPencilSquare size="25px" color="green" />

        <BsTrash size="25px" color="red" />
      </td>
    </>
  );
};

export default Contact;
