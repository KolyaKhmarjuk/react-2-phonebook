import s from '../components/input.module.css';

const ContactsBook = ({ filteredContacts, deleteContactId }) => {
  return (
    <>
      <ul>
        {filteredContacts.map(contact => (
          <li className={s.contactItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={s.deleteBtn}
              onClick={() => {
                deleteContactId(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsBook;
