"use client"


import { allBlogs } from "../data/projects";
import ProjectCard from "../components/projectCard";
import { useState} from "react";
import Header from "../components/layout/Header";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Categories derived from the projects
  const categories = ["all", "web", "mobile", "design"];
  
  const filteredProjects = allBlogs.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    
    // You can add logic to categorize projects if needed
    const categoryMap: Record<string, string[]> = {
      "web": ["E-commerce", "Stylos Consults", "Igitego", "Micro AI", "nex-cent", "Education Hub"],
      "mobile": ["Carpooling App", "Car Rental"],
      "design": ["Green Realtor", "Bookme"]
    };
    
    return matchesSearch && categoryMap[filter]?.some(cat => project.title.includes(cat));
  });

  return (
    <>
    <Header />
    <div className="container mx-auto space-y-10 px-4 py-12">
      <h2 className="text-black text-3xl md:text-5xl pt-10  text-center font-semibold">
            My <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'>Projects</span>
          </h2>
      {/* Search and Filter */}
      <div className="mb-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-4 py-2 text-black pr-10 border border-gray-300 rounded-lg "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
       
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                filter === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              excerpt={project.excerpt}
              coverImage={project.coverImage}
              date={project.date}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-700">No projects found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
 
    </>
   );
}



// type SortDirection = "newest" | "oldest";

// function useSortProjects(projects: any) {
//   const [sortDirection, setSortDirection] = useState<SortDirection>("newest");
  
//   const sortedProjects = useMemo(() => {
//     return [...projects].sort((a, b) => {
//       const dateA = new Date(a.date).getTime();
//       const dateB = new Date(b.date).getTime();
      
//       return sortDirection === "newest" 
//         ? dateB - dateA 
//         : dateA - dateB;
//     });
//   }, [projects, sortDirection]);
  
//   const toggleSortDirection = () => {
//     setSortDirection(prev => prev === "newest" ? "oldest" : "newest");
//   };
  
//   return { 
//     sortedProjects, 
//     sortDirection, 
//     toggleSortDirection 
//   };
// }