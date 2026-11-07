/* ==== official.js ====
   Points from the official Anthropic Partner Academy (Skilljar) course that the
   lessons above missed, plus corrections where a lesson disagrees with it.
   Source: denzil05/claude_learning (notes taken directly from the Skilljar course).
   Block format is the same as lesson blocks. Two extra callout variants:
     variant "official" = added from the official course
     variant "fix"      = the lesson above says something different; trust this one
*/
window.CA = window.CA || {};
window.CA.official = window.CA.official || {};

/* ===================== Course 1 · Platform & Model Foundations (official M1) ===================== */
Object.assign(window.CA.official, {

  m3l1: [
    {t:"callout", variant:"fix", title:"Correction: long chats are auto-summarised, not just cut off",
     body:"<p>The official course says that near the context limit, claude.ai <strong>automatically summarises earlier messages</strong> (on paid plans with Code Execution turned on). The summary squeezes out detail, so an instruction from minute 10 can lose its force by minute 90.</p><p>The practical lesson is the same: early instructions can stop working, and that is <strong>not Claude ignoring you</strong>. But if a question asks what happens near the limit, the official answer is <strong>auto-summarisation (also called compaction)</strong>.</p>"},
    {t:"callout", variant:"official", title:"Official wording: 'context is a budget'",
     body:"<ul><li>The four decisions before the first prompt (entry point, capability layer, model, context management) set the <strong>quality ceiling</strong> of a session.</li><li>For the training cutoff, the three fixes are: <strong>connect a source</strong>, <strong>web search</strong> in chat, or <strong>Research</strong>.</li><li>Module motto: <strong>variation is inherent; review is structural</strong>. A Skill reduces variance, it does not remove the need for review.</li></ul>"}
  ],

  m3l2: [
    {t:"callout", variant:"fix", title:"Correction: the official Project test is 2 out of 3, not 2 out of 5",
     body:"<p>The official course uses <strong>three</strong> questions:</p><ol><li>Does the task <strong>recur</strong>?</li><li>Is the background context <strong>stable</strong>?</li><li>Is the output format <strong>consistent</strong>?</li></ol><p><strong>Yes to 2 or more → build the Project.</strong> Setup time pays back in <strong>2–3 sessions</strong>. 'Several people need it' and 'same files reused' are good reasons, but they are not part of the official test.</p><p><em>Exam pattern:</em> a task that recurs and has a fixed format, but whose background changes every time, still gets a Project (2 of 3 hold).</p>"},
    {t:"callout", variant:"official", title:"Details the exam can test",
     body:"<ul><li><strong>Chats inside one Project do not share context with each other.</strong> They share only the instructions and the knowledge base.</li><li><strong>Chat</strong> is saved to history, and Memory can carry some context, but it has no standing instructions or knowledge base.</li><li><strong>Artifact</strong> = a deliverable the recipient opens and reads (draft doc, table, report, code). Answers you act on inside the chat stay inline.</li><li><strong>Web search</strong> is on <strong>all plans</strong> as a per-chat toggle. On <strong>Team/Enterprise</strong>, an <strong>Owner or Primary Owner</strong> must first enable it for the workspace.</li><li><strong>Research</strong> = deep multi-source work, <strong>paid plans</strong>, needs web search on. For a quick current fact, use the web search toggle instead.</li><li>Worked example: a weekly status report went from 40 to 25 minutes once a Project removed the 'setup tax' of pasting background.</li></ul>"}
  ],

  m3l3: [
    {t:"callout", variant:"fix", title:"Correction: the official four layers include Projects",
     body:"<p>The official course lists the capability layers as:</p><table><tbody><tr><td><strong>Projects</strong></td><td>carry <strong>context</strong> (background + standing instructions)</td></tr><tr><td><strong>Skills</strong></td><td>define <strong>procedures</strong> (how a task is done, every time)</td></tr><tr><td><strong>Code Execution</strong></td><td><strong>verifies computations</strong></td></tr><tr><td><strong>Memory</strong></td><td>keeps <strong>continuity</strong> across sessions</td></tr></tbody></table><p>Connectors and uploads are covered elsewhere (Configuration). If a question asks for 'the four layers', use this list. The layers are independent: a one-off question uses none, a recurring analysis may use all four.</p>"},
    {t:"callout", variant:"official", title:"Skills, Code Execution and Memory: the testable details",
     body:"<ul><li>⭐ <strong>Skills live at the account level, not inside a Project.</strong> Claude uses them automatically in any chat, inside or outside a Project.</li><li>Third-party Skills need a <strong>trust check</strong>: a Skill can reach whatever you give Claude access to. Anthropic and org-approved Skills are lower risk.</li><li><strong>Use Code Execution for any number that will be reported</strong>, plus data cleaning, charts and real downloadable files (.xlsx, .pptx, .docx, .pdf). Prose gives plausible numbers; code gives verified ones. 'Ask in chat and check it yourself' is the tempting wrong answer.</li><li><strong>Curate Memory at least monthly.</strong> Stale memory can actively mislead.</li><li><strong>Project-scoped Memory</strong> keeps each Project's memory separate. For client separation, use <strong>separate Projects + Project-scoped Memory</strong>.</li><li><strong>Incognito</strong> keeps a chat out of Memory and history, works <strong>only outside Projects</strong>, and does <strong>not</strong> change your organisation's data retention. Incognito is not the answer to client separation.</li><li><strong>Memory import</strong> from other AI tools is experimental and not on Enterprise. Fallback: add the key facts to Memory by hand, not to a Project knowledge base.</li></ul>"},
    {t:"callout", variant:"exam", title:"Official mapping exercise: which layer?",
     body:"<ul><li>A directive for every chat ('flag clauses that depart from the playbook') → <strong>standing instructions</strong></li><li>A repeatable output format → <strong>Skill</strong></li><li>A stable reference document → <strong>knowledge base</strong></li><li>A calculation that must be right → <strong>Code Execution</strong></li><li>Something to carry across sessions → <strong>Memory</strong></li></ul>"}
  ],

  m3l4: [
    {t:"callout", variant:"official", title:"Official model descriptions",
     body:"<ul><li><strong>Haiku</strong>: fastest, most efficient. Classification, extraction, formatting at high volume, where an imperfect single output costs little. Use it for clear-rubric sorting even of legal documents; Opus only if nuanced judgement is needed.</li><li><strong>Sonnet</strong>: balanced, ⭐ the default for most knowledge work.</li><li><strong>Opus</strong>: highest capability, for nuanced judgement and ambiguous inputs. <strong>Slower</strong> and uses more usage per call.</li><li><strong>Cost</strong>: on metered plans (including the API), the trade-off is per-call cost. On normal subscriptions, think of it as speed plus usage headroom.</li><li>The official course does not teach version numbers. Learn the three tiers, not the numbers.</li></ul>"}
  ],

  m3l5: [
    {t:"callout", variant:"official", title:"Official details on context and usage limits",
     body:"<ul><li>The best single fix for a long chat that has drifted: <strong>a new chat plus a pasted summary</strong>. Repeating the instruction or switching to Opus are the tempting wrong answers.</li><li><strong>Restart</strong> is for drift beyond recovery or a genuinely new task.</li><li>Usage limits run on several windows: a short <strong>rolling session window</strong>, <strong>weekly limits</strong> on paid plans, and a <strong>separate weekly pool for the top model</strong>. Plan for it: split big tasks, save progress to the knowledge base, restart from a summary.</li></ul>"},
    {t:"callout", variant:"exam", title:"Official scenario answers",
     body:"<ul><li>Competitor launches in the last 90 days → <strong>Research</strong> (after the training cutoff)</li><li>Weekly notes in a fixed format → <strong>Project + Skill</strong></li><li>15-page board analysis from 4 ambiguous reports → <strong>Project + Artifact + Opus</strong></li><li>800 survey responses, rates by department → <strong>Code Execution</strong> (Haiku or Sonnet)</li><li>Quick one-off vendor reply → <strong>Chat</strong></li></ul>"}
  ]
});

/* ===================== Course 2 · Prompting & Task Execution (official M2) ===================== */
Object.assign(window.CA.official, {

  c2l1: [
    {t:"callout", variant:"fix", title:"Correction: the official course teaches FIVE components, not six",
     body:"<p>The official 'component stack' is <strong>Role, Context, Task, Constraints, Output format</strong>. Examples are a useful extra, but they are not one of the official five. If a question asks for the components, answer with these five.</p><table><tbody><tr><td><strong>Role</strong></td><td>who Claude is for this task; sets vocabulary, depth, assumptions</td></tr><tr><td><strong>Context</strong></td><td>background Claude can't know. ⭐ <strong>The component most often left out</strong>, and the #1 reason prompts underperform</td></tr><tr><td><strong>Task</strong></td><td><strong>one primary verb</strong>, stated clearly (summarise, compare, draft, identify)</td></tr><tr><td><strong>Constraints</strong></td><td>length, tone, include/exclude, avoid</td></tr><tr><td><strong>Output format</strong></td><td>table, bullets, memo, email; stating it up front <strong>saves an iteration</strong></td></tr></tbody></table>"},
    {t:"callout", variant:"official", title:"Official framing",
     body:"<ul><li>This module trains the 4D competency <strong>Description</strong>: telling Claude precisely what you want.</li><li><strong>Consistent quality comes from structure, not cleverness or luck.</strong> 'The model didn't get smarter; the prompt did.'</li><li>A quick question needs a Task and maybe a Constraint. A <strong>client deliverable needs all five</strong>.</li><li>Claude can't see your inbox, org chart or last meeting unless a <strong>Connector</strong> links it, and even then only what you allowed.</li><li>The five components double as a <strong>diagnostic checklist</strong>: missing context → generic output; unclear verb → wrong action; no constraints → wrong length or tone.</li><li>'Make it sound professional and polished' does <strong>not</strong> repair any gap. It is vague and doesn't fill a missing component.</li></ul>"}
  ],

  c2l2: [
    {t:"callout", variant:"fix", title:"Nuance: one conversation or several?",
     body:"<p>The lesson says to keep every step in one chat. The official rule is more precise:</p><ul><li><strong>Same conversation</strong> for steps that build on each other, so each step sees the earlier results.</li><li><strong>Separate conversation</strong> when a step is <strong>independent</strong>, or when the chat is so long that early context is degrading.</li></ul><p>Five separate chats with <strong>no shared criteria</strong> is not real decomposition.</p>"},
    {t:"callout", variant:"official", title:"Official points to add",
     body:"<ul><li>One giant prompt does every stage <strong>shallowly</strong> and <strong>hides the reasoning</strong>. Steps make the work <strong>auditable</strong>.</li><li>Each step gives a <strong>checkable intermediate result</strong>, the official term for the lesson's 'artefact'.</li><li>⭐ <strong>Parallel case</strong>: one dense policy must become a staff announcement, an FAQ and an exec briefing. First <strong>extract</strong> the real changes and <strong>confirm the extraction is complete</strong>, then draft the three documents. Otherwise one misreading spreads into all three.</li><li>'Recommend first, then justify' is backwards. Criteria come first.</li></ul>"}
  ],

  c2l3: [
    {t:"callout", variant:"official", title:"Official symptom → fix rules",
     body:"<ul><li><strong>Generic output → add context.</strong> Not 'try harder', not 'switch model', not 'run it several times'.</li><li><strong>Wrong length or tone → adjust constraints and format.</strong> Not a full rewrite, which throws away what worked.</li><li><strong>Close, but one section is off → revise that section only.</strong></li><li><strong>A computed number looks wrong → tell Claude to use code execution.</strong> Averaging three recalculations is still generated arithmetic.</li><li><strong>When to stop</strong>: the official term is <strong>convergence</strong> (diminishing returns). When extra rounds only bring tiny changes, finish with a quick manual edit. The goal is a usable result, not a perfect prompt.</li></ul>"}
  ],

  c2l4: [
    {t:"callout", variant:"official", title:"Official 'latitude' levels",
     body:"<table><tbody><tr><td><strong>Analysis</strong></td><td>low latitude, high specification (also say how to handle ambiguity)</td></tr><tr><td><strong>Research</strong></td><td>tighten question, scope, sources, citations. Quick current fact → web search in chat; deep → Research (paid)</td></tr><tr><td><strong>Drafting</strong></td><td>medium: you set the shape, Claude fills it</td></tr><tr><td><strong>Brainstorming</strong></td><td>high: ask for <strong>volume and range first, then narrow</strong></td></tr></tbody></table><p>Summary line: <strong>analysis wants constraints, brainstorming wants latitude.</strong></p>"},
    {t:"callout", variant:"exam", title:"Official checkpoint traps",
     body:"<ul><li>A brainstorm with heavy rules (one word, under 8 letters, avoid 12 terms) is a <strong>Task / strategy error</strong>: the wrong approach for the task type. It is not 'missing constraints'.</li><li>'Make this better' with a draft → the <strong>Task</strong> is unclear. Name the dimension (shorter? more formal?).</li><li>'Everything you know about supply-chain risk' → missing <strong>Constraints</strong> (scope).</li><li>Citations are checkable when they come from a <strong>grounded source</strong> (web search or Research). Citations from training memory look just as confident, so verify them independently.</li></ul>"}
  ]
});

/* ===================== Course 3 · Evaluating & Validating Output (official M3) — 21% of the exam ===================== */
Object.assign(window.CA.official, {

  c3l1: [
    {t:"callout", variant:"official", title:"Accountability stays with you",
     body:"<p>The official module opens with this: <strong>you own every claim you ship, whoever wrote it.</strong> Responsibility does not move to the tool.</p><p>It also explains <strong>why</strong> checking is worth it (the <em>asymmetry</em>): the time Claude saves is small and you see it right away; the cost of an unchecked error is large and <strong>arrives later</strong>, paid in someone's trust. Course example: 1 made-up growth rate among 5 statistics in a client deck, caught by the client's analyst in the meeting.</p>"},
    {t:"callout", variant:"official", title:"Discernment vs Diligence (official definitions)",
     body:"<ul><li><strong>Discernment</strong> = <em>how</em> you review (against requirements, sources, standards).</li><li><strong>Diligence</strong> = <em>why and when</em> you must review, and taking responsibility for the result.</li><li>Run the <strong>same check every time</strong>, so quality doesn't depend on how rushed you are.</li><li><strong>Decide the stakes first</strong>, then the review depth. The risk is giving everything the same casual review.</li></ul>"},
    {t:"callout", variant:"exam", title:"Official worked verdicts",
     body:"<ul><li>Competitor pricing pulled from PDFs dropped a 'minimum 10 seats' condition → <strong>needs revision</strong>. Fix: re-prompt restricted to the source files, not a full rewrite.</li><li>Low-stakes internal process options → <strong>ready to use</strong>. Over-checking wastes the time saved.</li><li>Compliance-gap analysis where the regulation was <strong>not uploaded</strong> (Claude used its training memory, which may be outdated) → <strong>needs human override</strong>. 'A useful prompt for an expert, not a substitute.'</li><li>A completeness review is a <strong>separate check against your requirements</strong>. Asking Claude 'did you leave anything out?' and trusting the answer is not a completeness review.</li></ul>"}
  ],

  c3l2: [
    {t:"callout", variant:"official", title:"Official wording for the failure patterns",
     body:"<ul><li><strong>Plausible is not verified.</strong></li><li><strong>Plausible-but-unsupported claims</strong> are the most dangerous kind, because nothing looks wrong.</li><li><strong>Fabricated specifics</strong>: <em>'the precision is the tell'</em>. An uncited '63%' is a number-shaped guess.</li><li><strong>Confident tone masking uncertainty</strong>: Claude rarely hedges in proportion to how sure it is. Example: 'Is this clause enforceable in our state?' depends on location and date.</li><li><strong>Internal contradictions</strong> hide in long outputs ($2B on page 2, $2.6B on page 8). Long outputs need a <strong>consistency pass</strong>.</li><li><strong>Completeness failures</strong> concentrate where attention is lowest, e.g. the most important file in a batch gets skipped.</li><li><strong>Capability hallucination</strong>: in claude.ai, Claude only acts through tools it was given. Treat any claimed external action ('I've emailed your team') as <strong>unverified until you confirm it</strong>.</li></ul>"}
  ],

  c3l3: [
    {t:"callout", variant:"official", title:"Official extras for the six techniques",
     body:"<ul><li>The official goal is to <strong>build verification into the prompt</strong>. Restricting to sources turns generation into <strong>bounded retrieval</strong>.</li><li><strong>Best-of-N</strong> (re-run and compare): agreement = more confidence; differences = <strong>soft spots</strong> for human review. It finds weak spots; it does <strong>not prove truth</strong>.</li><li>Validate against an <strong>authoritative source, not a second Claude answer</strong>.</li><li><strong>Claude for Excel</strong> gives <strong>cell-level citations</strong> (figures linked to cells).</li><li>Averaging 5 runs does not ground anything. For 'answer strictly from this contract': restrict to the document + allow 'I don't know' + require clause citations.</li></ul><p><strong>Official checklist:</strong> uncertainty allowed? restricted to sources? auditable citations? high-stakes claims checked against an authority?</p>"}
  ],

  c3l4: [
    {t:"callout", variant:"official", title:"Iteration vs escalation: the flat curve",
     body:"<p>When more rounds of prompting stop improving a high-stakes output (<strong>diminishing returns</strong>), stop prompting and go to a <strong>human expert</strong>. Prompting can't manufacture judgement.</p><p>⭐ <strong>The escalation signal is the flat improvement curve, not a visible error.</strong> Course example: a client proposal after 5 rounds with flat improvement → stop and escalate.</p>"},
    {t:"callout", variant:"official", title:"Official do-not-ship-without-review list",
     body:"<p>Decide it <strong>in advance</strong> and treat it as fixed:</p><ul><li>Final <strong>client deliverables</strong></li><li><strong>Audit-critical or financially material calculations</strong></li><li><strong>Regulated, confidential or highly sensitive data</strong></li><li><strong>Public or legal communications</strong> with lasting consequences</li></ul><p>Scenario: a board financial summary that 'looks fine' trips 3 thresholds → human reviewer <strong>plus a recompute with code execution</strong>.</p>"}
  ],

  c3l5: [
    {t:"callout", variant:"official", title:"Official points to add",
     body:"<ul><li>Motto: <strong>'Claude drafts; you deliver.'</strong> An accurate draft is still not finished.</li><li>Clarity pass: cut hedging and filler. Claude leans toward thoroughness; editing leans toward precision.</li><li>Third audience: <strong>external readers</strong>. Control <strong>what is disclosed</strong> and how it is framed.</li><li><strong>Compare outputs before editing</strong>: generate several drafts (different runs or models) and pick the strongest base. Cheaper than rescuing a weak draft.</li><li>One analysis for execs and the working group → <strong>two versions</strong>, same facts.</li></ul>"}
  ],

  c3l6: [
    {t:"callout", variant:"official", title:"Code execution is checkable, not infallible",
     body:"<p>The official term is the <strong>verified-output path</strong>. Running code is deterministic, <strong>but Claude writes the code, so the logic can still have bugs</strong>. The guarantee is that you can read, check and re-run it. Prose '$4.7M' is a guess; code gives '$4,712,380', traceable to rows.</p><p>A subtotal that doesn't match its line items → <strong>recompute with code execution and resolve before use</strong>. Never 'submit now, flag later'.</p>"},
    {t:"callout", variant:"official", title:"Curate your inputs: removing matters as much as adding",
     body:"<ul><li><strong>De-duplicate</strong> sources.</li><li><strong>Label</strong> each input's role ('this is the approved policy; these are drafts').</li><li><strong>Prune</strong> irrelevant material: noise in, noise out.</li></ul><p>A muddled summary from six near-duplicate files → de-dupe, prune, label, re-run. <strong>Not</strong> a bigger model.</p>"},
    {t:"callout", variant:"exam", title:"Official triage exercise",
     body:"<ul><li>Internal brainstorm labelled as a starting point → <strong>ready to use</strong></li><li>Total doesn't equal the sum of the line items → <strong>needs revision</strong> (recompute with code)</li><li>3 statistics with no checkable source → <strong>needs revision</strong> (require citations / validate)</li><li>Regulatory filing summary, spot-checks fine → <strong>needs human override</strong>, mandatory expert review <em>however clean it looks</em></li></ul>"}
  ]
});

/* ===================== Course 4 · Workflow Integration & Solution Design (official M4) — 16% ===================== */
Object.assign(window.CA.official, {

  c4l1: [
    {t:"callout", variant:"official", title:"The official framing for this whole module",
     body:"<ul><li><strong>'I use Claude'</strong> (a personal habit) is not the same as <strong>'our workflow uses Claude'</strong> (a repeatable team process where Claude does specific steps every time).</li><li>⭐ <strong>Workflow value comes from deciding which steps to delegate, not from automating everything.</strong></li><li>Course story: two teams, same contract-review tool. Team 1: Claude drafts, a <strong>lawyer owns every final decision</strong> → review time halved, quality held. Team 2: Claude approved low-risk clauses <strong>unsupervised</strong> → a missed obligation → tool pulled.</li><li>The 4D competency for this module is <strong>Delegation</strong>.</li></ul>"},
    {t:"callout", variant:"official", title:"Requirements: official details",
     body:"<ul><li>Ask for a <strong>structured analysis (a table), not a narrative summary</strong>.</li><li>Turn a vague need ('better reporting') into task definitions: <strong>what report, for whom, how often, from what data, in what format</strong>.</li><li>⭐ <strong>Pressure-test</strong>: have Claude challenge its own list. Which items are ambiguous, readable two ways, or only <strong>implied indirectly</strong>? This surfaces <strong>hidden requirements</strong>. It is Discernment applied at the requirements stage.</li><li>Ambiguity test: 'handle a <em>large number</em> of concurrent users' is ambiguous (no number). 'Reset email within 5 minutes' is testable.</li></ul>"}
  ],

  c4l2: [
    {t:"callout", variant:"official", title:"Synthesis steps vs judgement steps",
     body:"<ul><li>⭐ Pair synthesis with <strong>code-executed analysis</strong>, so the plan rests on numbers that were <strong>computed, not generated</strong>. Not prose estimates, Research averages or training recall.</li><li><strong>Synthesis steps</strong> (weighing many considerations) are where Claude adds the most.</li><li><strong>Judgement steps</strong> (risk appetite, politics, budget, a hiring freeze) <strong>stay human</strong>.</li><li>Capacity-plan example: Claude recommends headcount <strong>and shows its assumptions</strong>, so the plan is defensible line by line.</li></ul>"}
  ],

  c4l3: [
    {t:"callout", variant:"official", title:"Official points",
     body:"<ul><li>Claude is a <strong>design collaborator, not a vending machine</strong>. Loop: <strong>ideate → prototype → feedback → refine</strong>, inside a Project.</li><li>The course's dashboard was built as a web Artifact in 3 cycles with <strong>no code written by the team</strong>.</li><li>⭐ Escalation: when a solution becomes <strong>a system others depend on</strong> (uptime, security, integrations), it has <strong>outgrown Associate scope</strong> → bring in <strong>Developer or Architect</strong> expertise. An Artifact for a small team is fine; one that 3 departments rely on daily → escalate.</li></ul>"}
  ],

  c4l4: [
    {t:"callout", variant:"fix", title:"Note: the official mapping uses 3 criteria",
     body:"<p>In the official Workflow module, each step is judged on <strong>three</strong> criteria: <strong>reversibility, stakes, accountability</strong>. Data sensitivity is real and can block a step on its own, but it is taught in the <strong>Governance</strong> module. If a question asks for 'the three delegation criteria', answer reversibility, stakes, accountability.</p><p>⭐ <strong>Accountability doesn't delegate, even when drafting does.</strong></p>"},
    {t:"callout", variant:"official", title:"Official extras",
     body:"<ul><li>⭐ <strong>Over-delegation</strong>: giving AI more than the risk justifies. <strong>Drafting quality is not a licence to delegate the decision.</strong></li><li><strong>Collapsing collaborative into automate</strong>: if no reviewer is actually assigned, 'AI drafts, human reviews' is really automation.</li><li>After mapping, embed features: <strong>Skill</strong> for repeatable procedure steps, <strong>code execution</strong> for numeric steps. 'Consistency from a configured Skill beats heroic prompting.' Human-retained steps become <strong>explicit review gates</strong>.</li><li>Second official example (onboarding): pull HRIS data → AI (code); draft offer from template → AI (Skill); personalise the welcome note → collaborative; <strong>confirm pay matches the approved request → human</strong>; <strong>send the signed offer → human</strong>.</li><li>The pattern repeats everywhere: mechanical and draft steps delegate; confirming figures and irreversible actions stay human.</li></ul>"}
  ],

  c4l5: [
    {t:"callout", variant:"official", title:"Match the message to the audience",
     body:"<ul><li><strong>Legal or technical lead</strong>: feature detail plus <strong>failure modes</strong> (e.g. it can miss obligations implied indirectly).</li><li><strong>Executive</strong>: <strong>outcome + oversight + risk posture</strong> ('review time down about half, same approval standard, a lawyer approves every change').</li><li><strong>Client risk function</strong>: <strong>assurance</strong> ('a qualified human approves every term; nothing is sent without sign-off').</li><li>Also an overstatement: <strong>'as good as a person at Y'</strong>. 'Claude handles X' quietly removes the human gate from the sentence.</li><li>This is the Description competency pointed <strong>outward</strong>, at stakeholders.</li></ul>"},
    {t:"callout", variant:"fix", title:"Official answer for the expense-report exercise",
     body:"<p>The official answer marks <strong>'check expenses against travel policy' as Collaborative</strong> (AI flags, a human confirms edge cases), with a <strong>Skill</strong> holding the policy rules. Extracting receipt details uses a <strong>Skill</strong>; totals use <strong>Code Execution</strong>; approving and submitting stay <strong>human</strong>.</p>"}
  ]
});

/* ===================== Course 5 · Configuration & Knowledge Management (official prep course 5) — 12% ===================== */
Object.assign(window.CA.official, {

  c5l1: [
    {t:"callout", variant:"official", title:"Official framing: using vs operating Claude",
     body:"<ul><li><strong>Using</strong> Claude = a good prompt today. <strong>Operating</strong> Claude = an environment where context, instructions and procedures are already in place.</li><li>⭐ <strong>Configuration is leverage</strong>: set it up once, benefit in every conversation. It turns one person's skill into <strong>team capability</strong>; without it, answers <strong>drift</strong>.</li><li>⭐ <strong>The most common configuration mistake</strong>: a <strong>procedure written into the instructions</strong>, or a <strong>behaviour rule stored in the knowledge base</strong>.</li><li><strong>Knowledge vs Memory</strong>: a stable reference fact → knowledge; an evolving record of Project decisions → Memory.</li><li>⭐ <strong>Pairing rule</strong>: many needs span <strong>two slots wired together</strong>, e.g. a status-report Skill (procedure) + the brand guide it formats against (knowledge).</li><li>Skills are found at <strong>account level, under Customize</strong>, and work in any Project. Share a client Project with the team on <strong>Team/Enterprise</strong>.</li><li>Keeping two competing clients apart → <strong>separate Projects + scoped Memory</strong>. Not one Project with careful prompting, not Memory off, not different models.</li></ul>"}
  ],

  c5l2: [
    {t:"callout", variant:"official", title:"Official connector pitfalls",
     body:"<ul><li>Keep the connected set <strong>deliberate</strong>, not 'connect everything'.</li><li>Hitting a capability boundary gives a <strong>confusing failure, not a clear error</strong>. Learn each connector's boundary <strong>before</strong> building a workflow on it.</li><li>⭐ <strong>Look-alike connectors</strong>: the obvious 'add connector' path may lead to a <strong>public directory</strong> instead of your organisation's <strong>vetted</strong> connectors. Confirm the right path with your admin, especially on Team/Enterprise.</li><li>Boundary confusion can misroute fixes: it looks like a bug, gets reported to the wrong team, and the fix stalls. (The course marks this as field-reported, not documented.)</li><li>When you add a new policy version, <strong>remove the old ones</strong> in the same step.</li></ul>"}
  ],

  c5l3: [
    {t:"callout", variant:"official", title:"Official test for an instruction",
     body:"<p>⭐ <strong>Would two different people read this instruction the same way?</strong> If not, it will silently fail.</p><ul><li>❌ 'Be professional' / 'Make the reports good and accurate'</li><li>✅ 'Formal register, define acronyms on first use, paragraphs under 4 sentences'</li><li>✅ 'For every figure, state its source; if it isn't in the data, mark it unverified; lead with a one-sentence headline'</li><li>✅ Meeting notes: 'each decision as its own bullet; every action item as owner + due date; unassigned → owner TBD'</li></ul><p><strong>Anticipate use cases</strong>: put the client-deliverable format and guardrails in ahead of need, so first drafts land closer to final.</p>"}
  ],

  c5l4: [
    {t:"callout", variant:"fix", title:"Correction: the official course says export Memory as a backup",
     body:"<p>The lesson says memory has no backup. The official course says: <strong>export Memory as a backup before a major change</strong> (e.g. restructuring a Project), and do a <strong>full reset</strong> when accumulated outdated context would mislead. Otherwise review it periodically and edit or delete stale entries. Accuracy beats volume.</p>"},
    {t:"callout", variant:"official", title:"Skills versioning (often tested)",
     body:"<ul><li><strong>Anthropic-built and org-provisioned Skills update automatically.</strong></li><li><strong>Your own custom-uploaded Skills change only when you re-upload them.</strong></li><li>So: your custom Skill's format looks outdated but the built-in ones are fine → it hasn't been re-uploaded. That is a <strong>maintenance problem, not a prompting problem</strong>.</li></ul><p>Also official: a <strong>monthly pass for active Projects</strong>. The warning sign you waited too long is <strong>quality slipping for no visible reason</strong>. Configuration is <strong>additive</strong>: if Claude didn't capture an important fact, add it explicitly to instructions or Memory instead of re-typing it every session. When an instruction and Memory still say FY25 but the files are FY26, <strong>update both</strong>.</p>"}
  ]
});

/* ===================== Course 6 · Governance, Risk & Responsible Use (official M6) — 15% ===================== */
Object.assign(window.CA.official, {

  c6l1: [
    {t:"callout", variant:"fix", title:"Correction: these four criteria ARE the official ones",
     body:"<p>The lesson says not to cite these as official. They are in the official Governance module: <strong>reversibility, consequence of error, need for human creativity or empathy, accountability</strong>. The official course explains that the Workflow module maps <em>steps</em> with 3 criteria (reversibility, stakes, accountability), and use-case screening <strong>adds human creativity/empathy</strong>. Data sensitivity is handled separately (Green/Yellow/Red, next lessons).</p><p>The criteria <strong>interact</strong>; it is not a pass/fail checklist. A condolence note to a client is low-stakes and reversible, but the <strong>relationship</strong> means a person owns it.</p>"},
    {t:"callout", variant:"official", title:"The load-bearing criterion and 'the gate is the classification'",
     body:"<ul><li><strong>Load-bearing criterion</strong>: the one criterion that, if it changed, would <strong>move the use case into a different class</strong>. Naming it makes your call defensible. 'It feels risky' doesn't travel; 'irreversible consequence + non-transferable accountability' does.</li><li>⭐ <strong>'The gate is the classification.'</strong> The most common mistake is the label without a gate. A defined gate says <strong>who</strong> reviews (the role with accountability, not whoever is free), <strong>what</strong> they check (accuracy, fairness, policy), and <strong>when</strong> (<strong>before</strong> the output is used).</li><li>✅ 'A manager reviews the shortlist for adverse-impact patterns before any candidate is contacted.' ❌ 'We'll keep a human in the loop.'</li><li>If you can't state who/what/when, it is <strong>not ready to run</strong>.</li><li>Official example: drafts for billing-complaint replies → <strong>appropriate with human review</strong>; load-bearing = <strong>accountability</strong>; gate = a support agent checks each draft against the <strong>account record</strong> before sending.</li><li>Final, unreviewed benefits-eligibility decisions → <strong>inappropriate</strong>.</li></ul>"}
  ],

  c6l2: [
    {t:"callout", variant:"official", title:"Skills don't request permissions",
     body:"<p>A Skill <strong>inherits whatever access the session already has</strong>. So 'it only uses what it needs' is the wrong assumption. Ask what it <em>could</em> reach where it will run, and <strong>audit the bundle</strong> (instructions, dependencies, files). A formatting Skill whose instructions roam beyond formatting is a red flag.</p>"},
    {t:"callout", variant:"official", title:"Official trust-check details",
     body:"<ul><li>⭐ <strong>'Internal' is not the same as 'vetted'.</strong> A Skill from another internal team may have broad access or be built on old policy. Treat it like software from a sister department.</li><li>A colleague vouching for it is not a trusted source. A Skill from a public forum → <strong>don't enable it without org review</strong>.</li><li>Three outcomes: <strong>Enable</strong> (all clear), <strong>Escalate</strong> (useful but unknown source or broad permissions → admin/security review), <strong>Decline</strong> (clearly disproportionate, or the source can't be established).</li><li>Failing the check doesn't mean never use it. It means <strong>don't enable it on your own authority</strong>.</li><li>⭐ <strong>Least privilege</strong>: grant the narrowest access that does the job; revisit when the job changes. Same habit for connectors and integrations.</li></ul>"}
  ],

  c6l3: [
    {t:"callout", variant:"official", title:"Official data rules the exam likes",
     body:"<ul><li>⭐ <strong>Classify before you upload.</strong> Unsure → <strong>ask before uploading</strong>. Unsure between two tiers → <strong>treat it as the more sensitive one</strong>.</li><li>Green/Yellow/Red is the model the official course teaches, so expect exam questions phrased with it.</li><li>Two redaction failures: <strong>partial redaction</strong> (name gone, but account number, rare job title or a specific date still identifies the person) and <strong>redaction that breaks the task</strong> (if the work needs the specifics, confirm an approved path or keep it out).</li><li>⭐ <strong>Incognito</strong> keeps a chat out of history and Memory, but it <strong>still follows org data retention and can appear in org data exports</strong>. Memory exclusion and data retention are <strong>separate controls</strong>.</li><li>⭐ <strong>Org-level Memory controls: Team plans have none. On Enterprise, Owners and Primary Owners</strong> hold them (including turning memory off org-wide).</li><li>Different entry points may handle retention differently, depending on org setup → ask first.</li></ul>"},
    {t:"callout", variant:"exam", title:"Official worked decisions",
     body:"<ul><li>Anonymised survey data → Green: upload, use code execution for counts</li><li>Confidential M&A document → Yellow: check policy, then Incognito. If policy forbids that entry point, it stays out.</li><li>Customer personal-data spreadsheet → redact/anonymise first, or keep it out and confirm the approved path</li><li>Patient records → Red: is this entry point approved for patient data? If not confirmed → <strong>stop and escalate to the admin</strong></li></ul><p>Order of questions: <strong>'Is this allowed here?'</strong> comes before 'how do I handle it here?'</p>"}
  ],

  c6l4: [
    {t:"callout", variant:"official", title:"Official framing: risk lives in the gap",
     body:"<ul><li>⭐ <strong>Governance is a practitioner skill</strong>, exercised one decision at a time, not a policy binder on a shelf. One bad use case can <strong>freeze a whole organisation's AI programme</strong>.</li><li><strong>Risk lives in the gap between policy and practice.</strong> A policy followed only when someone is watching is not governance. Divergence = a <strong>Diligence gap</strong>.</li><li><strong>Drift</strong> builds up in routine, low-visibility decisions. Official mini-audit fixes: a reminder about approved entry points; add a Skill-vetting step to Project setup; make the review gate non-negotiable.</li><li>⭐ <strong>Shadow use</strong> (personal accounts because the approved tool is slow) → fix by <strong>removing friction so the compliant route is the easy default</strong>. Not banning everything, not only blaming individuals.</li></ul>"}
  ],

  c6l5: [
    {t:"callout", variant:"official", title:"Official points",
     body:"<ul><li><strong>Ethical risk hides in ordinary outputs</strong>, so check it in routine review, not as a separate exercise.</li><li>Bias risk is highest in <strong>people-facing</strong> work (hiring, evaluation, messages to groups). Résumé screening where nobody reviews who was dropped → the main concern is <strong>bias</strong>, not disclosure or IP.</li><li>Structured reasoning for grey areas: who is affected, what could go wrong, what the fair outcome is, what disclosure is needed. <strong>Document it.</strong></li><li><strong>Escalate</strong> to the AI governance/ethics function when the affected group is large, the harm significant, or your team lacks the <strong>standing</strong> to decide. Bring <strong>documented reasoning</strong>, not just a verdict.</li></ul>"}
  ]
});

/* ===================== Course 7 · Troubleshooting & Optimization (official prep course 7) — 10% ===================== */
Object.assign(window.CA.official, {

  c7l1: [
    {t:"callout", variant:"fix", title:"Correction: the official diagnostic sequence has 5 steps",
     body:"<p>The official course teaches <strong>five steps, cheapest fix first</strong>:</p><ol><li>Re-read the prompt against the <strong>five components</strong> (under-specified?)</li><li>Check the <strong>conversation length</strong> (overloaded → restart or summary)</li><li>Check the <strong>feature and model</strong> (needs code execution? complex task on a speed tier?)</li><li>Check the <strong>configuration</strong> (instructions, knowledge, Skills current?)</li><li><strong>Only then</strong> ask whether the task fits at all</li></ol><p>'Task doesn't fit' is the <strong>most expensive conclusion</strong>, so it comes last. The common mistake is jumping straight to 'use the most capable model' or 'impossible'.</p><p>Also: step 2 of the lesson says nothing prunes the conversation for you. The official course says long chats near the limit <strong>are auto-summarised</strong> (see Course 1), which is exactly why early instructions fade.</p>"},
    {t:"callout", variant:"official", title:"Official symptom rules",
     body:"<ul><li>Replace two bad defaults, <strong>giving up</strong> and <strong>thrashing</strong> (changing random things), with the sequence. Most failures become a ~5-minute fix.</li><li><strong>First response wrong = under-specification</strong>, not context overload (overload needs a long session first).</li><li>⭐ <strong>Shallow analysis on a fast, lightweight model = wrong model</strong> → move up a tier. Adding more detail won't fix it.</li><li><strong>Expectation mismatch</strong> ('predict exact Q3 revenue'): no prompt fixes it → <strong>reshape the task</strong> into a range with stated assumptions, or a driver model you can adjust.</li><li>Format drifts after 30 minutes → context overload: restart from a summary, or <strong>persist the format in a standing instruction</strong>.</li></ul>"}
  ],

  c7l2: [
    {t:"callout", variant:"official", title:"Official points: capture what worked",
     body:"<ul><li><strong>Every disappointing output is diagnostic data.</strong></li><li>Turning a reaction into an instruction means naming <strong>which lever controls it</strong>: the prompt, the context loaded, or the configuration. Ask: what would have to be present for this to be right, and which part of the setup controls that?</li><li>⭐ The expensive failure is <strong>finding the fix and then losing it</strong>. Official test: <strong>will this same correction be needed again, by me or someone else?</strong> Yes → put it in configuration.</li><li>⭐ <strong>Memory is not a reliable home for team fixes</strong>: it is per-user and best-effort. Configuration is deliberate, shared and reliable.</li><li>Course story (fix lost): 'exclude internal test accounts' was retyped every month; a colleague covering didn't know, and a report shipped with test data.</li></ul>"}
  ],

  c7l3: [
    {t:"callout", variant:"official", title:"Official optimisation loop",
     body:"<ul><li>Loop: <strong>instrument → find friction → promote the fix into configuration → measure</strong>. Watch one full cycle and write down every manual step you also did last time; that list is your backlog.</li><li>Two moves: <strong>consolidate</strong> steps that can run together; <strong>promote</strong> repeated patterns into Projects and Skills.</li><li>Wrong home = the fix doesn't stick: a procedure squeezed into a one-line instruction loses its steps; reference material crammed into instructions bloats every prompt.</li><li>⭐ <strong>Promote with caution</strong>: run a few cycles with the <strong>old approach still available</strong>, to catch regressions before relying on the new setup.</li><li>Pick the metric that matches <strong>why the workflow matters</strong> (customer-facing → consistency/accuracy; internal draft → time). The metric also tells you when to stop.</li><li>Variance across people → <strong>one shared Skill</strong>, not a faster model and not more reviewers.</li></ul>"}
  ]
});

/* ===================== Course 8 · Course Summary & Exam Frame (official M8) ===================== */
Object.assign(window.CA.official, {

  c8l2: [
    {t:"callout", variant:"official", title:"Official one-liners for each D",
     body:"<ul><li><strong>Delegation</strong>: who does what. Steps → reversibility, stakes, accountability; use cases add human creativity/empathy.</li><li><strong>Description</strong>: say precisely what you want (5 components). Also used <em>outward</em>, when describing value and limits to stakeholders.</li><li><strong>Discernment</strong>: <em>how</em> you review: requirements, sources, standards; completeness checked separately.</li><li><strong>Diligence</strong>: <em>why and when</em> you must review, and owning it. Accountability stays with you.</li></ul>"}
  ],

  c8l3: [
    {t:"callout", variant:"fix", title:"Update: the exam logistics are known (from the official exam guide)",
     body:"<table><tbody><tr><td><strong>Exam code</strong></td><td>CCAO-F (Claude Certified Associate – Foundations)</td></tr><tr><td><strong>Questions</strong></td><td>60, multiple-choice and multiple-response; each item says how many to pick</td></tr><tr><td><strong>Time</strong></td><td>120 minutes, proctored (online or Pearson VUE test centre)</td></tr><tr><td><strong>Pass mark</strong></td><td>720 on a scaled score of 100–1,000</td></tr><tr><td><strong>Fee</strong></td><td>$99 (100% partner discount applied at checkout)</td></tr><tr><td><strong>Validity</strong></td><td>12 months; renewal is free and not proctored</td></tr><tr><td><strong>Style</strong></td><td>scenario-based: it tests <strong>applying</strong> frameworks, not recall</td></tr></tbody></table><p>Anthropic's registration page confirms that updated content starts on <strong>7 December 2026</strong>, with updated guides on <strong>17 November 2026</strong>. If you test before 7 December, the current guide applies.</p>"},
    {t:"callout", variant:"official", title:"Plan & admin facts worth memorising",
     body:"<ul><li>Apps on Free, Pro, Max, Team, Enterprise. <strong>Cowork</strong>: paid plans.</li><li>Context window: <strong>200K+ tokens (~500 pages)</strong>; <strong>up to 1M</strong> on paid plans with supported models.</li><li><strong>Web search</strong>: all plans, per-chat toggle; on Team/Enterprise an Owner/Primary Owner enables it first. <strong>Research</strong>: paid.</li><li><strong>Skills</strong> need <strong>code execution + file creation</strong> turned on; on Enterprise, Owners enable them first.</li><li><strong>Org-level Memory controls</strong>: none on Team; Owners/Primary Owners on Enterprise. <strong>Memory import</strong>: experimental, not on Enterprise.</li><li><strong>Enterprise Search</strong> ('Ask {Org}'): Team/Enterprise only, set up by an Owner; needs Documents + Chat connectors (email optional); shows only what you can access.</li><li><strong>Claude in Chrome</strong>: on for Pro/Max/Team, off on Enterprise until enabled, not on Free.</li><li><strong>Project sharing roles</strong>: Can view / Can edit / Owner. The <strong>Project description is not seen by Claude</strong>.</li><li>Boundary: API integration, agents, tool building → <strong>Claude Developer</strong>; enterprise architecture and governance at scale → <strong>Claude Architect</strong>.</li></ul>"}
  ]
});

/* ===================== Modules 9–11 · AI Capabilities, Claude 101, Cowork ===================== */
/* These three were built directly from the official notes and already match them closely.
   Only small clarifications are added. */
Object.assign(window.CA.official, {

  m1l3: [
    {t:"callout", variant:"official", title:"How this fits with Course 1's 'auto-summarise'",
     body:"<p>Two official courses describe the same limit from different angles. <strong>AI Capabilities</strong> describes the model in general: a fixed-size window that fails like a <strong>cliff</strong>, sometimes with <strong>silent truncation</strong>. <strong>Platform Foundations</strong> describes what <strong>claude.ai</strong> does near the limit: it <strong>auto-summarises earlier messages</strong> (paid plans with code execution on).</p><p>Same lesson either way: early detail loses force, and the fix is <strong>restart, summarise, persist</strong>, not a bigger model. A <strong>larger context window does not help with post-cutoff facts</strong>; that is Knowledge, not Working Memory.</p>"}
  ],

  m6l1: [
    {t:"callout", variant:"official", title:"Also in the official Claude 101 / Cowork material",
     body:"<ul><li><strong>Computer use</strong>: Claude clicks, types and opens apps when no connector exists. It asks permission per app and has a blocklist. <strong>Research preview, Pro & Max.</strong></li><li><strong>Subagents</strong>: parallel background workers, each with its own context.</li><li>Cowork plans: <strong>Pro, Max, Team, Enterprise</strong>. Chat gives you downloads; <strong>Cowork saves to your folder</strong>.</li></ul>"}
  ]
});

/* ===================== Glossary: official terms the app was missing ===================== */
(function () {
  var add = [
    {t:"Accountability (stays with you)", d:"You own every claim you ship, whoever wrote it. Responsibility never transfers to the tool."},
    {t:"Asymmetry (of verification)", d:"Time saved is small and immediate; the cost of an unchecked error is large and arrives later, paid in trust."},
    {t:"Load-bearing criterion", d:"The one criterion that, if it changed, would move a use case into a different classification. Naming it makes the call defensible."},
    {t:"Defined gate", d:"A human review step that states who reviews (the accountable role), what they check, and when (before use). 'Human in the loop' alone is not a gate."},
    {t:"Bounded retrieval", d:"What restricting Claude to the provided sources turns generation into: answers only from the materials, with gaps flagged."},
    {t:"Best-of-N", d:"Run the same request several times and compare. Agreement raises confidence; differences show soft spots. It does not prove truth."},
    {t:"Cell-level citations", d:"Claude for Excel links figures back to the exact cells they came from."},
    {t:"Verified-output path", d:"Code execution for numbers: checkable and re-runnable, but not infallible, because Claude writes the code."},
    {t:"Convergence", d:"The point where more iteration rounds only bring tiny changes. Stop prompting and finish with a manual edit."},
    {t:"Over-delegation", d:"Giving AI more than the risk profile justifies, e.g. letting it approve because it drafted well."},
    {t:"Pairing rule", d:"Many needs span two configuration slots wired together, e.g. 'cite the source' (instruction) + the documents (knowledge base)."},
    {t:"Look-alike connector", d:"A public-directory connector mistaken for the organisation's vetted one. Confirm the right path with your admin."},
    {t:"Least privilege", d:"Grant the narrowest access that gets the job done; revisit when the job changes."},
    {t:"Partial redaction", d:"Names removed, but other fields (account number, rare job title, a specific date) still identify the person."},
    {t:"Diligence gap", d:"The gap between policy and actual practice, e.g. shadow use of personal accounts. Fix by making the compliant route the easy default."},
    {t:"Expectation mismatch", d:"The task is not something Claude can do (e.g. predict exact sales). No prompt fixes it; reshape the task into a range or driver model."},
    {t:"Auto-summarisation (compaction)", d:"Near the context limit, claude.ai condenses earlier messages (paid plans with code execution). Detail is lost, so early instructions can fade."},
    {t:"Project-scoped Memory", d:"Memory kept separate per Project, so Client A never appears in Client B. The official answer for client separation (not Incognito)."}
  ];
  var have = new Set((window.CA.glossary || []).map(function (g) { return g.t.toLowerCase(); }));
  window.CA.glossary = (window.CA.glossary || []).concat(add.filter(function (g) { return !have.has(g.t.toLowerCase()); }));
})();
