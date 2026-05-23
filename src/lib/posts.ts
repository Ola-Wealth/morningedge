export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "subheading"; text: string }
  | { type: "emphasis"; text: string };

export interface Post {
  slug: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  thumbnail: {
    gradient: string;
    icon: string;
    label: string;
  };
  content: ContentBlock[];
}

export const posts: Post[] = [
  {
    slug: "systems-over-inspiration",
    category: "Leadership",
    title: "The Leader Who Builds Systems Outlasts the Leader Who Inspires Feelings",
    date: "May 20, 2026",
    readTime: "5 min read",
    excerpt: "Inspiration fades. Systems persist. The most effective leaders understand this, and they build accordingly.",
    thumbnail: {
      gradient: "linear-gradient(135deg, #0A0A0A 0%, #1a1a2e 100%)",
      icon: "👑",
      label: "Leadership",
    },
    content: [
      {
        type: "paragraph",
        text: "I walked into a company that had just lost its CEO. The man was brilliant. Charismatic. The kind of person who could walk into a room and shift the energy without saying a word. People loved working for him. They talked about him the way people talk about a force of nature. When he left, I expected to find a strong organization. What I found was a team that did not know what to do without him.",
      },
      {
        type: "paragraph",
        text: "Processes that lived in his head were gone with him. Decisions that required his presence were stalled. The culture he created was warm and energizing but it had no structure underneath it. Without him in the building, the whole thing began to drift.",
      },
      {
        type: "emphasis",
        text: "This is where most leaders miss it.",
      },
      {
        type: "paragraph",
        text: "They mistake inspiration for infrastructure. They build followership instead of systems. And when they are gone, whether by choice, necessity, or circumstance, the organization discovers it was never really built at all. It was held together by one person's presence.",
      },
      {
        type: "subheading",
        text: "Inspiration Is a Catalyst. It Is Not a Foundation.",
      },
      {
        type: "paragraph",
        text: "There is nothing wrong with being an inspiring leader. People need to feel moved. They need to believe in what they are building. A leader who cannot stir the hearts of their team is working at a disadvantage. But inspiration without architecture is an emotion. And emotions are temporary.",
      },
      {
        type: "paragraph",
        text: "The question is not whether your team is inspired. The question is what happens when you are not in the room. What happens when you are sick, traveling, or no longer there? Does the organization still know what to do? Does it still make good decisions? Does it still protect the things that matter?",
      },
      {
        type: "pullquote",
        text: "A business that runs on your energy is a business that stops when you stop.",
      },
      {
        type: "paragraph",
        text: "The leader who builds systems is building something that outlasts any one person, including themselves. They are creating decision frameworks that allow the team to act with clarity when no one is watching. They are building processes that carry institutional knowledge so it does not disappear when people leave. They are designing accountability structures so results are tied to the system, not to individual heroics.",
      },
      {
        type: "subheading",
        text: "Three Things a System Does That Inspiration Cannot",
      },
      {
        type: "paragraph",
        text: "First, a system creates consistency. Inspiration is good on Mondays. Systems are good on Thursdays at 4pm when everyone is tired and the enthusiasm from the team meeting has worn off. Consistency is not a feeling. It is a structure.",
      },
      {
        type: "paragraph",
        text: "Second, a system removes dependence. When a process is documented, when a decision framework is shared, when accountability is built into the workflow, the team does not need you to be present for the right thing to happen. That is freedom. Not just for the organization. For you.",
      },
      {
        type: "paragraph",
        text: "Third, a system scales. Inspiration reaches the people in the room. A well-designed system reaches everyone who ever joins after you leave. It compounds. It grows. It keeps producing results long after the moment of motivation has faded.",
      },
      {
        type: "subheading",
        text: "The Leader Your Organization Actually Needs",
      },
      {
        type: "paragraph",
        text: "The best leaders I have seen are not always the loudest. They are not always the most charismatic. But they all share one discipline: they build things that work without them. They document. They design. They create structures and then they teach the structures to everyone around them.",
      },
      {
        type: "paragraph",
        text: "They inspire people, yes. But they back that inspiration with architecture. They give people not just a reason to show up, but a clear picture of what to do when they get there.",
      },
      {
        type: "pullquote",
        text: "Inspire people. Then give them something to work inside of.",
      },
      {
        type: "paragraph",
        text: "The leader who builds systems is not the most celebrated in the room. But they are the ones who build organizations that last. Their names may not be on the front page. But their fingerprints are on everything that continues to work after they are gone.",
      },
      {
        type: "emphasis",
        text: "Build the system. Lead through it. That is the work.",
      },
    ],
  },
  {
    slug: "why-ai-implementations-fail",
    category: "AI & Business",
    title: "Why Most AI Implementations Fail Before They Start",
    date: "May 14, 2026",
    readTime: "6 min read",
    excerpt: "The problem is rarely the technology. It is the absence of a clear operational problem the technology is meant to solve.",
    thumbnail: {
      gradient: "linear-gradient(135deg, #0A0A0A 0%, #0d0d2b 100%)",
      icon: "⚡",
      label: "AI & Business",
    },
    content: [
      {
        type: "paragraph",
        text: "A company I know spent close to four months evaluating AI tools, comparing vendors, attending demos, and sitting through slide decks. They were excited. This was going to change everything. By the time they had selected a platform and launched their first workflow, the excitement had turned into something else entirely. Results were thin. Adoption was low. The team was confused. And the leadership team was left asking a question they should have asked at the very beginning.",
      },
      {
        type: "emphasis",
        text: "What specific problem were we trying to solve?",
      },
      {
        type: "paragraph",
        text: "They could not answer it clearly. Not because they were not smart. They were. But because they had started with the technology and worked backwards toward the problem, rather than starting with the problem and working forward toward the solution. That reversal is the root cause of most failed AI implementations.",
      },
      {
        type: "subheading",
        text: "The Technology Is Not the Problem",
      },
      {
        type: "paragraph",
        text: "AI tools work. That is not the debate. The tools have matured to the point where the question is almost never whether the technology can do what you need it to do. The question is whether you have correctly identified what you need it to do.",
      },
      {
        type: "paragraph",
        text: "Most organizations approach AI the way someone approaches a shiny new piece of gym equipment. They buy it because of what it represents. They imagine the results it will produce. But without a clear training plan, without understanding what specific gap it fills, it ends up unused. A very expensive addition to a very cluttered room.",
      },
      {
        type: "pullquote",
        text: "Buying the tool is the easiest part. Knowing what to do with it is the actual work.",
      },
      {
        type: "subheading",
        text: "Where the Failure Actually Begins",
      },
      {
        type: "paragraph",
        text: "The failure begins in the framing. When an organization decides to adopt AI because the industry is moving that way, because a competitor is doing it, or because leadership attended a conference and came back energized, the implementation is already in trouble. The technology is now carrying the weight of justifying itself. That is not its job.",
      },
      {
        type: "paragraph",
        text: "The right framing starts with operations. It starts with the question: where in our workflow is human judgment being wasted on tasks that should not require human judgment? Where are we losing time? Where are decisions getting delayed because the information needed to make them is scattered or slow? Where are errors happening repeatedly because the process depends on manual input?",
      },
      {
        type: "paragraph",
        text: "Those are the entry points. Not the technology. The problem.",
      },
      {
        type: "subheading",
        text: "Three Questions Before You Choose a Tool",
      },
      {
        type: "paragraph",
        text: "First: what is the actual bottleneck? Not the symptom, the bottleneck. If your team is slow to respond to client inquiries, the bottleneck is not the response time itself. It might be the process of gathering information before the response can go out. That distinction matters enormously when you are choosing what to automate.",
      },
      {
        type: "paragraph",
        text: "Second: what does success look like in 90 days? If you cannot define a measurable outcome that would tell you whether the implementation is working, you do not have a clear enough problem definition yet. Go back and sharpen it.",
      },
      {
        type: "paragraph",
        text: "Third: who owns this? AI implementations fail when they are everyone's responsibility and therefore no one's. There needs to be a person who is accountable for the outcome, who understands both the operational problem and the technical solution, and who has the authority to make decisions and course-correct.",
      },
      {
        type: "subheading",
        text: "Practical AI Looks Boring from the Outside",
      },
      {
        type: "paragraph",
        text: "The AI implementations that actually work rarely look impressive in a presentation. They look like: a report that used to take three hours now takes fifteen minutes. A customer inquiry that used to sit for two days is now triaged and routed in four minutes. A document that required three rounds of manual review now has a first-pass check completed before any human touches it.",
      },
      {
        type: "paragraph",
        text: "These are not headline-grabbing outcomes. But they compound. Over twelve months, those improvements translate into capacity. Capacity translates into speed. Speed translates into competitive advantage.",
      },
      {
        type: "pullquote",
        text: "The most valuable AI in your business will probably solve a problem no one is excited to talk about.",
      },
      {
        type: "paragraph",
        text: "Start with the problem. Define it precisely. Measure the current state. Then, and only then, identify the tool that fits the gap. That sequence is the difference between an AI implementation that transforms your operations and one that becomes a cautionary tale at the next leadership offsite.",
      },
      {
        type: "emphasis",
        text: "The technology is ready. The question is whether you are.",
      },
    ],
  },
  {
    slug: "strategy-decision-framework",
    category: "Strategy",
    title: "Strategy Is Not a Document. It Is a Decision Framework.",
    date: "May 7, 2026",
    readTime: "5 min read",
    excerpt: "A strategy that lives in a slide deck and dies in a meeting room was never a strategy. It was a wish.",
    thumbnail: {
      gradient: "linear-gradient(135deg, #111111 0%, #2a1800 100%)",
      icon: "♟",
      label: "Strategy",
    },
    content: [
      {
        type: "paragraph",
        text: "Three months of planning. Forty-two slides. A facilitated offsite. A beautiful document with clear pillars, bold objectives, and a roadmap that extended all the way to 2028. The leadership team presented it to the organization with energy. People nodded. Some took notes. A few asked good questions.",
      },
      {
        type: "paragraph",
        text: "Six months later, the document was on a shared drive that no one opened. The day-to-day decisions being made in the business had almost no relationship to what was in those forty-two slides. The strategy was complete. The business was operating without it.",
      },
      {
        type: "emphasis",
        text: "This is the most common way strategy fails.",
      },
      {
        type: "paragraph",
        text: "Not because the strategy was wrong. Not because the leaders were incompetent. But because the strategy was built as a document rather than a decision framework. And those are two very different things.",
      },
      {
        type: "subheading",
        text: "A Document Describes. A Framework Decides.",
      },
      {
        type: "paragraph",
        text: "A strategy document tells you where the organization wants to go. It is a description of ambition. It is useful for alignment, for communication, for investor presentations. But a description of ambition is not the same as a guide for decision-making.",
      },
      {
        type: "paragraph",
        text: "A decision framework tells you what to do when two competing priorities show up at the same time. It tells you which opportunity to pursue and which one to decline. It tells you when to hold the line and when to adapt. It answers the question that every leader faces every single week: given everything we said we are trying to do, what should we do next?",
      },
      {
        type: "pullquote",
        text: "A strategy that cannot answer that question in real time is not a strategy. It is an aspiration.",
      },
      {
        type: "subheading",
        text: "The Gap Between Planning and Executing",
      },
      {
        type: "paragraph",
        text: "The gap between a strategy document and real execution is not a communication problem. It is not a buy-in problem. In most cases, people understood the strategy. They supported it. The gap is that the strategy was never translated into the language of daily decisions.",
      },
      {
        type: "paragraph",
        text: "Every day, your team is making hundreds of small decisions. What to prioritize. What to delay. Which client to focus on. Which initiative to resource. Which conversation to have. If the strategy is not embedded in those decisions, it does not matter how good it looked on the slide.",
      },
      {
        type: "paragraph",
        text: "Strategy lives in decisions, not documents. The question is whether your strategy is close enough to the decision-making moment to actually shape it.",
      },
      {
        type: "subheading",
        text: "What a Real Decision Framework Looks Like",
      },
      {
        type: "paragraph",
        text: "A real decision framework has three components. First, it defines what you are saying yes to. Not in vague terms. In specific, testable terms. If a new opportunity appears, does it fit the customer profile you have committed to serve? Does it align with the capabilities you have decided to build? If the answer is no, the framework tells you to decline without a long internal debate.",
      },
      {
        type: "paragraph",
        text: "Second, it defines what you are saying no to. Every strategy without a clear no list is not a strategy. It is a wish. The no list is often more valuable than the yes list because it is the no list that protects your focus.",
      },
      {
        type: "paragraph",
        text: "Third, it defines how you resolve conflict. When two priorities compete, when two good options both meet the criteria, what is the tiebreaker? Is it speed to revenue? Long-term positioning? Team capacity? The framework needs to tell you.",
      },
      {
        type: "subheading",
        text: "Strategy Is Alive or It Is Nothing",
      },
      {
        type: "paragraph",
        text: "A strategy that is reviewed once a year is not guiding your business. It is decorating your Google Drive. Real strategy is a living thing. It gets tested every week in the decisions that are made and the decisions that are avoided.",
      },
      {
        type: "paragraph",
        text: "Build it that way. Make it short enough to be remembered. Make it clear enough to answer real questions. Make it specific enough to create real constraints. And then use it. In the meeting. In the hiring decision. In the product conversation. In the client negotiation.",
      },
      {
        type: "emphasis",
        text: "A strategy that guides decisions is worth everything. A strategy that only lives in a document is worth nothing.",
      },
    ],
  },
  {
    slug: "discipline-environment-design",
    category: "Personal Development",
    title: "Discipline Is Not Willpower. It Is Environment Design.",
    date: "April 29, 2026",
    readTime: "5 min read",
    excerpt: "Most people try to perform their way out of bad environments. The better approach: build the environment that makes performance the default.",
    thumbnail: {
      gradient: "linear-gradient(135deg, #7c4a00 0%, #D4A017 100%)",
      icon: "🔥",
      label: "Personal Development",
    },
    content: [
      {
        type: "paragraph",
        text: "Every January, the same thing happens. People make strong decisions. They commit. They are serious this time. They are going to wake up earlier, work out consistently, read more books, build the business, stay focused. And for the first two weeks, they do it. Then February comes. And by the end of February, most of those commitments are sitting quietly in the graveyard of good intentions.",
      },
      {
        type: "paragraph",
        text: "We call this a willpower problem. We tell ourselves we were not disciplined enough. We were not committed enough. We did not want it badly enough. And so we try again, this time with more intensity, more motivation, more resolve. And we fail again in the same way for the same reasons.",
      },
      {
        type: "emphasis",
        text: "This is where most people miss it completely.",
      },
      {
        type: "paragraph",
        text: "Willpower is not the variable. Environment is.",
      },
      {
        type: "subheading",
        text: "The Person Who Changed Nothing Except Their Environment",
      },
      {
        type: "paragraph",
        text: "I know someone who struggled to write consistently for years. He had the ideas. He had the intent. But the words never came consistently. He tried accountability partners, habit trackers, morning routines. Nothing held. Then he changed one thing. He put a notebook and a pen on his desk the night before, cleared everything else off, and placed his phone in a different room. Nothing else changed.",
      },
      {
        type: "paragraph",
        text: "He wrote every morning for the next four months. Not because his willpower suddenly improved. Not because he found a deeper level of motivation. But because the environment removed the friction between him and the behavior he wanted to produce.",
      },
      {
        type: "pullquote",
        text: "The behavior you want is already inside you. The environment is either releasing it or blocking it.",
      },
      {
        type: "subheading",
        text: "Why Willpower Is the Wrong Tool",
      },
      {
        type: "paragraph",
        text: "Willpower is a resource. It depletes. It is strongest in the morning and weakest at night. It gets drained by decisions, by stress, by distraction, by everything that demands mental energy throughout the day. By the time you need it most, it is often the least available.",
      },
      {
        type: "paragraph",
        text: "Environment does not deplete. A well-designed environment works the same at 6am and 11pm. It does not need you to feel motivated. It does not require you to remember why you started. It simply makes the right behavior easier than the wrong one.",
      },
      {
        type: "paragraph",
        text: "That distinction matters more than most people want to admit. Because it means that your discipline problem is not a character problem. It is a design problem.",
      },
      {
        type: "subheading",
        text: "Three Principles of Environment Design",
      },
      {
        type: "paragraph",
        text: "First, reduce the friction for the behavior you want. If you want to read more, put the book on your pillow. If you want to exercise, sleep in your gym clothes. If you want to write, clear your workspace before you sleep. Every point of friction you remove increases the probability that the behavior happens.",
      },
      {
        type: "paragraph",
        text: "Second, increase the friction for the behavior you do not want. If social media pulls you away from focused work, delete the apps from your phone during work hours. If the snacks in your kitchen derail your eating goals, stop buying them. You are not testing your willpower against temptation. You are removing the temptation from the test.",
      },
      {
        type: "paragraph",
        text: "Third, design for your worst day, not your best. Most people design their habits for a motivated, well-rested, high-energy version of themselves. Then they are surprised when those habits collapse on the days when they are tired, stressed, or overwhelmed. Design a version of the habit that is so simple, so low-friction, that even your worst self can do it.",
      },
      {
        type: "subheading",
        text: "The Work You Have Been Avoiding Is Not About You",
      },
      {
        type: "paragraph",
        text: "You are not undisciplined. You are operating in an environment that was never designed for what you are trying to become. The people who seem to have extraordinary discipline are often the people who have taken the time to design extraordinary environments.",
      },
      {
        type: "paragraph",
        text: "They are not fighting their environment every day. Their environment is fighting for them.",
      },
      {
        type: "emphasis",
        text: "Stop trying to out-will your surroundings. Build surroundings that produce the will.",
      },
    ],
  },
  {
    slug: "delegation-trap",
    category: "Operations",
    title: "The Delegation Trap: Why Founders Cannot Let Go",
    date: "April 22, 2026",
    readTime: "6 min read",
    excerpt: "Delegation is not about trust. It is about infrastructure. Founders who struggle to delegate usually lack the systems that make delegation safe.",
    thumbnail: {
      gradient: "linear-gradient(135deg, #141414 0%, #1e1e1e 100%)",
      icon: "⚙️",
      label: "Operations",
    },
    content: [
      {
        type: "paragraph",
        text: "I sat across from a founder who had built a team of twelve people. Smart, capable people. Every one of them had been hired with care, interviewed thoroughly, chosen for their competence. And yet, this founder was reviewing every piece of work that left the building. Every proposal. Every client email of significance. Every deliverable. They were the last stop before anything went out.",
      },
      {
        type: "paragraph",
        text: "The team was frustrated. The founder was exhausted. Growth had stalled because every initiative eventually ran into the same bottleneck: one person who could not move fast enough to keep up with everything that needed their attention.",
      },
      {
        type: "emphasis",
        text: "The founder was not the ceiling because of their talent. They were the ceiling because of their systems.",
      },
      {
        type: "paragraph",
        text: "Or more precisely, because of the absence of them.",
      },
      {
        type: "subheading",
        text: "Why Founders Hold On",
      },
      {
        type: "paragraph",
        text: "The narrative we tell about delegation is that it is a trust problem. Founders do not delegate because they do not trust their team. Sometimes that is true. But in most cases I have seen, trust is not the real issue. The real issue is infrastructure.",
      },
      {
        type: "paragraph",
        text: "When a founder has never documented how a task should be done, when there are no clear standards for what a good output looks like, when there is no feedback loop that catches mistakes before they reach the client, then holding on is not a character flaw. It is a rational response to a system that was never designed for delegation.",
      },
      {
        type: "paragraph",
        text: "The founder reviews everything because if they do not, things go wrong. And things go wrong because no one built the infrastructure that would prevent them from going wrong without the founder in the loop.",
      },
      {
        type: "pullquote",
        text: "You cannot delegate to a gap. You can only delegate to a system.",
      },
      {
        type: "subheading",
        text: "What Delegation Actually Requires",
      },
      {
        type: "paragraph",
        text: "Delegation is not the act of handing something to someone and hoping for the best. That is abdication. Delegation is the act of transferring responsibility to a person who has the clarity, the tools, and the structure to carry it without you.",
      },
      {
        type: "paragraph",
        text: "That means three things must exist before delegation can work.",
      },
      {
        type: "paragraph",
        text: "First, the standard must be documented. Not in the founder's head. Not in an informal understanding developed over months of working together. Written down. Clear enough that a new person joining the team could read it and understand what a successful output looks like.",
      },
      {
        type: "paragraph",
        text: "Second, the person must have authority to match the responsibility. Delegation without authority is performance theater. If someone is responsible for an outcome but cannot make the decisions needed to produce it, they will always be coming back to you for approval. Which means the work is still sitting with you.",
      },
      {
        type: "paragraph",
        text: "Third, the feedback loop must be built into the process. Not a monthly check-in. A structured mechanism that surfaces deviations from the standard early enough to correct them before they become problems. That is what makes it safe to let go.",
      },
      {
        type: "subheading",
        text: "The Founder Who Freed Themselves",
      },
      {
        type: "paragraph",
        text: "The founder I mentioned earlier spent six weeks doing something uncomfortable. They documented everything they were doing. Every review, every decision, every judgment call. They wrote down the criteria they were applying without realizing it. They mapped the invisible standards that lived in their head onto paper.",
      },
      {
        type: "paragraph",
        text: "Then they taught those standards to two people on their team. Then they built a review checklist from those standards. Then they stepped out of the loop for one category of work and watched.",
      },
      {
        type: "paragraph",
        text: "The work came back at 85% of their standard. Which is not the same as their standard, but it is a starting point. They gave specific feedback. The checklist was updated. The next round came back at 92%. Three months later, they were out of the loop entirely for that category.",
      },
      {
        type: "pullquote",
        text: "The goal is not to find someone who does it like you. The goal is to build a system that produces the outcome you need.",
      },
      {
        type: "paragraph",
        text: "Delegation is the result of operational infrastructure, not a leap of faith. Build the infrastructure. Document the standard. Give people the authority and the feedback loop they need. Then, and only then, let go.",
      },
      {
        type: "emphasis",
        text: "The bottleneck is never the team. It is almost always the system they are working inside of.",
      },
    ],
  },
  {
    slug: "clarity-competitive-advantage",
    category: "Philosophy",
    title: "Clarity Is a Competitive Advantage",
    date: "April 15, 2026",
    readTime: "5 min read",
    excerpt: "In a world of constant noise, the person who can think clearly and communicate precisely holds an edge that compounds over time.",
    thumbnail: {
      gradient: "linear-gradient(135deg, #0A0A0A 0%, #3d2800 100%)",
      icon: "💡",
      label: "Philosophy",
    },
    content: [
      {
        type: "paragraph",
        text: "Two people leave the same meeting. The meeting lasted ninety minutes. It covered strategy, quarterly targets, team structure, and three open questions that needed resolution. Both people were present for all of it. Both took notes. Both nodded at the appropriate moments.",
      },
      {
        type: "paragraph",
        text: "One person walks out knowing exactly what the three most important decisions are, who owns each one, what information is still missing, and what their specific next action is. The other person walks out feeling broadly informed, vaguely inspired, and quietly uncertain about what to do next.",
      },
      {
        type: "emphasis",
        text: "Same meeting. Same information. Completely different outcomes.",
      },
      {
        type: "paragraph",
        text: "That gap is clarity. And over time, that gap becomes everything.",
      },
      {
        type: "subheading",
        text: "What Clarity Actually Is",
      },
      {
        type: "paragraph",
        text: "Clarity is not intelligence. Plenty of intelligent people operate in fog. Clarity is not confidence either, though the two often travel together. Clarity is the ability to cut through the volume of information, conversation, and competing demands and identify what is actually true, what is actually important, and what actually needs to happen next.",
      },
      {
        type: "paragraph",
        text: "It is the ability to name things precisely. To say not just that something is wrong but to say what specifically is wrong and why. To say not just that a decision needs to be made but to define clearly what the decision is, what it depends on, and who should make it.",
      },
      {
        type: "pullquote",
        text: "Vague thinking produces vague results. Precise thinking produces precise outcomes.",
      },
      {
        type: "subheading",
        text: "Why It Compounds Over Time",
      },
      {
        type: "paragraph",
        text: "The advantage of clarity is not visible in a single moment. It shows up in the aggregate. The person with clarity makes better decisions consistently, not occasionally. They ask sharper questions in the room, which means they surface better information. They communicate with precision, which means they waste less time in misalignment. They identify problems earlier, which means they solve them when they are still small.",
      },
      {
        type: "paragraph",
        text: "Over twelve months, that consistency translates into a meaningful gap in outcomes. Over five years, the gap is enormous. The person who operates with clarity does not just outperform in moments of crisis. They outperform in the ordinary, repeated, unremarkable moments that make up most of a working life.",
      },
      {
        type: "paragraph",
        text: "That is what compounding looks like outside of finance. Small advantages, applied consistently, produce large outcomes over time.",
      },
      {
        type: "subheading",
        text: "Three Places Clarity Shows Up First",
      },
      {
        type: "paragraph",
        text: "In conversation, clarity shows up as the ability to say precisely what you mean and to ask precisely what you need to know. Not more. Not less. The person who can do this moves faster than the person who thinks out loud, backtracks, over-explains, and circles back.",
      },
      {
        type: "paragraph",
        text: "In decisions, clarity shows up as the ability to name what the actual choice is. Most decisions are obscured by noise, by emotion, by competing framings. The person who can strip all of that away and identify the real decision, the real options, and the real trade-offs makes faster and better choices.",
      },
      {
        type: "paragraph",
        text: "In execution, clarity shows up as the ability to define what done looks like before the work starts. This seems simple. It is not common. Most work begins without a shared, precise definition of the outcome. The result is rework, misalignment, and wasted effort. The person who builds clarity at the start saves everything at the end.",
      },
      {
        type: "subheading",
        text: "How to Build It",
      },
      {
        type: "paragraph",
        text: "Clarity is a practice, not a personality trait. It is built through the habit of naming things. Of writing down what you actually think, not what you half-think. Of asking yourself: what is the real question here? What would need to be true for this to work? What am I assuming that I have not tested?",
      },
      {
        type: "paragraph",
        text: "It is built through the discipline of completing your thoughts before you speak them. Through reading slowly and carefully enough to understand not just what something says but what it means. Through the willingness to sit with a problem long enough to see it clearly rather than reaching for the first available answer.",
      },
      {
        type: "paragraph",
        text: "In a world that moves fast and rewards the appearance of confidence, real clarity is rare. That is precisely what makes it valuable.",
      },
      {
        type: "emphasis",
        text: "Think clearly. Communicate precisely. Decide with conviction. That edge does not expire.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
