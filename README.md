
# A Modern Contact Form Using EmailJS (Real-Time Email Integration)

**Modern contact form** using **React**, **TailwindCSS**, and **EmailJS** for real-time email functionality. The code and setup instructions can be used to create a professional contact form, ready for deployment.

----------

## Table of Contents

1. [Overview](#Overview)
2.  [Features](#Features)
3.  [Installation and Setup](#Installation-and-setup)
4.  [EmailJS Configuration](#Emailjs-configuration)
5.  [Environment Variables](#Environment-variables)
6.  [Project Structure](#Project-structure)
7.  [Deploying the Project](#Deploying-the-project)
8.  [GitHub Repository](#Github-repository)
9.  [License](#License)

----------

## 1. **Overview**

This project demonstrates how to create a **real-time contact form** with the following features:

-   Email functionality using **EmailJS** (no backend required).
-   Stylish, responsive UI using **React** and **TailwindCSS**.
-   Real-time form validation and submission status.

----------

## 2. **Features**

-   **Real-Time Email Sending**: Send emails directly without server-side code.
-   **Responsive Design**: Fully optimized for desktop and mobile devices.
-   **Toast Notifications**: Feedback for successful or failed submissions.
-   **Modern UI**: Styled with TailwindCSS for a sleek appearance.

----------

## 3. **Installation and Setup**

### Step 1: Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/mahmud-r-farhan/contact-form
cd contact-form

```

### Step 2: Install Dependencies

Install all necessary dependencies:

```bash
npm install

```

----------

## 4. **Set Up EmailJS Account**

### Step 1: **Create an Account**

1.  Go to [EmailJS](https://www.emailjs.com/) and create a free account.
2.  Once logged in, navigate to the **Dashboard**.

### Step 2: **Create an Email Service**

1.  Click on **Email Services** > **Add Email Service**.
2.  Select your email provider (e.g., Gmail, Outlook) and follow the steps to link your email account.

### Step 3: **Create an Email Template**

1.  Go to **Email Templates** and click on **Create New Template**.
2.  Design your template with placeholders (e.g., `{{name}}`, `{{email}}`, `{{message}}`).
3.  Save the template and note down the **Template ID**.

### Step 4: **Get Your API Keys**

1.  Go to **Integration** > **API Keys**.
2.  Copy the **Service ID**, **Template ID**, and **User ID**.


----------

## 5. **Environment Variables**

Create a `.env` file in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id

```

Replace placeholders with the actual IDs from EmailJS.

----------

## 6. **Project Structure**

```
contact-form/
├── src/
│   ├── components/
│	│	├── ContactForm.jsx
│	│	├── Footer.jsx
│	│	├── Header.jsx
│   │   └── RootLayout.jsx
│	├── pages/
│	│	├── ContactPage.jsx
│   │   └── HomePage.jsx│   
│	├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── .env
├── tailwind.config.js
├── package.json
├── postcss.config.js
└── README.md

```

----------


## 7. **Deploying the Project**

### Deployment Options

-   **Vercel**:
    -   Install Vercel CLI: `npm install -g vercel`
    -   Deploy: `vercel`
-   **Netlify**:
    -   Install Netlify CLI: `npm install -g netlify-cli`
    -   Deploy: `netlify deploy`
-   **GitHub Pages**:
    -   Install `vite-plugin-gh-pages`: `npm install vite-plugin-gh-pages`
    -   Configure `vite.config.js` and deploy.

----------

## 8. **GitHub Repository**

### Clone and Customize

Visit the repository: [Modern Contact Form GitHub Repository](https://github.com/mahmud-r-farhan/contact-form.git)

Fork, clone, and customize for your project needs.

----------

## 9. **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.