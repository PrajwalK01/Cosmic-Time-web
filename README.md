# Cosmic Time: From Myth to Spacetime

An educational web application that explores the nature of Time through the lenses of ancient mythology, philosophy, and modern physics. This project visualizes complex concepts like relativity and entropy through interactive graphs and timelines.

## Features

-   **Multi-Disciplinary Approach**: Connects mythological intuition (e.g., Hindu Cosmology, Mayan Calendars) with mathematical refinement (General Relativity).
-   **Interactive Visualizations**:
    -   **Cosmic Scale**: Logarithmic timeline of mythological ages.
    -   **Time Dilation**: Interactive sliders demonstrating velocity and gravitational time dilation ($ \Delta t' = \frac{\Delta t}{\sqrt{1 - v^2/c^2}} $).
    -   **Entropy**: Visualizing the arrow of time.
-   **Historical Timeline**: A comprehensive scroll-animated timeline covering key milestones from Babylonian astronomy to future Mars missions.
-   **Responsive Design**: Modern, glassmorphism-inspired UI that works on all devices.

## Tech Stack

-   **Backend**: Python (Flask)
-   **Frontend**: HTML5, CSS3, JavaScript (Canvas API)
-   **Styling**: Custom CSS with responsive grid layouts and animations.

## Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/PrajwalK01/Cosmic-Time-web.git
    cd Cosmic-Time-web
    ```

2.  **Create a virtual environment (optional but recommended)**:
    ```bash
    python -m venv venv
    # Windows
    venv\Scripts\activate
    # macOS/Linux
    source venv/bin/activate
    ```

3.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

## Usage

1.  **Run the application**:
    ```bash
    python app.py
    ```

2.  **Open your browser**:
    Navigate to `http://127.0.0.1:5000` to start exploring.

## Structure

-   `app.py`: Main Flask application handling routes.
-   `templates/`: HTML templates (Jinja2).
    -   `base.html`: Master layout with navigation.
    -   `index.html`: Landing page.
    -   `cosmology.html`, `relativity.html`, `thermodynamics.html`: Topic-specific pages.
    -   `timeline.html`: Historical timeline.
-   `static/`: CSS and JavaScript assets.
    -   `css/style.css`: Main stylesheet.
    -   `js/script.js`: Interactive logic and animations.

## License

This project is open-source and available under the MIT License.
