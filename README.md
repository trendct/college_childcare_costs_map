#TrendDataMapper project template

#####About
This is a project that depends on TrendCT libraries Trendy and TrendDataMapper, which are separate repos.

This was removed from the TrendDataMapper repo so that this repository could be forked to start new projects, rather than keeping it as a demo subdirectory of TrendDataMapper. The vendor/TrendDataMapper/ and vendor/Trendy/ folders are clones of their respective github repos, so that any good changes can just be pushed there.

#####Quick start

Create a MapProjectTemplate:

    $ git clone https://github.com/trendct/MapProjectTemplate.git DESTINATION

Get the Trend dependencies:

    $ cd DESTINATION/vendor
    $ bash git_em.sh

That script git_em.sh is shorthand for:

    $ git clone https://github.com/trendct/TrendDataMapper.git TrendDataMapper/
    $ git clone https://github.com/trendct/Trendy.js.git Trendy/

#####Tinkering
We're not near the point of documenting this project, but the project-specific files are index.html and everything in the resources directory.

#####Directory structure
    .
    ├── README.md
    ├── index.html
    ├── resources
    │   ├── data
    │   │   └── sample_project_data.js
    │   └── main.js
    └── vendor
        ├── TrendDataMapper
        │   ├── README.md
        │   ├── css
        │   │   └── TrendDataMapper.css
        │   └── js
        │       ├── TrendDataMapper.js
        │       └── ct_towns.topojson.js
        ├── Trendy
        │   ├── README.md
        │   └── Trendy.js
        ├── d3.min.js
        ├── datamaps.usa.min.js
        └── topojson.min.js
