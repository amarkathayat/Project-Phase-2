Project Phase 2 – Renewable Energy Awareness Website
This project is the Phase 2 submission for my Web Development coursework.
It expands on Phase 1 by adding React-based interactivity, API integration, and a structured database model.

Project Overview
The goal of this project is to raise awareness about the role of renewable energy in rural Nepal, including:
Solar Power
Micro-Hydro Systems
Biogas Technology
The website provides educational content, real-world benefits, challenges, and ways supporters can get involved.

Project-Phase-2/
│
├── renewable-react/     → Full React frontend (Phase 2)
│
├── api-server/          → Node.js + Express backend (mock API)
│
└── Database Structure/  → ER Diagram (draw.io file)

A) Frontend (React)
Located in: renewable-react/
Features include:Modern responsive design,Routing using React Router,Dynamic pages (Technologies, Benefits, Challenges, Get Involved),Newsletter signup component

Run frontend locally:
Clean and accessible UI
cd renewable-react
npm install
npm run dev

B) Backend API (Node.js)
Located in: api-server/
Provides demo API endpoints for newsletter and involvement forms.
Default port:4000

C) Database Structure
Includes:Supporters,NewsletterSubscriptions,InvolvementInterests,Projects
,Technologies,ProjectTechnologies (junction table)
This structure supports both user interactions and renewable project data.
