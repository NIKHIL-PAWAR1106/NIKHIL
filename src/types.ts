export interface Author {
  name: string;
  role: string;
  affiliation: string;
  avatarInitials: string;
  avatarBg: string;
  bio: string;
}

export interface ArchitecturalSpec {
  label: string;
  value: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  pullQuote?: {
    text: string;
    attribution: string;
  };
  figure?: {
    caption: string;
    number: string;
    diagramType: 'elevation' | 'plan' | 'axonometric' | 'section' | 'material';
  };
  specs?: ArchitecturalSpec[];
}

export interface Comment {
  id: string;
  author: string;
  role: string;
  timestamp: string;
  content: string;
  likes: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Tectonics & Materials' | 'Brutalism & Concrete' | 'Urban Ecology & Climate' | 'Spatial Philosophy' | 'Adaptive Reuse';
  author: Author;
  publishedDate: string;
  readTimeMinutes: number;
  featured?: boolean;
  edition: string;
  plateNumber: string;
  palette: {
    accent: string;
    bgAccent: string;
    borderAccent: string;
    diagramTone: string;
  };
  tags: string[];
  sections: ArticleSection[];
  conclusion: string;
  footnotes: string[];
  initialClaps: number;
  initialComments: Comment[];
}
