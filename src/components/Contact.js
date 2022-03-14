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
    </>
  );
}
