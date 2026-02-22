# Architecture Overview

## 1. Purpose

This document describes the architecture of the **Investigação Forense** website.

This repository contains the website code of a professional and technical portfolio, built to present applied projects in digital forensics, data science, and artificial intelligence.

No databases or operational forensic systems are included in this repository.

---

## 2. Scope of This Repository

This codebase is intentionally limited in scope.

Included:
- A static and server-rendered website built with Next.js
- Pages presenting projects, research, and applications
- Client-side components and UI logic
- Styling and layout configuration

Not included:
- Databases or persistent storage
- Authentication or user management
- Forensic tools, scripts, or datasets

---

## 3. Frontend Architecture

### 3.1 Framework and Rendering

- The site is built using **Next.js (App Router)**.
- Pages are organized under the `app/` directory following route-based conventions.
- The project primarily uses:
  - Static Site Generation (SSG)
  - Server Components for content rendering
- No runtime data mutation occurs on the server.

---

### 3.2 Component Structure

- Reusable UI components are located in the `components/` directory.
- Components are implemented as functional React components.
- The design prioritizes:
  - Simplicity
  - Readability
  - Clear separation between layout and content

---

## 4. Styling & UI

- Styling is implemented with **Tailwind CSS**.
- Utility-first styling enables consistent design without custom CSS overhead.
- The site is responsive and mobile-first.

---

## 5. Data Handling

- The site is predominantly static content with selected interactive components.
- Cookie consent preference is stored locally in the browser (`localStorage`).
- The contact form posts to an internal API route for email delivery.
- No database persistence is implemented in this repository.

---

## 6. Security Considerations

- No sensitive data is present in this repository.
- Most pages run without credentials, but contact-email delivery requires environment secrets (SMTP credentials and sender settings).
- The attack surface remains limited, with backend usage restricted to a single contact endpoint.

---

## 7. Deployment

- The site is deployed using **Vercel**.
- Each commit triggers an automated build and deployment.
- The deployment pipeline is focused on:
  - Build consistency
  - Fast feedback
  - Easy rollback

---

## 8. Design Principles

- Minimalism over unnecessary complexity
- Clear separation between presentation and content
- Transparency about system limitations
- Professional-grade frontend engineering

---

## 9. Relationship to External Projects

The projects described on this website may reference:

- External research work
- Independent applications
- Separate private or institutional systems

Those systems are **not part of this repository** and are mentioned for portfolio and informational purposes only.

---

## 10. Disclaimer

This repository is a **presentation layer only**.

It does not represent a complete forensic system and should not be interpreted as such.
