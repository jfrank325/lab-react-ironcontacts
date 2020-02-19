import React from 'react';

const Contacts = props => {
  return props.contacts.map(contact => {
    return (
      <>
        <table>
          <tr>
            <td>
              <img src={contact.pictureUrl} alt="" />
            </td>

            <td>{contact.name}</td>

            <td>{contact.popularity}</td>
          </tr>
        </table>
      </>
    );
  });
};

export default Contacts;
