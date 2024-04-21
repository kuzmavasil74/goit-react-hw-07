import css from './Contact.module.css'
const Contact = ({ contact, onDeleteContact }) => {
  if (!contact || !contact.favColor) {
    return <div>Loading contact details...</div>
  }
  return (
    <li className={css.contactCart}>
      <ul className={css.contactList}>
        <li className={css.contactListItem}>
          <div
            style={{ backgroundColor: contact.favColor || 'defaultColor' }}
            className={css.color}
          />
          👨‍🦱 {contact.name}
        </li>

        <li className={css.contactListItem}>☎️ {contact.number}</li>
      </ul>
      <button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        className={css.contactListBtn}
        aria-label={`Delete ${contact.name}`}
      >
        {' '}
        ❌ Delete
      </button>
    </li>
  )
}
export default Contact
