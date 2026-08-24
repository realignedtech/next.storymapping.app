export const titles = {
  "intro": "Introduction",
  "getting-started": "Getting Started",
  "working-with-the-map": "Working With the Map",
  "planning-sprints-and-releases": "Plan Sprints and Releases",
  "freetopro": "Upgrading to Pro",
  "troubleshooting": "Common Issues & Questions",
  "privacy": "Privacy Information",
  "eula": "End User License Agreement",
  "support": "Support",
  // Pro features
  "pro": "Advanced Features",
  "overview": "Overview",
  "pro-setup": "Getting Started",
  "map-types": "Map Types",
  "admin-guide": "Admin Guide",
  "migration": "Data Center to Cloud Migration",
  "cloud-migration": "Cloud to Cloud Migration",
  "export": "Export Features",
  "board": "Board Management",
  "settings": "Settings",
  // Tutorials
  "tutorials": "Tutorials",
  "custom-field-swimlanes": "Custom Field Swimlanes",
  "multi-project-releases": "Multi-Project Releases",
  // Best practices
  "best-practices": "Best Practices",
  "storyvsjourneymap": "Story vs Journey Mapping",
  // What's new
  "whatsnew": "What's New",
}

export const StoryMapTitles = titles;

// Basic Story Maps Navigation
const BasicNav = [
  { link: "/", title: titles["intro"] },
  { link: "/getting-started", title: titles["getting-started"] },
  {
    link: "/tutorials", title: titles["tutorials"], children: [
      { link: "/working-with-the-map", title: titles["working-with-the-map"] },
      { link: "/planning-sprints-and-releases", title: titles["planning-sprints-and-releases"] },
    ]
  },
  {
    link: "/best-practices", title: titles["best-practices"], children: [
      { link: "/storyvsjourneymap", title: titles["storyvsjourneymap"] },
    ]
  },
  {
    link: "/support", title: titles["support"], children: [
      { link: "/freetopro", title: titles["freetopro"] },
      { link: "/troubleshooting", title: titles["troubleshooting"] },
      { link: "/privacy", title: titles["privacy"] },
      { link: "/eula", title: titles["eula"] },
    ]
  },
]

// Advanced Story Maps Navigation
const ProNav = [
  { link: "/pro", title: titles["pro"] },
  { link: "/pro/overview", title: titles["overview"] },
  { link: "/pro/setup", title: titles["pro-setup"] },
  {
    link: "/pro/features", title: "Features", children: [
      { link: "/map-types", title: titles["map-types"] },
      { link: "/export", title: titles["export"] },
      { link: "/board", title: titles["board"] },
      { link: "/settings", title: titles["settings"] },
    ]
  },
  {
    link: "/pro/tutorials", title: titles["tutorials"], children: [
      { link: "/custom-field-swimlanes", title: titles["custom-field-swimlanes"] },
      { link: "/multi-project-releases", title: titles["multi-project-releases"] },
    ]
  },
  { link: "/pro/admin-guide", title: titles["admin-guide"] },
  { link: "/pro/migration", title: titles["migration"] },
  { link: "/pro/cloud-migration", title: titles["cloud-migration"] },
  { link: "/pro/whatsnew", title: titles["whatsnew"] },
  {
    link: "/pro/support", title: titles["support"], children: [
      { link: "/troubleshooting", title: titles["troubleshooting"] },
      { link: "/privacy", title: titles["privacy"] },
      { link: "/eula", title: titles["eula"] },
    ]
  },
]

// Legacy combined nav for backward compatibility
const Nav = [
  { link: "/", title: titles["intro"] },
  {
    link: "/pro", title: titles["pro"], children: [
      { link: "/pro/overview", title: titles["overview"] },
      { link: "/pro/setup", title: titles["pro-setup"] },
      { link: "/pro/features/map-types", title: titles["map-types"] },
      { link: "/pro/admin-guide", title: titles["admin-guide"] },
      { link: "/pro/migration", title: titles["migration"] },
      { link: "/pro/cloud-migration", title: titles["cloud-migration"] },
      { link: "/pro/features/export", title: titles["export"] },
      { link: "/pro/features/board", title: titles["board"] },
      { link: "/pro/features/settings", title: titles["settings"] },
    ]
  },
  {
    link: "/tutorials", title: titles["tutorials"], children: [
      { link: "/tutorials/custom-field-swimlanes", title: titles["custom-field-swimlanes"] },
      { link: "/tutorials/multi-project-releases", title: titles["multi-project-releases"] },
    ]
  },
  {
    link: "/best-practices", title: titles["best-practices"], children: [
      { link: "/storyvsjourneymap", title: titles["storyvsjourneymap"] },
    ]
  },
  { link: "/whatsnew", title: titles["whatsnew"] },
  {
    link: "/support", title: titles["support"], children: [
      { link: "/freetopro", title: titles["freetopro"] },
      { link: "/troubleshooting", title: titles["troubleshooting"] },
      { link: "/privacy", title: titles["privacy"] },
      { link: "/eula", title: titles["eula"] },
    ]
  },
]

export { BasicNav, ProNav };
export default Nav;
