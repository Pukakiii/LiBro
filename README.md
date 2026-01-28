LiBro – Simple Book Catalogue

A lightweight **vanilla JavaScript** application built with **Vite** that allows users to browse, search, and manage a simple book catalogue, including a favorites feature.

---

##  Task

https://drive.google.com/file/d/1swszcMU9rF_-zRJaA2VchPuU_d7yrAbs/view?pli=1

---

## How to run the app

### Requirements
- **Node.js** (version 16 or higher recommended)
- **npm** (comes with Node.js)

### Installation & running

1. Clone the repository:
   ```bash
   git clone https://github.com/Pukakiii/LiBro.git
   cd libro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. build the app:
   ```bash
   npm run build
   ```

4. Run the app:
   ```bash
   npm run preview
   ```

5. open in browser:
   ```bash
   http://localhost:5173
   ```

---

## 📁 Folder structure

```text
LiBro/
├── node_modules/        
├── src/
│   ├── components/    # UI components (book cards, favorite cards)
│   ├── features/      # Application logic (API handling, search, favorites)
│   ├── styles/        # CSS styling files(imported to style.css)
│   ├── main.js        # Application entry point
│   ├── utils.js       # Helper and utility functions
│   └── style.css      # Global styles 
├── index.html         # Main HTML file
├── package.json           
├── package-lock.json      
├── .gitignore            
└── README.md              # Project documentation
```

### Folder details

- **components/**  
  Contains UI-related JavaScript files such as book cards and favorite book components.

- **features/**  
  Contains feature-specific logic:
  - API communication
  - Search functionality
  - Favorites management

- **styles/**  
  Stores styling files related to layout and UI appearance.

- **utils.js**  
  Reusable helper functions shared across the application.

- **main.js**  
  Entry point where the app is initialized and main logic is connected.

---


