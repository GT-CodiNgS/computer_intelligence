# Disaster Tweets Classification

A web application for classifying tweets as either "Disaster" or "Not Disaster" using machine learning.


![image](https://github.com/GT-CodiNgS/computer_intelligence/assets/73925625/a69045cb-11be-42cc-a6bd-d8b8ae129ec7)


## Getting Started

Follow these steps to set up and run the **Disaster Tweets Classification** project on your local machine:

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- **Python** (version 3.6 or higher)
- **Node.js and npm** (for the Angular frontend)
- **Git** (optional but recommended)

### Installation

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/yourusername/Disaster-Tweets-Classification.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd api
    ```

3. **Set up the backend**:

    - *Create a virtual environment (recommended)*:

        ```bash
        python -m venv venv
        source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
        ```

    - *Install Python dependencies*:

        ```bash
        pip install -r requirements.txt
        ```

    - *Train or load your machine learning model*. Provide instructions if needed.

4. **Set up the frontend**:

    - *Navigate to the `Predictor_ui` directory*:

        ```bash
        cd Predictor_ui
        ```

    - *Install Angular CLI globally (if not already installed)*:

        ```bash
        npm install -g @angular/cli
        ```

    - *Install frontend dependencies*:

        ```bash
        npm install
        ```

5. **Configure the application**:

    - *Provide instructions for configuring any environment variables or settings required by your project.*

### Usage

To run the application, follow these steps:

1. **Start the backend server**:

    ```bash
    python app.py
    ```

2. **Start the frontend development server**:

    - From the `frontend` directory:

        ```bash
        ng serve
        ```

3. Access the application in your web browser by navigating to http://localhost:4200.

4. Use the web application to input tweets and classify them as "Disaster" or "Not Disaster."

### Contributing

We welcome contributions to improve the Disaster Tweets Classification project. To contribute:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Make your changes and commit them with clear commit messages.
4. Push your branch to your fork.
5. Submit a pull request to the main repository with a detailed description of your changes.



---
Feel free to reach out if you have any questions or need further assistance with this project.



