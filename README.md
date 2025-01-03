
# User-Story-Line-1-Monolithic-

This is a monolithic application implemented using Node.js and Express.js. The application fulfills multiple user stories for a sales manager, including viewing dashboards, assigning territories, approving discount requests, and generating sales forecasts.

## Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB Atlas account for database configuration

### Installation

1. **Clone the Repository**  

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Initialize the Project**  
   Run the following command to initialize the project:
   ```bash
   npm install
   ```

3. **Set Up MongoDB Atlas Configuration**  
   - Create a `.env` file in the root of the project.
   - Add your MongoDB Atlas URI in the `.env` file:
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
     ```
   - Replace `<username>`, `<password>`, and `<database>` with your MongoDB Atlas credentials.

### Running Locally

Run the application using the following command:
```bash
npm run dev
```

The application will start locally and be available at [http://localhost:8080](http://localhost:8080).
