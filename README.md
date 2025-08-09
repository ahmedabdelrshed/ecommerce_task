# Frontend Task Documentation

**Candidate:** Ahmed Abdelrashed  
**Role:** Frontend Developer  
**Date:** August 10, 2025

---

## Overview
This project is a responsive eCommerce website implementation based on the provided Figma design. The task required building the Home Page and one additional page of my choice (Shop Page) using React.js and Next.js.

---

## Tech Stack
- Next.js: React framework (App Router used)  
- React: UI rendering  
- Tailwind CSS: Utility-first styling  
- TypeScript: Type safety  
- Vercel: Deployment  
- Figma: UI reference  

---

## Pages Implemented
1. Home Page  
2. Shop Page  

Both pages match the Figma design structure, components, layout, and responsiveness.

---

## Project Structure
app/
├── _components/
│ ├── Categories.tsx
│ ├── FurnitureWork.tsx
│ ├── Hero.tsx
│ ├── RoomsInspiration.tsx
├── shop/
│ ├── _components/
│ │ ├── Pagination.tsx
│ │ ├── ServiceFeatures.tsx
│ │ └── ShopBanner.tsx
│ └── page.tsx
├── api/products/
│ └── route.ts
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx

components/
└── header/
├── Header.tsx
├── Footer.tsx
├── ProductCard.tsx
└── ProductsSections.tsx

data/
└── products.ts


## Components Used
- Header & Footer: Layout base  
- Hero, Categories, FurnitureWork: Home content blocks  
- ProductCard: Product grid with hover overlay  
- ProductsSections: Grouped product listings  
- Pagination: Page navigation with styles  
- ServiceFeatures: 4-key-value features block  
- ShopBanner: Page intro for Shop  
- products.ts: Static mock data used in shop  

---

## Assets
- SVG Icons placed in `/public/icons/` (share.svg, compare.svg, like.svg, etc.)  
- Images placed in `/public/images/`  

---

## UI Highlights
- Hover Overlay on Product Cards includes action buttons (Share, Compare, Like) with icons.  
- Pagination Component: Custom-styled pagination matching the Figma style.  
- Service Features Section: Built with an array of values and looped using `.map()`.  

---

## Deployment
- Live Demo: [https://ecommerce-task-sepia.vercel.app/](https://ecommerce-task-sepia.vercel.app/)  
- GitHub Repo: [https://github.com/ahmedabdelrshed/ecommerce_task](https://github.com/ahmedabdelrshed/ecommerce_task)  

---

## Installation & Running the Project

To run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/ahmedabdelrshed/ecommerce_task.git

# Navigate to the project directory
cd ecommerce_task

# Install dependencies
npm install

# Run the development server
npm run dev
Open http://localhost:3000 with your browser to see the result.

Notes
All components are modular, reusable, and responsive.

Comments added where logic may need clarification.

Folder structure keeps components clean and separated.




