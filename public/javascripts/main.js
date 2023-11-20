const submitBtn = document.getElementById('submit-data');

submitBtn.addEventListener('click', async () => {
    const name = document.getElementById('input-name').value;
    const todo = document.getElementById('input-task').value;
    const response = await fetch('/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, todo })
    });
    const message = await response.text();
    alert(message);
});

const searchBtn = document.getElementById('search');
const searchInput = document.getElementById('search-name');
const userDetails = document.getElementById('user-details');

searchBtn.addEventListener('click', async () => {
    const name = searchInput.value;

    try {
        const response = await fetch(`/user/${name}`);
        const data = await response.json();
        if (response.ok) {
            
            userDetails.innerHTML = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: data })
            }).then(response => response.text());

            
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete User';
            deleteButton.id = 'delete-user';
            userDetails.appendChild(deleteButton);

            
            deleteButton.addEventListener('click', async () => {
                try {
                    const deleteResponse = await fetch(`/user/${name}`, {
                        method: 'DELETE'
                    });
                    const deleteMessage = await deleteResponse.text();
                    console.log(deleteMessage); 
                    userDetails.innerHTML = deleteMessage; 
                } catch (error) {
                    console.error('Error deleting user:', error);
                }
            });
        } else {
            
            userDetails.innerHTML = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: null })
            }).then(response => response.text());
        }

    } catch (error) {
        console.error('Error fetching user:', error);
    }
});







