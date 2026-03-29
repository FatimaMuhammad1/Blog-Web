// Helper functions
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getRelatedArticles = (currentId: string, limit = 3): Article[] => {
  return articles.filter(article => article.id !== currentId).slice(0, limit);
};

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "001",
    title: "The Lost Art of Letter Writing",
    subtitle: "Rediscovering connection through handwritten correspondence",
    category: "Craft",
    date: "Dec 18, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80",
    author: {
      name: "Elena Vance",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      bio: "Writer, paper enthusiast, and advocate for slow correspondence",
    },
    content: {
      introduction: "In an age of instant messages and fleeting notifications, there exists a quiet rebellion: the handwritten letter. Not a text, not an email, but ink pressed deliberately onto paper, folded with care, and entrusted to the postal journey.",
      sections: [
        {
          heading: "The Weight of Paper",
          content: "A letter carries weight that pixels cannot replicate. The texture of the stationery, the character of the handwriting, the slight imperfections where the pen paused—these elements communicate presence in a way that digital words simply cannot. Each letter becomes an artifact, a physical proof that someone carved time from their day to think only of you.",
        },
        {
          heading: "Building a Practice",
          content: "Start with one letter per month. Choose paper that brings you joy—perhaps a cream-colored card stock or something with a subtle texture. Let go of perfection. Cross out mistakes, let your thoughts meander. The beauty is in the human imperfection, the visible thinking.",
        },
        {
          heading: "The Art of Waiting",
          content: "Part of letter writing's magic is the delay. The anticipation of a response, the surprise of finding an envelope among bills and advertisements—this slow rhythm creates a different kind of connection. It asks us to be patient, to trust that meaningful things unfold in their own time.",
        },
      ],
      conclusion: "In sending letters, we resist the demand for immediacy. We choose depth over speed, permanence over ephemera. The letter becomes both a gift and a practice—one that reminds us that some things are worth waiting for.",
    },
    tags: ["slow living", "handcraft", "connection", "analog"],
  },
  {
    id: "002",
    title: "Morning Fog in Kyoto",
    subtitle: "Three weeks learning to see at Arashiyama",
    category: "Places",
    date: "Dec 12, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80",
    author: {
      name: "Marcus Wei",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Photographer and contemplative traveler",
    },
    content: {
      introduction: "I came to Kyoto's bamboo groves expecting the iconic photographs—towering stalks, dappled light, that famous path. Instead, I found the fog, and in the fog, I found something I didn't know I was looking for.",
      sections: [
        {
          heading: "Arriving Before Dawn",
          content: "The first morning, I woke at 4:30 am, walking through streets still holding the previous night's quiet. The bamboo grove at Arashiyama transforms at this hour. Without crowds, without the noise of cameras, the forest speaks in creaks and whispers. The fog rolled in from the river, and suddenly the famous view disappeared—replaced by something more intimate.",
        },
        {
          heading: "Learning to Wait",
          content: "For three weeks, I returned each morning. Some days the fog never lifted. Some days it never came. I learned to sit with uncertainty, to appreciate the hour regardless of conditions. The practice of showing up without expectation became the point itself.",
        },
        {
          heading: "What the Fog Taught",
          content: "Visibility changes everything. In full clarity, we rush to capture and move on. In fog, we must stay present, attentive to what emerges from the white. Each revealed bamboo stalk felt like a small gift. I began photographing less and watching more.",
        },
      ],
      conclusion: "I took fewer photographs in Kyoto than anywhere I've traveled. But I returned with something different: the understanding that seeing requires patience, and sometimes obscurity teaches us more than clarity ever could.",
    },
    tags: ["Japan", "slow travel", "photography", "presence"],
  },
  {
    id: "003",
    title: "The 5 PM Kitchen Ritual",
    subtitle: "How an hour of cooking became my meditation",
    category: "Rituals",
    date: "Dec 8, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    author: {
      name: "Amara Santos",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Home cook and ritual designer",
    },
    content: {
      introduction: "Every evening at five, I turn off my phone, put on the same playlist, and step into my kitchen. Not to perform, not to optimize, but to practice the only form of meditation that has ever worked for me.",
      sections: [
        {
          heading: "The Sacred Transition",
          content: "The shift from work to kitchen is intentional. I change from work clothes, wash my hands slowly, survey what's available. This buffer zone—these small deliberate actions—signal to my nervous system that one part of the day is ending and another beginning.",
        },
        {
          heading: "Vegetables as Practice",
          content: "Chopping an onion requires just enough attention to keep the mind from wandering too far, but not so much that you can't think at all. It's the middle path—present enough to avoid cutting yourself, free enough to process the day. The rhythm of the knife, the transformation of raw materials, the building of layers in a pot.",
        },
        {
          heading: "The Meal is Secondary",
          content: "Some nights dinner is beautiful. Many nights it's imperfect—underseasoned, overcooked, thrown together. This isn't about creating Instagram-worthy food. The nourishment isn't just in eating but in the hour that preceded it.",
        },
      ],
      conclusion: "Rituals work because they're repeated. The kitchen at 5 pm has become sacred not through any special act, but through showing up, night after night, to the simple work of feeding myself and anyone lucky enough to wander in.",
    },
    tags: ["cooking", "rituals", "mindfulness", "daily practice"],
  },
  {
    id: "004",
    title: "Embracing the Messy Middle",
    subtitle: "Why every creative project has a terrible phase",
    category: "Mindset",
    date: "Dec 4, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80",
    author: {
      name: "Jordan Ellis",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Author and creative coach",
    },
    content: {
      introduction: "There's a phase in every project—whether you're writing a novel, learning an instrument, or building a business—when everything feels like garbage. Understanding this phase won't make it pleasant, but it might help you survive it.",
      sections: [
        {
          heading: "The Anatomy of the Dip",
          content: "It arrives after the initial excitement fades. The honeymoon is over. You can see clearly now what you couldn't see at the start: how far you have to go, how much you don't know, how naive your original vision was. This is the moment most people quit.",
        },
        {
          heading: "Why the Middle Matters",
          content: "The messy middle is where the real work happens. The beginning is romance; the end is celebration. But the middle—that's where the skill is built, where the vision gets refined through struggle. What emerges from this phase is always different, often better, than what you imagined.",
        },
        {
          heading: "Strategies for Survival",
          content: "Lower the bar. Commit to doing the smallest possible unit. Tell someone you trust that you're in the slog. Remember that every finished thing you admire went through its own middle. Keep a note from a past project reminding yourself that you've survived this before.",
        },
      ],
      conclusion: "The messy middle isn't a sign you're doing it wrong. It's a sign you're doing it at all. The only way out is through, and on the other side waits something that couldn't exist without this struggle.",
    },
    tags: ["creativity", "perseverance", "growth", "process"],
  },
  {
    id: "005",
    title: "Collecting Silence",
    subtitle: "A month of intentional quiet in a noisy world",
    category: "Rituals",
    date: "Nov 28, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
    author: {
      name: "Iris Nakamura",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      bio: "Sound designer and silence enthusiast",
    },
    content: {
      introduction: "I work in sound design. My days are filled with audio—shaping it, refining it, layering it. But last month, I began a different project: actively seeking out silence, treating it not as absence but as something to collect.",
      sections: [
        {
          heading: "The Silence Inventory",
          content: "True silence is rare. But pockets exist: the pause between songs, the library before opening, the world at 3 am, the moment after fresh snow. I started noticing these moments, cataloging them, becoming a connoisseur of quiets.",
        },
        {
          heading: "The Sound of Nothing",
          content: "Silence isn't actually silent. There's always something—blood in your ears, distant hum of electricity, your own breathing. But removing the usual cacophony reveals these subtle sounds, and in them, a strange intimacy with your own existence.",
        },
        {
          heading: "Creating Space for Quiet",
          content: "I began building silence into my days deliberately. Thirty minutes each morning without music, podcasts, or screens. The car ride home in quiet. Dinner without background entertainment. At first, it felt uncomfortable. Then necessary.",
        },
      ],
      conclusion: "Silence, I discovered, isn't the opposite of sound. It's a different kind of listening—one that lets you hear what's been drowned out all along. Now I guard my quiet times fiercely, knowing they're the container for everything else.",
    },
    tags: ["silence", "mindfulness", "rituals", "presence"],
  },
  {
    id: "006",
    title: "The Library at the Edge of Town",
    subtitle: "Finding unexpected community in the quietest place",
    category: "Stories",
    date: "Nov 22, 2026",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&q=80",
    author: {
      name: "Theodore Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      bio: "Writer and community observer",
    },
    content: {
      introduction: "The Maplewood Branch Library sits where the suburb thins into farmland. It's small, underfunded, and should have closed years ago. Instead, it's become the unlikely heart of a community learning to gather again.",
      sections: [
        {
          heading: "The Cast of Regulars",
          content: "There's Harold, who reads the same agricultural journals his father did. The homeschooling mothers who've claimed the craft table. The retired professor who shows up precisely at opening. The teenager who's there every day after school, not reading exactly, but present. We nod. We notice each other's absences.",
        },
        {
          heading: "The Quiet Agreement",
          content: "No one coordinates, but somehow the library works. Someone always notices when the water fountain stops working. The plants by the window are tended by hands unknown. Lost items appear at the front desk. It's citizenship practiced in micro-doses.",
        },
        {
          heading: "What the Building Holds",
          content: "A library is just shelves and chairs. But this one holds something harder to name: the permission to exist without purchasing anything, to share space without performing, to be alone together. In a world optimizing for engagement, this building asks nothing of us.",
        },
      ],
      conclusion: "I don't know most of their names. But I've spent more time with these strangers than with many friends. The library teaches a different kind of belonging—one built on proximity and time, on the simple fact of returning, again and again, to the same small corner of the world.",
    },
    tags: ["community", "libraries", "belonging", "third places"],
  },
];
