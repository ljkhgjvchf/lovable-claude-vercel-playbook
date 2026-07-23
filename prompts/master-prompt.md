# Master prompt: v1 (2025-07-02)

The original prompt that started the build. Verbatim.

---

Create a luxury feeling high-end landing page, as if you were a senior website designer working for Nicola Da Dalto (the client) who is an AI professional that wants to sell AI Automation and get new leads using the landing page. Do the landing page design to match the style of the attached image 'reference'.

For the landing page, I want it to include:

A hero section with a title, copy, and get started button centred, the link must redirect to calendly (https://calendly.com/yourname) to book a call. Text on CTA use "Let's Automate Your Business".

Case studies section:

a. Service: AI Customer Support. Client: European Union (link website https://eit-ris.eu/). Functions: work as customer support and help user to find the best funding for their needs. Achievements: Average conversations per month +325; helped +145 to find the best funding for their company startups; Saving +60 hrs a month. Live demo visible here [embed code of the chatbot chat]

b. Service: AI Phone Receptionist. Client: Hair Salon (link website https://eit-ris.eu/). Functions: work as a Phone Receptionist taking the appointments via phone, check availability, schedule the appointment, set sms/email reminders to clients and business owners. Achievements: Handle +95 calls monthly; working 24/7 even when the owner is on holiday. Live demo visible here [embed code of the chatbot chat]

c. Service: AI Lead Generation Systems. Client: Ca' di Rajo Wines (wine company) (link website https://www.cadirajo.it/en/). Functions: Leads generation system + Qualifies Leads + Sends Hyper-Personalised Emails. Achievements: Generate + 1000 new potential leads per month; CR (Conversion Rate) 10%. Client sales 200K after 1st month. Image with results.

A section to list the services. Block with title, text, and 3 cards with the services. a. AI Customer Support. b. AI Phone Receptionist. c. AI Lead Generation Systems.

Section to give a short description of who [YOUR NAME] is. The section has the goal of building trust by showing his face and skills. Include in the block the profile image "YOUORnAME" attached. Make a moving carousel with just the logo of the tools he uses: N8N, Make.com, Apify, Instantly, MailChimp, HubSpot, Apollo, Zapier, ChatGPT, Cloud, Deepseek.

A client's list logo section. List the Clients that he worked with. Attached you can find the logos of all clients: "exclusible" link website https://www.exclusible.com/; "cointelegraph" link website https://cointelegraph.com/; "europeanunion" link website https://eit-ris.eu/

Frequently asked questions section:

How much can we save with AI automation? Most clients see 15-30 hours saved per week per automated process, plus significant error reduction. At an average hourly cost of $50 for knowledge work, that's $39,000-78,000 in annual savings per automation. Our ROI projections are conservative, reality often exceeds expectations.

Do we own the automations and agents you build? Completely. Every system, workflow, and piece of documentation becomes your property. With the Fractional service, we maintain and optimise them for you, but you retain full ownership and can transition to internal management anytime.

Do you offer a guarantee? Yes! [continue the answer]

[generate 2 more questions and answers]

A Get in touch CTA section before the footer, that points to Calendly.

Footer: include the logo (the logo is the name "Nicola Da Dalto" in Montserrat font), his LinkedIn (use icon) (https://www.linkedin.com/in/yourname/), and email youremail@gmail.com

The landing page should also have a top navigation with only anchor links to all the sections on the homepage, and not link to any other page. The top navigation should also be sticky and blur the background behind it when you scroll.

Style-wise, I want to use Inter as the font, with a light 300 font weight for all text and tight letter spacing for headings. Any text that isn't a heading should have a lower opacity. I want to use phosphor icons for the icon library with the light icon weight for all icons. Colour of text for titles is #1c1c1c, for text #6c6c6f, background could be #fcfdfd or white #ffffff. This selection is when the background is light. You can also use part with a darker background colour #1d1d1c, make sure to use a lighter colour for texts. Use an electric blue for cta and visual effect details.

Animate all the sections and components with opacity and blur as the user scrolls down the page.

For button styles, I want to use flat-style buttons that glow when you hover. Any cards on the page should have a glassmorphic style with background blur and low opacity.

---

## What actually shipped from v1, unchanged

The design system survived almost entirely intact 12+ months later: Inter at
weight 300, tight heading letter-spacing, `#1c1c1c` / `#6c6c6f`-ish neutrals,
electric blue accent (now `#0080FF`), sticky blurred nav, scroll-triggered
opacity animations, phosphor icons. This is the part that didn't need
iteration, the design brief was precise enough to nail on the first pass.

## What didn't survive

The business concept did not survive intact. Compare this prompt (a personal
"Nicola Da Dalto, AI Automation agency" pitch with three chatbot/voice-agent
case studies) to what's actually live now (a "ConvertLeads" growth-marketing
brand with EIT/Exclusible/Alpine/Doppl/Highloop case studies). That's not
prompt refinement, that's a mid-build pivot. See
[`evolution.md`](evolution.md) for when and how.
