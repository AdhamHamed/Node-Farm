# NodeFarm
 A simple Node.js server that serves product information from a JSON file using HTTP.

## Description
This project implements a basic server using Node.js that reads product data from a JSON file and serves it via different endpoints. The server provides an overview page displaying all products, individual product pages, and a JSON API for data access.

## Features
- Overview Page: Displays a list of products using a custom HTML template.
- Product Page: Renders a detailed view of a single product based on its ID.
- API Endpoint: Provides a JSON response containing all product data.
- 404 Page: Displays a custom error page for unknown routes.

## Technologies Used
- Node.js
- HTTP module
- File System module
- URL module
- Template Replacement
- Slugify for URL-friendly strings

## Setup and Installation
- Clone the repository.
- Navigate to the project directory.
- Install dependencies (if any).
- Run the server using node server.js.
- Access the application at http://localhost:8000.

## Usage
- Navigate to / or /overview for the product overview.
- Access individual products via /product?id=<productId>.
- Retrieve JSON data at /api.
