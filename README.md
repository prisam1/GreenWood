# Getting Started with Create React App

## live - https://greenwoodelementary.netlify.app/ 

## Greenwood Elementary School Admin Dashboard

A modern, responsive Admin Dashboard for Greenwood Elementary School.
This project is built using React.js + TypeScript + Tailwind CSS, configured with CRACO for custom overrides.

It provides school administrators with real-time analytics, leaderboards, and student performance insights.

## Features

Responsive Dashboard UI – Clean, mobile-first design using Tailwind CSS.
React 19 + TypeScript – Type-safe, scalable, and maintainable frontend.
Component-Based Architecture – Reusable and modular design.
Data Visualization – Student performance charts, class distribution, and leaderboards.

## Pages Included:
Dashboard – Overview of school statistics, charts, and student data.
Leaderboard – Top student rankings and champions.
Analytics – Performance analytics with data-driven charts.
Settings – School/Admin configuration options.
Not Found Page (404) – Handles invalid routes gracefully.
Radix UI + ShadCN components – For accessibility and modern UI patterns.

## Tech Stack
Framework: React 19 (with TypeScript)
Styling: Tailwind CSS + tailwind-merge
UI Components: Radix UI + ShadCN + Lucide Icons
Charts: Recharts
Routing: React Router v7
Config: CRACO (instead of ejecting CRA)

## Installation & Setup

## Clone the Repository
git clone https://github.com/prisam1/GreenWood.git
cd GreenWood

## Install Dependencies
npm install

## Run Development Server
npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

## Build for Production
npm run build

# Run Tests
npm test

## Why CRA + CRACO (Not Vite)?
CRA (Create React App) – Well-established ecosystem, stable for large-scale projects (like schools), better library compatibility.
CRACO – Allows extending CRA config without ejecting. Used here to customize Tailwind and PostCSS.
CRA was chosen for long-term stability, support, and compatibility with testing libraries and enterprise setups.

## Available Scripts
"start": "craco start",      // Start development server
"build": "craco build",      // Build production
"test": "craco test",        // Run tests
"eject": "react-scripts eject" // Eject config (not recommended)
