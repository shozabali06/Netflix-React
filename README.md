# React Netflix Clone

🚀 **Live Demo**: [Click here to view the live demo](https://netflix-react-three-gray.vercel.app/)

A Netflix-inspired web application built with React that allows users to browse and watch trailers of movies and TV shows. It features user authentication using Firebase and fetches movie/show data from the TMDB API.

## Features

- **User Authentication**: Login and Signup functionality powered by Firebase.
- **Movie & Show Listings**: Displays top-rated, trending, and genre-specific movies and shows from TMDB.
- **Trailer Playback**: Click on a movie/show card to watch its trailer.
- **Responsive Design**: Fully responsive UI for seamless experience across devices.

## Tech Stack

- **Frontend**: React.js, CSS
- **Authentication**: Firebase Authentication
- **API**: TMDB API

## Installation

### Prerequisites
- Node.js and npm installed on your system.
- Firebase project setup with authentication enabled.
- TMDB API key.

### Steps to Run the Project

1. **Clone the repository**
   ```sh
   git clone https://github.com/shozabali06/Netflix-React.git
   cd react-netflix-clone
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```sh
     VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
     VITE_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     VITE_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     VITE_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     VITE_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     VITE_APP_FIREBASE_APP_ID=your_firebase_app_id
     VITE_APP_TMDB_API_KEY=your_tmdb_api_key
     ```
   - Ensure there are **no spaces** around the `=` signs.
   - The `.env` file should be placed at the **root** of the project.
   - Add the `.env` file to `.gitignore` to keep it secure.

4. **Start the development server**
   ```sh
   npm run dev
   ```

5. **Open the app**
   - Visit `http://localhost:5173` in your browser.

## Usage

- **Sign up or log in** to access the content.
- Browse through various movie and TV show categories.
- Click on a movie/show card to view its trailer.

- **Sign up or log in** to access the content.
- Browse through various movie and TV show categories.
- Click on a movie/show card to view its trailer.


## Contributing

Feel free to fork this repository and submit pull requests for improvements.

## License

This project is licensed under the MIT License.

## Support

If you found this project helpful, consider leaving a ⭐ on the repository!

This project is licensed under the MIT License.

