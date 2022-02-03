export default function Contact({ contact }) {
  return (
    <>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.lastName}</td>
      <td>{contact.mobile}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>{contact.pager}</td>
    </>
  );
}
