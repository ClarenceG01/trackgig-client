# 🚀 TrackGigs

**TrackGigs** is a web app for freelancers to manage gigs, clients, deadlines, and payments — all in one place.

---

## ✨ MVP Features

- ✅ User registration & login (with email verification)
- ✅ Add & manage freelance gigs
- ✅ Track client details
- ✅ Update payment status
- ✅ Simple dashboard for overview

---

## 🛠 Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/), Tailwind CSS 4
- **Database**: MongoDB with Mongoose
- **Other Tools**: Nodemailer (for email configuration)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/clarenceG01/trackgigs-client.git
cd trackgigs-client
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Create .env.local
Create a .env.local file in the root of your project and add:
```bash
MONGODB_URI=your_mongo_connection_string
```
<!--EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
BASE_URL=http://localhost:3000
JWT_SECRET=your_secret_key -->

### 4. Run the Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to see the app.

### 📁 Project Structure
```bash
/trackgigs
  /public           # Static assets and images
  /src
      /app              # App routing (Next.js 14+)
      /components       # Reusable UI components
      /lib              # DB connection, utils
      /models           # Mongoose models
      /api              # Route handlers (server functions)
      /utils            # Helpers and config
  .env.local          # Environment variables
```
### 🧑‍💻 Author
Clarence Gatama Chege


[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/clarenceG01)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/clarencegatamachege/)
