const newFormHandler = async (event) => {
    event.preventDefault();

    // collect values that correspond to the post model from the post form
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
    const user_name = document.querySelector("#post-user").value.trim();
    const date_created = document.querySelector("#post-date").value.trim();

    if (title && content && user_name && date_created) {
        const response = await fetch(`/api/posts`, {
            method: "POST",
            body: JSON.stringify({ title, content, user_name, date_created }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        }

        else {
            alert('Failed to create post ' + response.statusText);
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post ' + response.statusText);
        }
    }
};

// document
//     .querySelector('.new-post-form')
//     .addEventListener('submit', newFormHandler);

// document
//     .querySelector('.post-list')
//     .addEventListener('click', delButtonHandler);
