import React from 'react';

const Contacts = props => {
  return props.contacts.map(contact => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          </thead>
        </table>
      </>
    );
  });
};

export default Contacts;
