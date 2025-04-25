"use client"

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import BlurImage from "./BlurImage";

interface SmallProjectCardProps {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  link: string;
}

export default function SmallProjectCard({ title, excerpt, coverImage, date, link }: SmallProjectCardProps) {
  const [isLoading, setLoading] = useState(true);
  
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  
  return (
    <Link href={link} className="group block">
      <div className="flex flex-col items-center gap-3 p-5 rounded-md transition-all bg-gray-50">
       <BlurImage width={250} height={250} alt={title} link={link} image={coverImage} />
        
        <div className="flex-1 min-w-0 ">
          <div className="flex items-baseline justify-between">
            <h4 className="text-lg font-semibold text-gray-800 truncate">{title}</h4>
            <ExternalLink size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm text-gray-500 mb-1">{formattedDate}</p>
          <p className="text-sm text-gray-600 line-clamp-1">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}