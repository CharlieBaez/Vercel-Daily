/* eslint-disable @typescript-eslint/no-explicit-any */
export type Article = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    body: any[],
    category: string,
    author: {name:string, avatar:string};
    publishedAt: string;
    imageUrl: string,
    isTrending: boolean,
};

export type BreakingNews = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
};

export type SiteContent = {
  header:{
    logo:{
      img:{
        src: string;
        alt: string;
        width: number;
        height: number;
      },
      link:{
        text: string;
        href: string;
      }
    },
    navigation:{
      id: string;
      text:string;
      href:string;
    }[],
  };
  footer:{
    copywriteDate: number;
    copywriteContent: string;
  };
  hero:{
    eyebrow: string;
    title: string;
    description: string;
    img:{
      src: string;
      alt: string;
      width: number;
      height: number;
    },
  };
  banner:{
    eyebrow: string;
  };
  articleList:{
    eyebrow: string;
    title: string;
  };
  subscription:{
    button:{
      subscribeLabel: string,
      unsubscribeLabel: string,
    },
  },
  articlePage:{
    preview:{
      eyebrow: string;
      title: string;
      description: string;
    },
    trending: {
      eyebrow: string;
      title: string;
      noResults: string;
    }
  },
  search:{
    searchPage:{
      eyebrow:string;
      title:string;
      description: string;
    };
    searchForm:{
      inputField:{
        label:string,
        placeholder:string,
      },
      selectField:{
        label:string,
        placeholder:string,
      },
      submit:{
        label: string;
      }
    }
    searchNoResults:{
      resultsLabel:string;
      noResultsText:string;
    }
  }
}