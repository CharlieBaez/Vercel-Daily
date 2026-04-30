import { SiteContent } from './types';
import vercel from '../../../public/vercel.svg'
import globe from '../../../public/globe.svg'

export async function getSiteContent(): Promise<SiteContent>{
  'use cache';

  return content;
}

const content: SiteContent = {
  header:{
    logo:{
      img:{
        src: globe,
        alt: 'traingle Vercel logo',
        width: 27,
        height: 27,
      },
      link:{
        text: 'Vercel Daily',
        href: '/',
      }
    },
    navigation:[
      {
        id: '1',
        text:'Home',
        href:'/',
      },
      {
        id: '2',
        text:'Search',
        href:'/search',
      },
    ],
  },
  footer:{
    copywriteDate: new Date().getFullYear(),
    copywriteContent: 'Vercel Daily. All rights reserved.',
  },
  hero:{
    eyebrow: 'Technology reporting',
    title:'News for people who build webs stuff.',
    description:'Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.',
      img:{
        src: vercel,
        alt: 'traingle Vercel',
        width: 400,
        height: 400,
      },
  },
  banner:{
    eyebrow: 'Breaking News',
  },
  articleList:{
    eyebrow: 'Featured',
    title: 'Today\'s top stories',
  },
  subscription:{
    button:{
      subscribeLabel: 'Subscribe',
      unsubscribeLabel: 'Unsubscribe',
    },
  },
  articlePage:{
    preview:{
      eyebrow: 'Subscriber exclusive',
      title: 'Continue reading with Vercel Daily',
      description: 'Subscribe to unlock the full article, trending analysis, and subscriber-only coverage.',
    },
    trending:{
      eyebrow: 'Trending',
      title: 'More from Vercel Daily',
      noResults: 'No trending articles are available right now.'
    }
  },
  search:{
    searchPage:{
      eyebrow: 'Browse articles',
      title: 'What are you interested in?',
      description: 'Peruse our library and find something awesome',
    },
    searchForm:{
      inputField:{
        label: 'Search',
        placeholder: 'Search articles...',
      },
      selectField:{
        label: 'Category',
        placeholder: 'All categories',
      },
      submit:{
        label: 'Search',
      }
    },
    searchNoResults:{
      resultsLabel: 'Nothing to see here',
      noResultsText: 'Try a different search term or category.',
    }
  }
}