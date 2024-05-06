const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Local database
const posts = [
    {
        "id": 1,
        "title": "First Post",
        "content": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "date": "April 1, 2024",
        "image": "article_image.png"
    },
    {
        "id": 2,
        "title": "Second Post",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "date": "April 3, 2024",
        "image": "article_image.png"
    },
    {
        "id": 3,
        "title": "Third Post",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "date": "April 4, 2024",
        "image": "article_image.png"
    },
    {
        "id": 4,
        "title": "Post Four",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "date": "April 10, 2024",
        "image": "article_image.png"
    }
];

// GET all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET a post by ID
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);

    if (!post) {
        res.status(404).send('Post not found');
    } else {
        res.status(200).json(post);
    }
});

// POST a new post
app.post('/posts', (req, res) => {
    const postTitle = req.body.title;
    const postContent = req.body.content;
    const postDate = req.body.date;
    const postImage = req.body.image;

    if (postTitle && postContent && postDate && postImage){
        const nextId = posts.reduce((max, post) => Math.max(max, post.id), 0) + 1;
        const newPost = {
            id: nextId,
            title: postTitle,
            content: postContent,
            date: postDate,
            image: postImage
        };

        posts.push(newPost);
        res.status(201).json(newPost);
    } else {
        res.status(400).send("Invalid post format")
    }
});

// PUT (update) an existing post
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postTitle = req.body.title;
    const postContent = req.body.content;
    const postDate = req.body.date;
    const postImage = req.body.image;

    const index = posts.findIndex(post => post.id === postId);

    if (index !== -1) {
        if (postTitle) posts[index].title = postTitle;
        if (postContent) posts[index].content = postContent;
        if (postDate) posts[index].date = postDate;
        if (postImage) posts[index].image = postImage;

        res.status(200).json(posts[index]);
    } else {
        res.status(404).send('Post not found');
    }
});

// DELETE a post by ID
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const index = posts.findIndex(post => post.id === postId);

    if (index !== -1) {
        const deletedPost = posts.splice(index, 1);
        res.status(200).json(deletedPost[0]);
    } else {
        res.status(404).send('Post not found');
    }
});

// Filter posts by title or date
app.get('/filter', (req, res) => {
    const titleQuery = req.query.title;
    const dateQuery = req.query.date;

    if (titleQuery && dateQuery) {
        return res.status(400).send('Only one filter parameter (title or date) is allowed');
    }

    let filteredPosts = [];
    if (titleQuery) {
        filteredPosts = posts.filter(post => post.title.toLowerCase().includes(titleQuery.toLowerCase()));
    } else if (dateQuery) {
        filteredPosts = posts.filter(post => post.date.toLowerCase() === dateQuery.toLowerCase());
    } else {
        return res.status(400).send('Please provide either title or date parameter for filtering');
    }

    res.json(filteredPosts);
});


const PORT = 3000;

// Server launch
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
