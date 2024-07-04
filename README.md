# Symfony 7 and Angular Full Stack Product Management Application

## Description

This is a full stack web application built with Symfony 7 and Angular. The application allows you to store, retrieve, edit, and find products in a database using an API.

## Features

- Store products
- Retrieve products
- Edit products
- Delete products
- List all products

## Installation

### Backend (Symfony)

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/symfony-angular-product-app.git
    ```
2. Navigate to the backend directory:
    ```sh
    cd symfony-angular-product-app/backend
    ```
3. Install the dependencies:
    ```sh
    composer install
    ```
4. Set up the database:
    ```sh
    php bin/console doctrine:database:create
    php bin/console doctrine:schema:update --force
    ```
5. Start the Symfony server:
    ```sh
    symfony server:start
    ```

### Frontend (Angular)

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the Angular development server:
    ```sh
    ng serve
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:4200/products` to view the list of products.
2. Use the form to add a new product or edit an existing product.
3. Click the delete button to remove a product from the list.

## API Endpoints

- `GET /api/products`: Retrieve a list of products.
- `GET /api/products/{id}`: Retrieve a specific product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/{id}`: Update an existing product.
- `DELETE /api/products/{id}`: Delete a product.

## Credits

Created by Med Amine Marzouk - enseignant - Ingenieur informatique

## License

This project is licensed under the MIT License.
