![Demo](path/to/your/demo.gif)

# YouTube Video Display

This project is a simple web application that allows users to search for YouTube videos and display them on the webpage. The application is built using HTML, CSS, and JavaScript, and it utilizes the YouTube Data API to fetch video data.

## Features

- **Search Bar**: Users can enter a search query in the provided input field.
- **Video Display**: The application displays YouTube videos along with their titles.
- **Pagination**: A "Load More" button is available to load additional videos.
- **Responsive Design**: The layout adjusts for different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- YouTube Data API

## How to Use

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Obtain a YouTube Data API Key.

### Obtaining a YouTube Data API Key

To use the YouTube Data API, you need to obtain an API key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project from the top bar.
3. Navigate to the "APIs & Services" -> "Dashboard" section.
4. Click on the "+ ENABLE APIS AND SERVICES" button.
5. Search for "YouTube Data API v3" and enable it.
6. After enabling the API, go to the "Credentials" tab.
7. Click on "Create Credentials" and choose "API Key".
8. Copy the generated API key.
9. Replace `'YOUR_API_KEY'` in the `index.html` & `scrip.js` files with the copied API key.

```html
<script async defer src="https://www.google.com/js/api.js?key=YOUR_API_KEY"></script>
