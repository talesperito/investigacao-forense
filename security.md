# Security Policy

## 1. Security Philosophy

Security is a core concern of the **Investigação Forense** project.

Given the sensitive nature of digital forensics, investigations, and AI-assisted analysis, this project follows a **security-first and responsibility-first mindset**, even when operating as a technical showcase or experimental platform.

---

## 2. Scope of This Repository

This public repository:

- Does NOT contain real investigative data
- Does NOT expose credentials or sensitive configurations
- Does NOT provide operational forensic tools for misuse

All examples and applications are either demonstrative or abstracted.

---

## 3. Responsible Disclosure

If you discover a security vulnerability, please report it responsibly.

### How to Report
- Email: **talesperito@gmail.com**
- Subject: `Security Disclosure – Investigacao Forense`

Please include:
- A clear description of the issue
- Steps to reproduce (if applicable)
- Potential impact assessment

Do **not** publicly disclose vulnerabilities before responsible coordination.

---

## 4. Prohibited Activities

The following activities are strictly prohibited:

- Attempting to exploit this project for illegal investigations
- Using the code to target real individuals or systems
- Extracting or simulating real forensic data
- Circumventing authentication or access controls

Any misuse is solely the responsibility of the user.

---

## 5. AI Ethics & Limitations

AI and machine learning components in this project:

- Are intended to **assist**, not replace, human judgment
- May produce false positives or inaccurate outputs
- Should never be used as sole evidence in legal or investigative decisions

Users are expected to apply ethical and professional standards when interacting with AI-driven components.

---

## 6. Dependencies & Updates

- Dependencies are regularly reviewed for known vulnerabilities.
- Security updates are applied as part of routine maintenance.
- Outdated or vulnerable libraries are not intentionally retained.

---

## 7. Contact Form & Email Delivery

- Contact requests are submitted through an internal API route and forwarded to configured recipients.
- Email provider credentials are loaded through environment variables and must never be committed to the repository.
- Basic anti-abuse controls are applied (for example, bot honeypot field). Additional protections (rate limiting/WAF) are recommended at the hosting layer.

---

## 8. No Warranty

This project is provided **"as is"**, without warranty of any kind.

The maintainers assume no liability for misuse, misinterpretation, or damages arising from the use of this codebase.

---

## 9. Final Notes

Security, privacy, and ethics are ongoing processes.

Feedback and responsible collaboration are welcome when aligned with the principles outlined above.
