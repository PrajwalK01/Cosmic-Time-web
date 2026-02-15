# 🌌 Anti-Gravity Developer Portfolio (5th Dimension Edition)

**Live Demo:** [Add your deployed link here]

Welcome to the **5th Dimension**. This is a futuristic, highly interactive developer portfolio built with **Python (Flask)** and **Canvas API**. It features a continuously moving hyper-dimensional background, delayed gravity animations, and dynamic GitHub integration.

## 🚀 Features

- **5th Dimension Theme**:
  - Immersive, rotating 4D wireframe background (HTML5 Canvas).
  - "Hacking" typewriter typography on the home page.
  - Delayed "gravity" animations for navigation cards.
- **Backend**: 
  - Powered by **Flask** (Python).
  - **SQLite Database** to track visitor timestamps.
- **Dynamic Content**:
  - **GitHub API Integration**: Automatically fetches and displays *all* your public repositories on the Projects page.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Neon/Glassmorphism), JavaScript (Canvas API).
- **Backend**: Python 3, Flask, SQLAlchemy.
- **Database**: SQLite (Local), Postgres (Production ready).

## 💻 Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PrajwalK01/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Create a Virtual Environment**
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # Mac/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**
   ```bash
   python app.py
   ```
   Open your browser and navigate to: `http://127.0.0.1:5000`

## 🌍 Deployment

This app is ready for deployment on platforms like **Render**, **Railway**, or **Heroku**.

### Deploy to Render

1. Push your code to GitHub.
2. Create a new **Web Service** on [Render](https://render.com/).
3. Connect your repository.
4. Use the following settings:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
5. Click **Create Web Service**. Your site is now live!

## 📂 Project Structure

```
/
├── app.py              # Main Flask Application
├── requirements.txt    # Python Dependencies
├── Procfile            # Deployment Command
├── static/
│   ├── css/            # Stylesheets
│   └── js/             # Interactive Scripts (Background, Main)
└── templates/          # HTML Templates (Jinja2)
    ├── base.html       # Base Layout
    ├── home.html       # Landing Page
    ├── projects.html   # GitHub API Projects
    └── ...
```

## 📬 Contact

- **GitHub**: [PrajwalK01](https://github.com/PrajwalK01)
- **Portfolio**: [Visit Live Site](https://your-portfolio-link.com)

---
© 2026 Prajwal. Built with Anti-Gravity.