# Backend Project

This project is a backend application built using Go. It utilizes the Chi router for handling HTTP requests and PostgreSQL for data storage. The application is designed to manage authentication-related functionalities.

## Project Structure

```
Backend
├── controllers
│   └── auth_controller.go
├── routes
│   └── auth_routes.go
├── utils
│   └── db.go
├── go.mod
├── go.sum
├── main.go
└── README.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Backend
   ```

2. **Install Dependencies**
   Ensure you have Go installed on your machine. Run the following command to install the required dependencies:
   ```bash
   go mod tidy
   ```

3. **Create a `.env` File**
   Create a `.env` file in the root directory of the project and add your PostgreSQL database connection details:
   ```properties
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   ```

4. **Run the Application**
   Use the following command to start the application:
   ```bash
   go run main.go
   ```

5. **Access the API**
   The application will be running on `http://localhost:8080`. You can access the authentication routes as defined in the `auth_routes.go` file.

## Usage

The application provides endpoints for user authentication, including login and registration. Refer to the `auth_routes.go` file for specific route details and request formats.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.