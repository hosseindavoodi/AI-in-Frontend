import React from "react";

interface Article {
  topic: string;
  title: string;
  content: string;
  publishDate: string;
}

const articles: Article[] = [
  {
    topic: "Programming",
    title: "Improving Code Readability: Best Practices",
    content:
      "Enhance the readability of your codebase with these best practices. From meaningful variable names to consistent formatting, learn how to make your code more understandable and maintainable.",
    publishDate: "2024-03-26",
  },
  {
    topic: "Programming",
    title: "Introduction to Functional Programming Concepts",
    content:
      "Explore the fundamentals of functional programming and its benefits. Learn about immutability, higher-order functions, and how to leverage these concepts to write cleaner and more concise code.",
    publishDate: "2024-01-27",
  },
  {
    topic: "Teaching",
    title: "Creating Engaging Online Learning Experiences",
    content:
      "Design interactive and engaging online courses that captivate learners. Discover effective strategies for incorporating multimedia content, fostering discussions, and promoting active participation.",
    publishDate: "2024-03-28",
  },
  {
    topic: "Teaching",
    title: "Building a Positive Classroom Culture",
    content:
      "Cultivate a positive and inclusive classroom environment to support student learning and well-being. Learn techniques for fostering respect, collaboration, and a sense of belonging among students.",
    publishDate: "2024-02-29",
  },
  {
    topic: "Healthcare",
    title: "The Benefits of Mindfulness Meditation",
    content:
      "Discover the transformative power of mindfulness meditation for improving mental health and overall well-being. Learn simple mindfulness techniques to reduce stress, increase focus, and cultivate inner peace.",
    publishDate: "2024-03-30",
  },
  {
    topic: "Healthcare",
    title: "5 Tips for Better Sleep Hygiene",
    content:
      "Improve your sleep quality with these practical tips for better sleep hygiene. From establishing a bedtime routine to creating a comfortable sleep environment, optimize your sleep habits for restful nights.",
    publishDate: "2024-03-01",
  },
  {
    topic: "Cooking",
    title: "Exploring Global Cuisine: Flavorful Recipes to Try",
    content:
      "Embark on a culinary adventure with these delicious recipes from around the world. From spicy curries to savory pasta dishes, expand your palate and explore new flavors in your own kitchen.",
    publishDate: "2024-04-01",
  },
  {
    topic: "Cooking",
    title: "Healthy Meal Prep for Busy Weekdays",
    content:
      "Simplify your weekday meals with these nutritious and easy-to-make recipes. Plan ahead and prepare healthy meals in advance to save time and stay on track with your health goals.",
    publishDate: "2024-04-02",
  },
  {
    topic: "Project Management",
    title: "Effective Time Management Techniques for Project Managers",
    content:
      "Master the art of time management as a project manager. Learn how to prioritize tasks, allocate resources efficiently, and minimize delays to ensure successful project delivery.",
    publishDate: "2024-04-03",
  },
  {
    topic: "Project Management",
    title: "Strategies for Agile Project Planning",
    content:
      "Implement agile project planning methodologies to adapt to changing project requirements and deliver value to stakeholders. Explore sprint planning, backlog grooming, and other agile practices.",
    publishDate: "2024-04-04",
  },
];

const ArticleList: React.FC = () => {
  const sortedArticles = [...articles].sort((a, b) => {
    return (
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  });

  return (
    <div>
      <h1>Articles</h1>
      {sortedArticles.map((article, index) => (
        <div key={index} style={{ marginBottom: "50px", maxWidth: "700px" }}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <p style={{ color: "GrayText" }}>
            Publish Date: {article.publishDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
