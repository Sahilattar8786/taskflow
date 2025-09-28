import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Check,
  Zap,
  Calendar,
  Bot,
  Workflow,
  LineChart,
  ChevronRight,
  PlayCircle,
  Stars,
  Sparkles,
  Github,
  Globe,
  Mail,
} from "lucide-react";

// --- Utility ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// --- Mock logos ---
const logos = ["Notion", "Slack", "Asana", "Gmail", "Google Calendar", "Github"];

const features = [
  {
    icon: Bot,
    title: "Plain English → Tasks",
    desc: `Say "Fix checkout bug, assign to Rahul by Friday" — Taskpilot creates the task, sets the deadline, and notifies.`,
  },
  {
    icon: Workflow,
    title: "No Jira, No Stress",
    desc: "Forget complicated sprints. See only what’s important: tasks, owners, and progress.",
  },
  {
    icon: Calendar,
    title: "Google Calendar Sync",
    desc: "Deadlines and meetings sync automatically with your calendar. Never miss a milestone.",
  },
  {
    icon: Stars,
    title: "AI Status Updates",
    desc: "Get daily progress summaries in plain language. No chasing or micromanaging.",
  },
  {
    icon: Zap,
    title: "Quick Decisions",
    desc: "Approve, reassign, or change deadlines in one click — from Slack or email.",
  },
  {
    icon: LineChart,
    title: "Clarity for Founders",
    desc: "Track team momentum at a glance. Focus on growth, not ticket backlogs.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    tagline: "For solo founders & very small teams",
    bullets: ["Up to 5 team members", "Basic task automation", "Email + Slack notifications"],
    cta: "Start free",
  },
  {
    name: "Growth",
    price: "$9",
    highlight: true,
    tagline: "Perfect for 10–15 person teams",
    bullets: [
      "Unlimited tasks & projects",
      "Google Calendar integration",
      "Daily AI progress reports",
      "Priority support",
    ],
    cta: "Try Growth",
  },
  {
    name: "Scale",
    price: "Custom",
    tagline: "For larger startups with advanced needs",
    bullets: ["Custom integrations", "Dedicated onboarding", "Compliance support"],
    cta: "Contact sales",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 antialiased">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/30 via-fuchsia-600/20 to-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-inner">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="text-lg font-semibold tracking-tight">
              Taskpilot<span className="text-fuchsia-400">.ai</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-neutral-300 hover:text-white" href="#features">
              Features
            </a>
            <a className="text-sm text-neutral-300 hover:text-white" href="#workflow">
              Workflow
            </a>
            <a className="text-sm text-neutral-300 hover:text-white" href="#pricing">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-2">
                        <Button  className="flex bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-600/20">
                            <Github className="mr-2" /> Star
                        </Button>
                        <Button className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-600/20">
                            Launch App
                        </Button>
         </div>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button className="p-2 rounded-md bg-white/5 hover:bg-white/10">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 md:pb-24 md:pt-24">
        <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-10 md:grid-cols-2">
          {/* Left content */}
          <motion.div variants={fadeUp}>
            <Badge className="mb-4 bg-indigo-600/30 text-indigo-200 hover:bg-indigo-600/30">
              <span className="mr-2 inline-flex items-center">⚡</span> Manage your team, not Jira boards
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight md:text-6xl">
              Run your dev & ops team{" "}
              <span className="bg-gradient-to-r from-white to-fuchsia-200 bg-clip-text text-transparent">
                without stress
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-neutral-300 md:text-lg">
              Taskpilot.ai helps non-technical founders manage 10–15 person teams.
              Assign tasks in plain English, sync with Google Calendar, and get AI
              progress updates — without Jira overload.
            </p>

            {/* Input + Buttons stacked on mobile */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="flex w-full flex-col sm:flex-row items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
                <Mail className="ml-1 h-5 w-5 text-neutral-300" />
                <Input
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Work email"
                  className="flex-1 border-0 bg-transparent text-white placeholder:text-neutral-400 focus-visible:ring-0"
                />
                <Button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:opacity-90">
                  Join waitlist
                </Button>
              </div>
              <Button className="flex items-center justify-center rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10">
                <PlayCircle className="mr-2 h-5 w-5" /> Watch demo
              </Button>
            </div>
          </motion.div>

          {/* Right demo card */}
          <motion.div variants={fadeUp} className="relative">
            <Card className="border-white/10 bg-neutral-950/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-neutral-200">
                  Example: Founder → Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-300">
                <Step text={`"Build new pricing page, assign to Neha by Friday"`} />
                <Step text="✔ Task created with deadline" />
                <Step text="✔ Synced to Google Calendar" />
                <Step text="✔ Neha notified on Slack" />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Logos */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="flex items-center justify-center gap-6 overflow-x-auto py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {logos.map((l) => (
            <div key={l} className="group flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-neutral-300">
              <Globe className="h-4 w-4 opacity-60 group-hover:opacity-100" />
              {l}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            The simple way to{" "}
            <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
              manage teams
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-center text-neutral-300">
            Designed for non-technical founders running small dev & ops teams.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full border-white/10 bg-neutral-900/50">
                  <CardHeader className="pb-3">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-white">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-300">{f.desc}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-center text-2xl font-semibold">Simple, founder-friendly pricing</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-300">
          Start free. Upgrade when your team grows.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={`relative border-white/10 ${p.highlight ? "bg-gradient-to-b from-neutral-900 to-neutral-900/40 ring-1 ring-fuchsia-500/20" : "bg-neutral-900/40"}`}>
              {p.highlight && (
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-fuchsia-600/30 text-fuchsia-100">
                  Most popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-white">{p.name}</CardTitle>
                <div className="mt-2 text-3xl font-semibold">
                  {p.price}
                  {p.price !== "Custom" && (
                    <span className="ml-1 text-sm font-normal text-neutral-400">/mo</span>
                  )}
                </div>
                <p className="text-sm text-neutral-300">{p.tagline}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-400" /> {b}
                    </li>
                  ))}
                </ul>
                <Button className={`mt-6 w-full ${p.highlight ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500" : ""}`}>
                  {p.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">How Taskpilot works</h3>
            <p className="mt-2 text-neutral-300">
              No sprints, no tickets. Just tell Taskpilot in plain English what needs to be done,
              and it handles the rest — assigning, scheduling, and updating your team.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-emerald-400" />{" "}
                <span><strong>You say:</strong> “Launch new landing page by Friday.”</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-emerald-400" />{" "}
                <span><strong>Taskpilot creates:</strong> task assigned to the right person with a deadline.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-emerald-400" />{" "}
                <span><strong>Syncs automatically:</strong> Google Calendar, Slack, and Email notifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-emerald-400" />{" "}
                <span><strong>You get:</strong> AI-generated daily updates — no micromanagement needed.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button className="bg-gradient-to-r from-indigo-500 to-fuchsia-500">Try it now</Button>
              <Button className="flex items-center border-white/20 text-white hover:bg-white/10">
                Docs <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Terminal demo */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-4">
            <div className="font-mono text-sm text-neutral-200 space-y-2">
              <motion.pre variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                Founder: "Fix payment bug and assign to Rahul by Friday"
              </motion.pre>
              <motion.pre variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                ✔ Task created → Assigned to Rahul
              </motion.pre>
              <motion.pre variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                ✔ Synced with Google Calendar
              </motion.pre>
              <motion.pre variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                ✔ Rahul notified in Slack
              </motion.pre>
              <motion.pre variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                ✔ Daily progress update sent to founder
              </motion.pre>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <h3 className="text-center text-2xl font-semibold">Frequently asked</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Faq q="Is this for non-technical founders?" a="Yes. Taskpilot is designed so you don’t need to know Jira, sprints, or dev tooling to manage your team." />
          <Faq q="Does it integrate with Google Calendar?" a="Yes. Deadlines and tasks sync automatically with your calendar." />
          <Faq q="How does pricing work?" a="We price by team size. Start free, upgrade as your team grows." />
          <Faq q="Do you support Slack/Email?" a="Yes. Tasks and updates flow directly into Slack and email for easy access." />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">Taskpilot<span className="text-fuchsia-400">.ai</span></div>
            <p className="mt-2 text-sm text-neutral-400">AI Project Manager for Founders</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-300">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-300">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>About</li>
              <li>Careers</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-300">Get updates</div>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Input placeholder="Work email" className="border-white/10 bg-white/5 text-white placeholder:text-neutral-400 flex-1" />
              <Button className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:opacity-90">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Taskpilot.ai — All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Step({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/50 p-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
        <Check className="h-4 w-4" />
      </div>
      <div className="text-sm text-neutral-300">{text}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
      <div className="text-sm font-semibold text-white">{q}</div>
      <div className="mt-1 text-sm text-neutral-300">{a}</div>
    </div>
  );
}