# Reference coverage

Reference reviewed: https://www.castleskysoft.com/ and its linked company, industries, services, careers, privacy, and contact pages.

| Reference area | DVT implementation |
| --- | --- |
| Main navigation | Home, Company dropdown, Industries, Services mega menu, Contact |
| Company | About Us, How We Work, Our Team, Mission & Vision, Our Values, Testimonials, Careers |
| Home | Photo banner, five descriptive attributes, 8 service tiles, seven partnership principles, five-stage delivery process, ten client engagement topics |
| Services | Artificial Intelligence, Software Engineering, Data and Automation, Cloud Solutions, BPO, Technical Support, Desktop Support, US Mortgage |
| Service details | Topic coverage, service sidebar, enquiry link, careers/news/contact navigation |
| Industries | Overview, Cloud Solutions/Software Engineering/AI/BPO/Data & Automation focus filters, strategy and results sections |
| About | Introduction and fields for projects complete, happy clients, skilled experts, finished projects, team size |
| Values | Integrity, Innovation, Client-Centric Approach, Quality Commitment, Collaboration, Adaptability, Continuous Improvement |
| Careers | 'How We Hire' 4-stage hiring process, Open Positions with 10 department filters (.NET, AI, Business Analysis, Cloud, Data & AI, Java, Python, FDE, SAP Finance, NON - IT), direct role applications |
| Contact form | Name, Last Name, Email Address, Enquiry Type, Enquiry Description, required consent, action button |
| Contact details | careers@dvtworld.com, telephone field, India and USA location fields |
| Footer | Services, Company, Support, Privacy Policy, Social, Where We Are, copyright, back to top |
| Supporting pages | Latest News, privacy information |

## Details awaiting company approval

The reference company's addresses, personnel, metrics, endorsements, job vacancies, and LinkedIn URL are not DVT facts. Corresponding DVT fields use explicit empty states. India and USA headings preserve the reference's location structure and do not assert DVT office presence. Proposed mission, vision, values, and service descriptions should be reviewed by DVT. Service availability is explicitly subject to confirmation.

## Static contact behavior

The form validates required fields and email format, encodes the enquiry, and opens a draft addressed to careers@dvtworld.com in the visitor's email app. Visitors must send that draft themselves. No backend, email delivery service, form storage, analytics, or account system is implemented. A fallback email link remains visible after preparing a draft.

## Checks

`node build.cjs` regenerates all 21 pages plus three compatible URL aliases. `node verify.cjs` verifies page structure, local links, logo presence, DVT identity, required contact fields, email encoding, fallback behavior, and the invalid-form guard. `node --check dist/site-complete.js` validates JavaScript syntax. Browser rendering could not be checked because no browser surface was available in the session.
