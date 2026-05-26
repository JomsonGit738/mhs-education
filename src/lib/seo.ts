import type { Metadata } from 'next';
import type { Thing, WithContext } from 'schema-dts';
import type { BlogPost, Course } from '../data/content';

export const siteConfig = {
  name: 'MHS Education',
  legalName: 'MHS Education',
  domain: 'https://www.mhseducation.co.uk',
  description:
    'MHS Education helps students plan UK study pathways with admissions guidance, application support, and practical student advice.',
  authors: [{ name: 'MHS Education', url: 'https://www.mhseducation.co.uk/about' }] as Array<{
    name: string;
    url: string;
  }>,
  contactEmail: 'info@mhseducation.co.uk',
  contactPhone: '07521772131',
  address: {
    streetAddress: 'Suite F5, New Road Business Centre, 109 New Road',
    addressLocality: 'Whitechapel',
    postalCode: 'E1 1HJ',
    addressCountry: 'GB',
  },
  logoPath: '/mhseducation.jpeg',
  defaultOgImage: '/mhseducation.jpeg',
} as const;

export const legalLastUpdated = 'May 27, 2026';

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.domain).toString();

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  type?: 'website' | 'article';
  image?: string;
  noIndex?: boolean;
};

export const buildMetadata = ({
  title,
  description,
  path,
  keywords,
  type = 'website',
  image = siteConfig.defaultOgImage,
  noIndex = false,
}: MetadataInput): Metadata => ({
  title,
  description,
  keywords,
  authors: siteConfig.authors,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'education',
  alternates: {
    canonical: path,
  },
  robots: {
    index: !noIndex,
    follow: !noIndex,
    googleBot: {
      index: !noIndex,
      follow: !noIndex,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type,
    url: absoluteUrl(path),
    title,
    description,
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [
      {
        url: absoluteUrl(image),
        alt: `${siteConfig.name} educational guidance`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [absoluteUrl(image)],
  },
});

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]): WithContext<Thing> =>
  ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
  }) as WithContext<Thing>;

export const buildEducationalOrganizationSchema = (): WithContext<Thing> =>
  ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': absoluteUrl('/#organization'),
  name: siteConfig.legalName,
  url: absoluteUrl('/'),
  logo: absoluteUrl(siteConfig.logoPath),
  description: siteConfig.description,
  email: siteConfig.contactEmail,
  telephone: siteConfig.contactPhone,
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61584763750775&locale=en_GB',
    'https://www.instagram.com/mhs_education/',
    'https://www.linkedin.com/in/mhs-education-a19775405/',
    'https://www.tiktok.com/@mhs_education',
    'https://www.youtube.com/@MHS_Education',
    'https://uk.pinterest.com/mhseducation9/_profile/',
  ],
  }) as WithContext<Thing>;

export const buildCourseSchema = (course: Course): WithContext<Thing> =>
  ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.description,
  provider: {
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    url: absoluteUrl('/'),
  },
  educationalCredentialAwarded: course.title,
  courseMode: 'In-person and guided admissions support',
  timeRequired: course.duration,
  image: absoluteUrl(course.image),
  url: absoluteUrl('/courses'),
  }) as WithContext<Thing>;

export const buildArticleSchema = (post: BlogPost, articleBody: string[]): WithContext<Thing> =>
  ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: [absoluteUrl(post.image)],
  author: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(siteConfig.logoPath),
    },
  },
  mainEntityOfPage: absoluteUrl(`/blog/${post.id}`),
  datePublished: new Date(post.date).toISOString(),
  dateModified: new Date(post.date).toISOString(),
  articleSection: 'Admissions Guidance',
  keywords: post.tags ?? [],
  articleBody: articleBody.join('\n\n'),
  }) as WithContext<Thing>;

export const buildBlogListingSchema = (posts: BlogPost[]): WithContext<Thing> =>
  ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'MHS Education insights',
  itemListElement: posts.map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: absoluteUrl(`/blog/${post.id}`),
    name: post.title,
    description: post.excerpt,
  })),
  }) as WithContext<Thing>;

export const buildFaqSchema = (
  items: Array<{
    question: string;
    answer: string;
  }>,
) : WithContext<Thing> =>
  ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
  }) as WithContext<Thing>;
