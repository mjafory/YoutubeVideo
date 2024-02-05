		let nextPageToken = '';
		const videosPerPage = 9;

		// Function to fetch YouTube videos
		function fetchYouTubeVideos(apiKey, searchTerm, pageToken = null) {
			const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${videosPerPage}&q=${searchTerm}&type=video&key=${apiKey}&pageToken=${pageToken || ''}`;

			fetch(url)
				.then(response => response.json())
				.then(data => {
					displayVideos(data.items);
					nextPageToken = data.nextPageToken || '';
					updatePagination();
				})
				.catch(error => console.error('Error fetching videos:', error));
		}

		// Function to display YouTube videos on the webpage
		function displayVideos(videos) {
			const videoContainer = document.getElementById('video-container');
			videoContainer.innerHTML = ''; // Clear existing content

			videos.forEach(video => {
				const videoId = video.id.videoId;
				const title = video.snippet.title;

				const videoElement = document.createElement('div');
				videoElement.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    <h2 class="title">${title}</h2>
                `;

				videoContainer.appendChild(videoElement);
			});
		}

		// Function to handle the search button click
		function searchYouTube() {
			nextPageToken = '';
			const searchTerm = document.getElementById('search-input').value;
			const apiKey = 'AIzaSyCaV_YECHs9l4-7JIv6NtcpuACJU0fFFdQ'; // Replace with your actual API key
			fetchYouTubeVideos(apiKey, searchTerm);
			document.getElementById('pagination').style.display="block";
		}

		// Function to load more videos
		function loadMoreVideos() {
			const searchTerm = document.getElementById('search-input').value;
			const apiKey = 'AIzaSyCaV_YECHs9l4-7JIv6NtcpuACJU0fFFdQ'; // Replace with your actual API key
			fetchYouTubeVideos(apiKey, searchTerm, nextPageToken);
		}

		// Function to update the pagination UI
		function updatePagination() {
			const paginationContainer = document.getElementById('pagination');
			paginationContainer.style.display = nextPageToken ? 'flex' : 'none';
		}
