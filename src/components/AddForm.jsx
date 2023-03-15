import s from '../components/input.module.css';

const AddForm = ({ hendelChange, hendelSubmit }) => {
  return (
    <>
      <form onSubmit={hendelSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={hendelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.input}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={hendelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={s.input}
          />
        </label>
        <button className={s.buttonAdd} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default AddForm;
