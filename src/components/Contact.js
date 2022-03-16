import { Button } from 'react-bootstrap';
import { BsPencilSquare, BsTrash, BsStar } from 'react-icons/bs';
// import user from '../images/user.png';

const Contact = ({ contact }) => {
  return (
    <>
      <td className="text-center">
        {/* <img src={user} alt="contact" size="2px" /> */}
        {contact.name} {contact.lastName}
      </td>
      <td className="text-center">{contact.mobile}</td>
      <td className="text-center">
        <Button size="sm">View Contact</Button>

        <BsStar size="25px" />

        <BsPencilSquare size="25px" color="green" />

        <BsTrash size="25px" color="red" />
      </td>
    </>
  );
};

export default Contact;
