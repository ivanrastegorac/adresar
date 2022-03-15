import { Button } from 'react-bootstrap';
import { BsPencilSquare, BsTrash, BsStar } from 'react-icons/bs';

export default function Contact({ contact }) {
  return (
    <>
      <td>
        {contact.name} {contact.lastName}
      </td>
      {/* <td>{contact.lastName}</td> */}
      {/* <td>{contact.dateOfBirth}</td> */}
      <td>{contact.mobile}</td>
      {/* <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>{contact.pager}</td> */}
      <td>
        <Button size="sm">View Contact</Button>

        <BsStar size="25px" />

        <BsPencilSquare size="25px" color="green" />

        <BsTrash size="25px" color="red" />
      </td>
    </>
  );
}
