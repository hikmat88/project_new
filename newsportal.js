const newsSection = document.querySelector('.news');

// Example news data
const newsData = [
    { title: 'Breaking News 1', category: 'Politics' },
    { title: 'Tech Advancements', category: 'Technology' },
    { title: 'Sports Update', category: 'Sports' },
    // Add more news articles here
];

// Populate news articles
newsData.forEach(article => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.category}</p>
    `;
    newsSection.appendChild(newsItem);
});
