# 🔐 Secure File Sharing App

A simple **file sharing web app** built with **Node.js, Express, MongoDB, Multer, and EJS**.  
It allows users to upload files, optionally protect them with a password, and share a unique download link.  
Each file download is tracked, and password-protected files require correct credentials to access.

---

## ✨ Features
- Upload files and generate a **unique shareable link**
- **Optional password protection** for sensitive files
- Download tracking with a **download counter**
- Secure password hashing with **bcrypt**
- File storage handled by **Multer**
- Clean frontend using **EJS templates**

---

## 📸 Screenshots

### Upload Page
<img width="719" height="429" alt="image" src="https://github.com/user-attachments/assets/31eb2734-aa4b-470b-be3b-0a1f421d0548" />
<img width="707" height="442" alt="image" src="https://github.com/user-attachments/assets/6022dcb0-a6fc-42b9-a889-331e3ad16ce1" />
<img width="1334" height="396" alt="image" src="https://github.com/user-attachments/assets/c738a458-5248-458a-80b9-ec85124ce325" />


### Password Page
<img width="694" height="410" alt="image" src="https://github.com/user-attachments/assets/e5a5581f-2704-4231-b370-b83e2bfd0eb2" />


👉 Create a folder named **`screenshots/`** in the project root and add your screenshots there (`upload.png`, `password.png` etc.).  
Update the paths in the README as needed.

---

## ⚙️ Installation

### 1. Clone the repository
  ```bash
  git clone https://github.com/your-username/secure-file-sharing.git
  cd secure-file-sharing
  ```

### 2. Install dependencies
  ```bash
  npm install
  ```

### 3. Set up MongoDB
You can use MongoDB locally (default port 27017) or MongoDB Atlas in the cloud.
Create a .env file in your project root:
  ```bash
  DATABASE_URL=mongodb://localhost:27017/filesharing
  PORT=3000
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
