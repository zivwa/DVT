const fs = require('fs'), catalog = require('./content.cjs');
const dir = 'dist/';
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const button = (t, u) => `<a class="button" href="${u}">${t}${arrow}</a>`;
const logo = '<img src="assets/logo.png" width="112" height="93" alt="DVT — Dynamic Visual Technologies, since 2026">';
const company = [['about.html', 'About Us'], ['how-we-work.html', 'How We Work'], ['our-team.html', 'Our Team'], ['mission-vision.html', 'Mission & Vision'], ['our-value.html', 'Our Values'], ['testimonials.html', 'Testimonials'], ['careers.html', 'Careers']];
const icon = i => '<svg viewBox="0 0 24 24" aria-hidden="true">' + ['<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m9 9-3 3 3 3m6-6 3 3-3 3"/>', '<path d="M6 18a5 5 0 0 1-1-10 7 7 0 0 1 13-1 5.5 5.5 0 0 1 0 11Z"/>', '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/>', '<path d="M4 20V10m8 10V4m8 16v-7M1 10h6M9 4h6m2 9h6"/>'][i % 4] + '</svg>';
const links = items => items.map(([u, h]) => `<a href="${u}">${h}</a>`).join('');
const serviceLinks = () => links(catalog.map(([u, h]) => [u + '.html', h]));
const header = `<a class="skip" href="#main">Skip to content</a><header><div class="wrap nav"><a class="brand" href="index.html" aria-label="DVT home">${logo}<small>Dynamic Visual<br>Technologies Pvt Ltd</small></a><button class="menu" aria-expanded="false" aria-controls="navigation">Menu</button><nav class="links" id="navigation" aria-label="Main navigation"><a href="index.html">Home</a><details class="nav-dropdown"><summary>Company</summary><div class="dropdown-panel">${links(company)}</div></details><a href="industry.html">Industries</a><details class="nav-dropdown mega"><summary>Services</summary><div class="dropdown-panel">${serviceLinks()}<a href="solutions.html">All Services</a></div></details><a href="contact.html">Contact ${arrow}</a></nav></div></header>`;
const footer = `<footer><div class="wrap"><div class="expanded-footer"><div class="footer-services"><h3>Our Services</h3><div>${serviceLinks()}</div></div><div><h3>Company</h3>${links(company)}</div><div><h3>Support</h3><a href="contact.html">Contact Us</a><a href="privacy-policy.html">Privacy Policy</a><a href="news.html">Latest News</a><a href="mailto:careers@dvtworld.com">careers@dvtworld.com</a></div></div><div class="footer-locations"><div><a class="brand" href="index.html" aria-label="DVT home">${logo}</a><p>Dynamic Visual Technologies Pvt Ltd</p></div><div><h3>Where we are</h3><div class="location-row"><strong>India</strong><p>1st Floor, Block B,<br>BRIGADE TECH PARK, Pattandur Agrahara,<br>Whitefield, Bengaluru,<br>Karnataka – 560066.</p></div></div></div><div class="footer-bottom"><span>© 2026 Dynamic Visual Technologies Pvt Ltd. All rights reserved.</span><a href="privacy-policy.html">Privacy Policy</a></div></div></footer><a class="back-top" href="#top" aria-label="Back to top">${arrow}</a>`;
const title = (h, p) => `<section class="page-title dark"><div class="wrap"><h1>${h}</h1><p>${p}</p></div></section>`;
const section = (h, b) => `<section class="section"><div class="wrap"><div class="section-head"><h2>${h}</h2></div>${b}</div></section>`;
const note = t => `<p class="content-note">${t}</p>`;
const cta = `<section class="cta dark"><div class="wrap"><div><h2>Tell us about your idea.</h2><p>Let’s explore the right next step together.</p></div>${button('Start a conversation', 'contact.html')}</div></section>`;
const quick = `<section class="quick-links"><div class="wrap">${[['careers.html', 'Careers', 'Bring your perspective to DVT.'], ['news.html', 'Latest News', 'Company updates and announcements.'], ['contact.html', 'Contact', 'Tell us what you have in mind.']].map(([u, h, p]) => `<a href="${u}"><h3>${h}</h3><p>${p}</p>${arrow}</a>`).join('')}</div></section>`;
const tiles = `<div class="service-tiles">${catalog.map(([u, h, p], i) => `<a class="service-tile" href="${u}.html">${icon(i)}<h3>${h}</h3><p>${p}.</p><span class="tile-link">Explore service ${arrow}</span></a>`).join('')}</div>`;
const values = [['Integrity', 'Keep communication honest and decisions transparent.'], ['Innovation', 'Explore useful ideas with a clear purpose.'], ['Client-Centric Approach', 'Start with the needs of the business and its users.'], ['Quality Commitment', 'Make quality part of planning, implementation, and review.'], ['Collaboration', 'Bring different perspectives together around shared goals.'], ['Adaptability', 'Respond thoughtfully when requirements change.'], ['Continuous Improvement', 'Learn from feedback and improve the way work is done.']];
const articles = items => `<div class="values value-grid">${items.map(([h, p]) => `<article><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>`;
const newPages = [];
function add(file, name, body) { newPages.push({ file, name, body }); }
const existing = file => fs.readFileSync(dir + file, 'utf8').match(/<main id="main">([\s\S]*?)<\/main>/)[1];
let home = existing('index.html');
home = home.replace(/<div class="service-tiles">[\s\S]*?<\/div><\/div><\/section>/, tiles + '</div></section>');
const reasons = [['Tailored scope', 'Discuss a plan shaped around your objectives and requirements.'], ['Considered technology', 'Evaluate tools based on the work they need to do.'], ['Clear outcomes', 'Agree on what matters and how progress will be reviewed.'], ['Practical priorities', 'Balance scope, time, and budget through open discussion.'], ['Working together', 'Keep stakeholders involved in decisions and feedback.'], ['Relevant expertise', 'Discuss the skills and delivery arrangements your project needs.'], ['Room to evolve', 'Consider maintainability and changing business needs.']];
home = home.replace(/<ul class="commitments">[\s\S]*?<\/ul>/, '<ul class="commitments">' + reasons.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join('') + '</ul>');
const handling = [['Initial Assessment', 'Understand business and technology requirements.'], ['Personalized Service', 'Shape the scope around specific challenges.'], ['Dedicated Collaboration', 'Agree on responsibilities and the people involved.'], ['Open Communication', 'Create space for questions and clear decisions.'], ['Regular Check-Ins', 'Review progress and gather feedback.'], ['Training & Onboarding', 'Discuss documentation and handover needs.'], ['Post-Deployment Support', 'Agree on support arrangements before launch.'], ['Quality Assurance', 'Plan relevant reviews and testing.'], ['Timely Updates', 'Keep project information and changes visible.'], ['Confidentiality', 'Discuss appropriate data handling requirements.']];
home = home.replace(/<div class="client-points">[\s\S]*?<\/div><\/div><\/section>/, '<div class="handling-grid">' + handling.map(([h, p]) => `<div><h3>${h}</h3><p>${p}</p></div>`).join('') + '</div></div></section>');
home = home.replace(/<div class="hero-bottom">[\s\S]*?<\/div>/, `<div class="hero-bottom"><span>Dynamic Visual Technologies</span><div class="hero-tags"><span>Versatile</span><span>Responsive</span><span>Creative</span><span>Modern</span><span>Thoughtful</span></div></div>`);
add('index.html', 'Home', home + quick);
add('solutions.html', 'Our Services', title('Solutions for your next step.', 'Explore the complete service catalog.') + section('Our Services', tiles) + cta);
let about = existing('about.html'); about += section('Company at a glance.', `<div class="metrics">${['Projects Complete', 'Happy Clients', 'Skilled Experts', 'Finished Projects', 'Team Size'].map(h => `<div><h3>${h}</h3><p>Details to be published</p></div>`).join('')}</div>`) + quick; add('about.html', 'About Us', about);
add('how-we-work.html', 'How We Work', existing('how-we-work.html') + quick);
add('our-team.html', 'Our Team', title('Meet the people<br>behind the work.', 'Different perspectives. One shared direction.') + section('Our Team', '<div class="empty-content"><h3>Team profiles are being prepared.</h3><p>Approved team names, roles, biographies, and photographs will be added here.</p>' + button('Connect with DVT', 'contact.html') + '</div>') + quick);
add('mission-vision.html', 'Mission & Vision', title('Our Mission & Vision', 'A clear purpose for the way we think about technology.') + section('A direction for meaningful work.', articles([['Our Vision', 'Technology that helps people and businesses move forward with confidence.'], ['Our Mission', 'Bring clear thinking and collaborative problem solving to practical IT solutions.']]) + note('Proposed DVT statements, prepared for company review.')) + section('Three principles behind our approach.', articles([['Customized Solutions', 'Start with requirements rather than a predetermined technology.'], ['Expertise & Innovation', 'Evaluate useful ideas against the purpose of the project.'], ['Support & Partnership', 'Agree on collaboration, handover, and ongoing needs.']])) + quick);
add('our-value.html', 'Our Values', title('Values that shape<br>the way we work.', 'Principles for useful conversations and thoughtful decisions.') + section('Our Values', articles(values)) + quick);
add('testimonials.html', 'Testimonials', title('Client perspectives.', 'A place for the experiences and feedback behind the work.') + section('Our Testimonials', '<div class="empty-content"><h3>Verified testimonials will appear here.</h3><p>No client endorsements have been supplied for publication. Contact DVT to discuss relevant experience for your project.</p>' + button('Talk to DVT', 'contact.html') + '</div>') + quick);
const focus = [['Cloud Solutions', 'cloud-solutions', 'Scalable cloud architecture, migration, and managed infrastructure.'], ['Software Engineering', 'software-engineering', 'End-to-end custom software architecture and development.'], ['Artificial Intelligence', 'ai', 'Intelligent systems, machine learning, and predictive models.'], ['BPO', 'bpo', 'Support for recurring business operations and back-office workflows.'], ['Data & Automation', 'data-automation', 'Data pipeline management, analytics, and intelligent workflow automation.']];
add('industry.html', 'Industries', title('A broader view<br>of your business.', 'Connect your industry context with practical technology decisions.') + section('Overview', '<p class="wide-copy">Every industry has its own language, constraints, and priorities. A useful solution starts with understanding the context in which it needs to work.</p>') + section('Explore by focus area.', `<div class="industry-filters" role="group" aria-label="Filter industry focus areas">${['All', ...focus.map(x => x[0])].map((x, i) => `<button type="button" data-filter="${x}" aria-pressed="${i === 0}">${x}</button>`).join('')}</div><div class="industry-grid">${focus.map(([h, u, p]) => `<article data-category="${h}"><h3>${h}</h3><p>${p}</p><a class="text-link" href="${u}.html">Explore ${arrow}</a></article>`).join('')}</div>`) + section('Strategy with a clear purpose.', articles([['Data Analysis', 'Understand the information and the questions it needs to answer.'], ['Making a Plan', 'Turn priorities into a practical scope and sequence.'], ['Delivering Results', 'Review work against the outcomes agreed for the project.']])) + section('Delivering Results', '<p class="wide-copy">Discuss the outcomes you want to achieve, the measures that matter, and the practical constraints around delivery.</p>') + quick + cta);
const hiringSteps = [
  ['Getting to know you intro call', 'An informal introductory conversation to learn about your background, career aspirations, and answer any questions you have about DVT.'],
  ["Manager's interview", 'A comprehensive discussion with the hiring manager focusing on role expectations, relevant experience, technical domain, and team collaboration.'],
  ['Show us your skills', 'A practical assessment, technical challenge, or portfolio walkthrough tailored to your discipline to demonstrate your hands-on capabilities.'],
  ['Final decision', 'We review feedback across all interview rounds, evaluate mutual alignment, and share a clear, transparent outcome and offer details promptly.']
];
const howWeHireList = () => '<ol class="process-list">' + hiringSteps.map(([name, description], i) => '<li><span class="step-number">0' + (i + 1) + '</span><div><h3>' + name + '</h3><p>' + description + '</p></div></li>').join('') + '</ol>';
const howWeHireSection = '<section class="section" id="how-we-hire"><div class="wrap process-grid"><div class="process-intro"><h2>How We Hire</h2><p>Our four-stage hiring process is designed to understand your strengths, introduce our team, and ensure mutual alignment from our first conversation to your first day.</p>' + button('Send your CV / Application', 'mailto:careers@dvtworld.com?subject=Career%20Application%20at%20DVT') + '</div>' + howWeHireList() + '</div></section>';
const deptFilters = ['All', '.NET', 'Artificial Intelligence', 'Business Analysis', 'Cloud', 'Data Engineers & AI', 'Java', 'Python', 'FDE', 'SAP Finance', 'NON - IT'];
const openPositionsData = [
  {
    dept: '.NET',
    title: '.NET Developer / Full Stack Engineer',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Design and develop robust enterprise backend systems, scalable microservices, and secure RESTful APIs using C#, .NET 8 / .NET Core, and Microsoft Azure cloud integration.',
    skills: ['C#', '.NET Core', 'ASP.NET Web API', 'Microservices', 'SQL Server', 'Azure Cloud']
  },
  {
    dept: 'Artificial Intelligence',
    title: 'Artificial Intelligence (AI) Engineer',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Research, design, and deploy Generative AI solutions, Large Language Model (LLM) agents, NLP pipelines, and computer vision models integrated into intelligent enterprise workflows.',
    skills: ['Python', 'GenAI & LLMs', 'PyTorch / TensorFlow', 'LangChain', 'NLP', 'MLOps']
  },
  {
    dept: 'Business Analysis',
    title: 'IT Business Analyst',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Collaborate with international clients and technical squads to elicit requirements, document user stories, map operational workflows, and ensure successful solution delivery.',
    skills: ['Business Analysis', 'Agile / Scrum', 'Process Modeling', 'BRD / FRD', 'User Stories', 'JIRA']
  },
  {
    dept: 'Cloud',
    title: 'Cloud Solutions Engineer / Architect',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Architect, configure, and maintain resilient cloud infrastructure across AWS, Azure, and GCP, establishing automated CI/CD pipelines, container orchestration, and IaC.',
    skills: ['AWS / Azure / GCP', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD Pipelines', 'Cloud Security']
  },
  {
    dept: 'Data Engineers & AI',
    title: 'Data Engineer & AI Pipeline Specialist',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Build scalable data pipelines, streaming architectures, and high-performance data lakes that supply clean, governed data for machine learning models and executive intelligence dashboards.',
    skills: ['Python', 'SQL', 'Apache Spark', 'Databricks', 'Airflow', 'Data Warehousing', 'ETL/ELT']
  },
  {
    dept: 'Java',
    title: 'Java Software Engineer / Backend Developer',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Build enterprise-grade microservices and high-throughput distributed applications using Java 17+, Spring Boot, Kafka event streaming, and cloud containerized environments.',
    skills: ['Java 17+', 'Spring Boot', 'Microservices', 'Hibernate', 'Apache Kafka', 'PostgreSQL', 'REST APIs']
  },
  {
    dept: 'Python',
    title: 'Python Developer / Software Engineer',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Develop high-performance backend services, RESTful APIs, automation workflows, and data processing engines using Python, FastAPI, Django, and asynchronous architectures.',
    skills: ['Python 3+', 'FastAPI / Django', 'PostgreSQL', 'Redis', 'Celery', 'API Integration', 'Unit Testing']
  },
  {
    dept: 'FDE',
    title: 'Forward Deployed Engineer (FDE)',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Work directly alongside client technology leaders to rapidly prototype, architect, and deploy bespoke software solutions bridging high-stakes business requirements with technical systems.',
    skills: ['Full-Stack Architecture', 'TypeScript / React', 'Python / Go', 'API Integration', 'Rapid Prototyping', 'System Design']
  },
  {
    dept: 'SAP Finance',
    title: 'SAP Finance (FICO) Consultant',
    type: 'Full-time · Bengaluru (Whitefield) · Hybrid',
    desc: 'Configure, customize, and support SAP Financial Accounting (FI) and Controlling (CO) modules, facilitating S/4HANA finance transformations, ledger reconciliations, and reporting.',
    skills: ['SAP FICO', 'S/4HANA Finance', 'General Ledger', 'AP / AR', 'Asset Accounting', 'Cost Center Accounting']
  },
  {
    dept: 'NON - IT',
    title: 'Non-IT / Operations & Process Associate',
    type: 'Full-time · Bengaluru (Whitefield) · On-site',
    desc: 'Manage and execute business operations workflows, US mortgage document management, customer experience operations, data validation checks, and general office process administration.',
    skills: ['BPO Operations', 'US Mortgage Processing', 'Data Verification', 'Customer Support', 'Process Management', 'MS Excel']
  }
];
const openPositionsFilterBar = `<div class="job-filters" role="group" aria-label="Filter positions by department">${deptFilters.map((d, i) => `<button type="button" data-filter="${d}" aria-pressed="${i === 0}">${d === 'All' ? 'All departments' : d}</button>`).join('')}</div>`;
const openPositionsCards = `<div class="positions-grid">${openPositionsData.map(p => `
<article class="job-card" data-category="${p.dept}">
  <div class="job-card-top">
    <div class="job-badges">
      <span class="job-badge dept">${p.dept}</span>
      <span class="job-badge type">${p.type}</span>
    </div>
  </div>
  <h3 class="job-title">${p.title}</h3>
  <p class="job-desc">${p.desc}</p>
  <div class="job-tags">${p.skills.map(s => `<span>${s}</span>`).join('')}</div>
  <div class="job-card-action">
    <a class="button" href="mailto:careers@dvtworld.com?subject=${encodeURIComponent('Application for ' + p.title + ' - DVT Careers')}">Apply for this role ${arrow}</a>
  </div>
</article>`).join('')}</div>`;
const openPositionsSection = `<section class="section" id="open-positions"><div class="wrap"><div class="section-head"><h2>Open Positions</h2><p>Explore current career opportunities across our specialized technical, enterprise, and operations departments.</p></div>${openPositionsFilterBar}${openPositionsCards}</div></section>`;
add('careers.html', 'Careers', title('Build your next chapter<br>with DVT.', 'Bring your curiosity, experience, and perspective to Dynamic Visual Technologies Pvt Ltd.') + howWeHireSection + openPositionsSection + cta);
const form = `<form id="enquiry-form"><div class="form-grid"><label>Name<input name="firstName" autocomplete="given-name" required maxlength="100"></label><label>Last Name<input name="lastName" autocomplete="family-name" required maxlength="100"></label><label>Email Address<input type="email" name="email" autocomplete="email" required maxlength="254"></label><label>Enquiry Type<input name="enquiryType" list="enquiry-types" required maxlength="120"><datalist id="enquiry-types"><option value="Project enquiry"><option value="Career enquiry">${catalog.map(([, h]) => `<option value="${h}">`).join('')}</datalist></label><label class="full">Enquiry Description<textarea name="description" rows="6" required maxlength="5000"></textarea></label></div><label class="consent"><input type="checkbox" name="consent" required><span>I agree to discuss my enquiry with DVT. <a href="privacy-policy.html">Read privacy information</a>.</span></label><p class="note">This static form prepares an email in your email app. Review and send it there. Nothing is submitted to a website server.</p><button class="button" type="submit">Prepare Email ${arrow}</button><p id="form-status" role="status"></p><a id="email-fallback" class="text-link" href="mailto:careers@dvtworld.com" hidden>Open email draft ${arrow}</a></form>`;
add('contact.html', 'Contact Us', title('Let’s talk about<br>what comes next.', 'Tell us about your idea, question, or career interest.') + `<section class="section"><div class="wrap contact-grid"><div><h2>Get in touch.</h2><p class="contact-intro">Dynamic Visual Technologies Pvt Ltd</p><a class="email" href="mailto:careers@dvtworld.com">careers@dvtworld.com</a><p>Use the form to prepare your enquiry, or email us directly.</p><h3 class="contact-subhead">Telephone</h3><p>Phone contact details have not yet been supplied.</p></div><div class="form-panel"><h2>Need assistance?</h2><p>Please fill in the form.</p>${form}</div></div></section>` + section('Doing business with us.', articles([['India', '1st Floor, Block B,<br>BRIGADE TECH PARK, Pattandur Agrahara,<br>Whitefield, Bengaluru,<br>Karnataka – 560066.']])) + quick);
add('news.html', 'Latest News', title('News & updates.', 'Announcements from Dynamic Visual Technologies Pvt Ltd.') + section('Latest News', '<div class="empty-content"><h3>Company announcements will appear here.</h3><p>There are no published news items yet.</p>' + button('Contact DVT', 'contact.html') + '</div>'));
add('privacy-policy.html', 'Privacy Information', title('Privacy information.', 'How this static website handles your visit and enquiries.') + section('Information We Collect', `<div class="reading"><p>The enquiry form asks for your name, last name, email address, enquiry type, description, and consent. It prepares a draft in your email application. This website has no form submission endpoint or visitor account system.</p><h2>How We Use Your Information</h2><p>If you send an email, DVT receives the information you choose to include for responding to your enquiry. Do not include passwords or sensitive personal information.</p><h2>Disclosure of User Information</h2><p>Opening an email draft uses your configured email application and provider. Hosting providers may process technical request information under their own terms. No analytics scripts are included.</p><h2>External Resources</h2><p>Fonts are requested from Google Fonts. Your browser may share technical request information with that provider. The office photograph is stored locally and is illustrative.</p><h2>Changes to This Privacy Information</h2><p>This notice describes the current static website. Company-wide retention, data rights, and disclosure terms should be supplied and reviewed before publishing a final corporate privacy policy.</p><h2>Privacy Contact</h2><p>Email <a href="mailto:careers@dvtworld.com">careers@dvtworld.com</a> for privacy enquiries.</p></div>`));
for (const [u, h, p, topics] of catalog) { add(u + '.html', h, title(h, p + '.') + `<section class="section"><div class="wrap detail-grid"><aside class="service-sidebar"><h2>Our Services</h2>${serviceLinks()}</aside><div><h2>${h}, shaped around your needs.</h2><p class="wide-copy">${p}. Discuss your current workflows, priorities, and intended outcomes to agree on an appropriate scope.</p><div class="topic-grid">${topics.map((h, i) => `<article>${icon(i)}<h3>${h}</h3><p>Explore requirements, responsibilities, and delivery options with DVT.</p></article>`).join('')}</div><h2 class="detail-heading">Why consider DVT?</h2><p>Begin with a conversation about your objectives and expectations. Confirm the scope and delivery approach before work begins.</p>${button('Discuss ' + h, 'contact.html')}</div></div></section>` + quick + cta); }
const activeFiles = new Set([...newPages.map(p => p.file), 'about-us.html', 'services.html', 'our-values.html']);
for (const file of fs.readdirSync(dir).filter(x => x.endsWith('.html'))) { if (!activeFiles.has(file)) fs.unlinkSync(dir + file); }
for (const { file, name, body } of newPages) { const head = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${name} — DVT, Dynamic Visual Technologies Pvt Ltd. Contact careers@dvtworld.com."><meta name="theme-color" content="#0c102b"><title>${name} | DVT</title><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="reference.css"><link rel="stylesheet" href="complete.css"><script src="site-complete.js" defer></script></head><body id="top">`; fs.writeFileSync(dir + file, head + header + '<main id="main">' + body + '</main>' + footer + '</body></html>'); }
for (const [alias, target] of Object.entries({ 'about-us.html': 'about.html', 'services.html': 'solutions.html', 'our-values.html': 'our-value.html' })) fs.copyFileSync(dir + target, dir + alias);
fs.writeFileSync('page-inventory.json', JSON.stringify(newPages.map(({ file, name }) => ({ file, name })), null, 2));
console.log('Expanded website to ' + newPages.length + ' pages plus 3 compatibility pages.');