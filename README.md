# 🛠️ Client Portal – Support Ticketing System

A modern, dynamic support ticketing system built with **Next.js**, **TypeScript**, **React Hook Form**, and **Yup**. This system supports multiple ticket categories (software, hardware, network, other), each with its own dynamic form fields and validation logic.

---

## 📦 Features

- ✍️ **Dynamic Ticket Forms**: Each ticket category displays unique input fields.
- ✅ **Schema-based Validation**: Using `Yup` with `react-hook-form` to enforce strict validation rules per ticket type.
- ⚛️ **TypeScript Integration**: Strong typing for props, states, and form data.
- 🌐 **Modular & Scalable Architecture**: Clean folder structure for easy scaling and maintenance.
- 🎯 **Future Ready**: Easy to expand with authentication, database, file uploads, notifications, etc.

---

## 🗂️ Folder Structure

src/
│

├── app/

│ └── page.tsx # Main ticket form page

│
├── components/

│ ├── TicketForm.tsx # Core form handler

│ ├── TicketTypeFields.tsx # Renders dynamic fields per ticket type
│
├── constants/

│ └── formSchemas.ts # Yup validation schemas for each ticket type

│
├── types/

│ └── ticketTypes.ts # Type definitions for ticket forms
│
└── styles/

└── globals.css # Global styling

----
## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ticket-system.git
cd ticket-system
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the development server
``` bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 to view the app.
---
### 🧪 Ticket Form Logic

The ticket form is dynamic:

- When a user selects a ticket type (e.g., Software, Hardware),

- Specific input fields appear (like OS version, serial number, etc.),

- Yup schema validation adjusts automatically,

- The form blocks submission unless required fields are filled.
---
### 🛠️ Tech Stack

  - Framework: Next.js 14

  - Language: TypeScript

  - Forms: react-hook-form

  - Validation: Yup

  - Styling: Tailwind CSS (optional - not added yet)

  - State Management: (Planned: Context API / Zustand)

  - Deployment: (Planned: Vercel)
---
### 📅 July 15 Development Highlights

  ✅ Initialized fresh Next.js + TS app.

  ✅ Installed and configured react-hook-form + yup.

  ✅ Created dynamic form rendering for multiple ticket types.

  ✅ Implemented schema switching based on selected ticket.

  ✅ Tested dynamic validation – works perfectly.

  ✅ Identified and fixed broken layout issues.

  ✅ Structured components and types for scalability.
----
### 🔧 To-Do (Next Steps)

 - Add persistent ticket storage (e.g., Firebase or PostgreSQL)

 - Integrate user authentication

 - Add toast notifications (e.g., react-toastify)

 - Style with Tailwind CSS or MUI

 - Add file upload support per ticket

 - Add ticket status dashboard for admin and user
----
### 📸 Preview



----

### 🔗 Links

🔗 Live App: Coming Soon

🔗 GitHub: github.com/alirazi1992/ITS-Client--YUP
