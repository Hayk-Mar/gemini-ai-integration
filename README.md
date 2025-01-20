# Project Setup Guide

## Backend Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Application:**
   - To start the server, use:
     ```bash
     npm run start
     ```
   - Alternatively, to use `nodemon` for automatic restarts during development, run:
     ```bash
     npm run nodemon
     ```

3. **Configure Environment Variables:**
   - Update the `.env` file to configure your connection to the MySQL database. Ensure all required variables are correctly set.

4. **Import Database:**
   - Locate the `chat_history.sql` file in the project directory.
   - Import this file into your MySQL database using a tool like phpMyAdmin or the MySQL command-line interface

## Frontend Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Application:**
   ```bash
   npm run dev
   ```

3. **Verify Node Version:**
   - Ensure your Node.js version is compatible. This project has been tested with Node.js version `22.12.0`.

---

With these steps completed, your project should be running successfully! If you encounter any issues, please double-check the configuration and ensure all dependencies are installed correctly.

