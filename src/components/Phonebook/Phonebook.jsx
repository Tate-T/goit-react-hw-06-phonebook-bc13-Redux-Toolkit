// import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import s from './Phonebook.module.css';
// import { actionFilter, actionFilterReset } from '../../redux/';

const Phonebook = () => {

    return (
        <div className={s.form}>
            <h1>Phonebook</h1>
            <ContactForm />
            <div className={s.contactsList}>
                <ContactList />
                <Filter />
            </div>
        </div>
    )
}

export default Phonebook;

// const [contacts, setContacts] = useState(initialState);
    // const [filter, setFilter] = useState('');

    // useEffect(() => {
    //     const contacts = localStorage.getItem('contacts');
    //     const parcedContacts = JSON.parse(contacts);
    //     if (parcedContacts) {
    //         setContacts(parcedContacts);
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts))
    // }, [contacts])
