# cvai — AI-Driven Resume Workshop

`cvai` is a high-performance, minimalist AI-driven resume builder built for the 2026 job market.  
Designed to bridge the gap between technical infrastructure and career conversion, it enables professionals to optimize and tailor their profiles against specific applicant tracking systems (ATS) and job roles in real time.

---

## ⚡ Architecture & Tech Stack

The frontend architecture utilizes a decoupled, modern ecosystem focused on performance, strict type safety, and micro-component design principles.

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.x (Strict Mode)
- **Styling & UI:** Tailwind CSS & shadcn/ui (Radix Primitives)
- **State & Forms:** React Hook Form + Zod Validation
- **Data Layer:** Native Fetch Client wrapped with automated Bearer token injection

---

## 📂 Core Project Directory Structure

```text
src/
├── app/
│   ├── (auth)/
│   ├── dashboard/
│   └── resumes/[id]/optimize
├── components/
│   ├── auth/
│   └── ui/
├── lib/
│   └── api-client.ts
└── types/
    ├── auth.ts
    └── resume.ts
```

---

## ⚙️ REST API Integration Matrix

| Method | Endpoint                     | Access    | Payload / Purpose                            |
| ------ | ---------------------------- | --------- | -------------------------------------------- |
| POST   | `/api/register`              | Public    | `{ first_name, last_name, email, password }` |
| POST   | `/api/login`                 | Public    | Auth exchange → Sanctum Bearer Token         |
| POST   | `/api/resumes`               | Protected | `{ title, template_id }`                     |
| POST   | `/api/resumes/{id}/optimize` | Protected | `{ target_job }`                             |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-username/cvai-front.git
cd cvai-front
npm install
```

### Environment Setup

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🛠️ Git Workflow Standards

- feat: new features
- fix: bug fixes
- chore: maintenance
- docs: documentation updates
