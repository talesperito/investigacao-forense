# Google Tag Manager Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Integrate Google Tag Manager (GTM) into the Next.js application to enable metric monitoring without affecting UI/UX or SEO.

**Architecture:** Create a client-side component using Next.js `Script` component for optimized loading. Inject the component into the root layout. Use environment variables for the GTM ID.

**Tech Stack:** Next.js (App Router), TypeScript, React.

---

### Task 1: Setup Environment Variable

**Files:**
- Modify: `c:/PPI-Arquivos/Projetos.ti/Investigacao-forense/.env.local`

**Step 1: Add GTM ID to .env.local**
Add the following line to the end of the file:
```env
NEXT_PUBLIC_GTM_ID=GTM-PK2CH4K2
```

**Step 2: Commit (Draft)**
`git add .env.local && git commit -m "chore: add GTM ID to environment variables"`

### Task 2: Create GTM Component

**Files:**
- Create: `c:/PPI-Arquivos/Projetos.ti/Investigacao-forense/components/GoogleTagManager.tsx`

**Step 1: Write the GTM component using next/script**
```tsx
'use client';

import Script from 'next/script';

export default function GoogleTagManager({ gtmId }: { gtmId: string }) {
  if (!gtmId) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: \`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','\${gtmId}');
          \`,
        }}
      />
      <noscript>
        <iframe
          src={\`https://www.googletagmanager.com/ns.html?id=\${gtmId}\`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
```

**Step 2: Verify file creation**
Check if the file exists and has the correct content.

**Step 3: Commit**
`git add components/GoogleTagManager.tsx && git commit -m "feat: create GoogleTagManager component"`

### Task 3: Integrate into Root Layout

**Files:**
- Modify: `c:/PPI-Arquivos/Projetos.ti/Investigacao-forense/app/layout.tsx`

**Step 1: Import and add the component to the layout**
Modify `app/layout.tsx` to include the `GoogleTagManager` component inside the body.

**Step 2: Verify build (Local Simulation)**
Ensure no syntax errors in the layout.

**Step 3: Commit**
`git add app/layout.tsx && git commit -m "feat: integrate GTM into root layout"`
