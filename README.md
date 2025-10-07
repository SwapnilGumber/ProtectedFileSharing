# 🔐 Secure File Sharing App

A simple **file sharing web app** built with **Node.js, Express, MongoDB, Multer, and EJS**.  
It allows users to upload files, optionally protect them with a password, and share a unique download link.  
Each file download is tracked, and password-protected files require correct credentials to access.

---

## ✨ Features
- Upload files and generate a **unique shareable link**
- Shareable link: `/file/:id`
- Optional **password protection** (bcrypt hashed)
- Download tracking with a **download counter**
- Download counter persisted in MongoDB
- Secure password hashing with **bcrypt**
- File upload with **Multer** → stored on **Cloudinary**
- Clean frontend using **EJS templates**
- Simple, modern UI (no extra CSS framework)

---

## 📸 Screenshots

### Upload Page
<img width="1919" height="898" alt="image" src="https://github.com/user-attachments/assets/2e6c208f-8a62-4e78-86f7-b46439b8347e" />
<img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/1b2ab8e1-f378-438a-89cf-3fb9d9d8b622" />



### Password Page
<img width="1919" height="906" alt="image" src="https://github.com/user-attachments/assets/8ba86ad9-a0c1-4a7b-b10c-c7bf67cd8f5c" />



---

## ⚙️ Installation

### 1. Clone the repository
  ```bash
  git clone https://github.com/SwapnilGumber/ProtectedFileSharing.git
  cd ProtectedFileSharing
  ```

### 2. Install dependencies
  ```bash
  npm install
  ```

### 3. Set up MongoDB
You can use MongoDB locally (default port 27017) or MongoDB Atlas in the cloud and Cloudinary v2.
Create a .env file in your project root:
  ```bash
  DATABASE_URL=mongodb+srv://<DB_USER>:<ENCODED_PASSWORD>@<CLUSTER_HOST>/?retryWrites=true&w=majority
  PORT=3000
  DB_NAME=db_name
  CLOUDINARY_URL=cloudinary://<API_KEY>:<API_SECRET>@<CLOUD_NAME>
  ```

### 4. Run the server
  ```bash
  npm start
  ```
or with auto start
  ```bash
  npx nodemon server.js
  ```

### 5. Open in browser
  ```bash
  http://localhost:3000
  ```
