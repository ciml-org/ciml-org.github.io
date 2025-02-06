// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-ciml-project",
    title: "CIML Project",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "Members of the CIML Project team",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-training-docs",
          title: "Training Docs",
          description: "CIML Training Material and Documentation",
          section: "Navigation",
          handler: () => {
            window.location.href = "/train-matl/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-sdsc-ciml-2022-summer-institute",
      
        title: "SDSC CIML 2022 Summer Institute",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/Summer-Inst/";
        
      },
    },{id: "post-sdsc-ciml-2021-summer-institute",
      
        title: "SDSC CIML 2021 Summer Institute",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/Summer-Inst/";
        
      },
    },{id: "post-sdsc-hpc-user-training-to-begin-on-january-22-2021",
      
        title: "SDSC HPC User Training to begin on January 22 2021",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/SDSC-HPC-User-Training-to-begin-on-January-22-2021/";
        
      },
    },{id: "post-nsf-award-announced-for-the-ciml-project",
      
        title: "NSF Award Announced for the CIML Project",
      
      description: "CyberTraining: Implementation: Small: Developing a Best Practices Training Program in Cyberinfrastructure-Enabled Machine Learning Research",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/NSF-Awards-the-CIML-Project/";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
