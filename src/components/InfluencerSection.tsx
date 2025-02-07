import React from "react";
import { Instagram, TrendingUp, Play } from "lucide-react";
import MenuSection from "./MenuSection";

const InfluencerSection: React.FC = () => {
  const featuredVideo = {
    embedUrl: "https://www.youtube.com/embed/GXO32o0B3qk?si=1jw8eADj7eJlOvHG",
    title: "The Ultimate Mango Lassi Experience",
    creator: "@foodie_sarah",
    views: "1.2M",
  };

  const influencerPosts = [
    {
      id: 1,
      embedUrl: "https://www.instagram.com/reel/C6rH0sLN4ib/embed",
      type: "reel",
      creator: "@lassi_lover",
      likes: "234K",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      embedUrl: "https://www.instagram.com/reel/C6rH0sLN4ib/embed",
      type: "reel",
      creator: "@lassi_lover",
      likes: "234K",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      embedUrl: "https://www.instagram.com/reel/C6rH0sLN4ib/embed",
      type: "reel",
      creator: "@lassi_lover",
      likes: "234K",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
 <>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lassi Lab – Loved by Influencers & Foodies!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of food enthusiasts sharing their Lassi Lab
            experience on social media
          </p>
        </div>

        {/* Featured Instagram Reel */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <iframe
            src={featuredVideo.embedUrl}
            className="w-full h-[400px] border-none rounded-2xl"
            allowFullScreen
          ></iframe>
        </div>

        {/* Influencer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {influencerPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              {post.type === "reel" ? (
                <iframe
                  src={post.embedUrl}
                  className="w-full h-80 border-none rounded-xl"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={post.thumbnail}
                  alt={`Post by ${post.creator}`}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <span>{post.creator}</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Follow us & tag #LassiLab to get featured!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <MenuSection/>
 </>
  );
};

export default InfluencerSection;
