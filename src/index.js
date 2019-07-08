import { getUsers, deleteUser } from './api/userApi';
import './index.css';

// Populate table of users via API call
getUsers().then((result) => {
  let usersBody = '';
  result.forEach(({ id, firstName, lastName, email }) => {
    usersBody += `<tr>
      <td><a href="#" data-id="${id}" class="deleteUser">Delete</a></td>
      <td>${id}</td>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${email}</td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassName only creates an "array like" object
  Array.from(deleteLinks, (link) => {
    link.onclick = (event) => {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
